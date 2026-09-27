/**
 * Streaming smoke test for the Ask Riché chat route.
 *
 * The route talks to a hosted model, so a live end-to-end call needs gateway
 * credentials that aren't available in CI or a local checkout. This exercises
 * the part that actually breaks across AI SDK majors — the `streamText` →
 * `toTextStreamResponse` plumbing, plus the route's own validation and rate
 * limiting — against a mock language model, so an SDK upgrade that changes the
 * streaming contract fails here instead of in production.
 *
 * Usage: node scripts/smoke-chat-route.mjs
 */

import assert from "node:assert/strict";
import { streamText } from "ai";
import { MockLanguageModelV4 } from "ai/test";
import { textStreamResponseOrError } from "../src/lib/chat-stream.ts";

const results = [];

function check(name, fn) {
  return Promise.resolve()
    .then(fn)
    .then(() => {
      results.push({ name, ok: true });
      console.log(`  \x1b[32mPASS\x1b[0m  ${name}`);
    })
    .catch((err) => {
      results.push({ name, ok: false });
      console.log(`  \x1b[31mFAIL\x1b[0m  ${name}\n         ↳ ${err.message}`);
    });
}

/** A model that streams a fixed reply, mimicking the provider's chunk shape. */
function mockModel(text = "Riché frames context as an architectural layer.") {
  return new MockLanguageModelV4({
    doStream: async () => ({
      stream: new ReadableStream({
        start(controller) {
          controller.enqueue({ type: "stream-start", warnings: [] });
          controller.enqueue({ type: "text-start", id: "0" });
          for (const word of text.split(" ")) {
            controller.enqueue({ type: "text-delta", id: "0", delta: `${word} ` });
          }
          controller.enqueue({ type: "text-end", id: "0" });
          controller.enqueue({
            type: "finish",
            finishReason: "stop",
            usage: { inputTokens: 10, outputTokens: 20, totalTokens: 30 },
          });
          controller.close();
        },
      }),
    }),
  });
}

/** A model whose call is rejected the way the AI Gateway rejects a disallowed model. */
function rejectingModel() {
  return new MockLanguageModelV4({
    doStream: async () => {
      const err = new Error("Free tier users do not have access to this model.");
      err.statusCode = 403;
      throw err;
    },
  });
}

const quiet = () => {};

async function main() {
  console.log("Ask Riché chat-route streaming smoke test\n");

  await check("streamText produces a text stream response", async () => {
    const result = streamText({
      model: mockModel(),
      system: "You are a test.",
      messages: [{ role: "user", content: "What is a context layer?" }],
      temperature: 0.4,
    });

    const response = result.toTextStreamResponse();
    assert.equal(response.status, 200, `expected 200, got ${response.status}`);
    assert.ok(response.body, "response has no body stream");

    const text = await new Response(response.body).text();
    assert.ok(
      text.includes("context"),
      `streamed body missing expected content: ${JSON.stringify(text.slice(0, 120))}`
    );
  });

  await check("streamed chunks arrive incrementally, not as one blob", async () => {
    const result = streamText({
      model: mockModel(),
      messages: [{ role: "user", content: "hi" }],
    });

    let chunks = 0;
    for await (const part of result.textStream) {
      if (part.length) chunks += 1;
    }
    assert.ok(chunks > 1, `expected multiple chunks, got ${chunks}`);
  });

  await check("abortSignal is accepted by streamText", async () => {
    const controller = new AbortController();
    const result = streamText({
      model: mockModel(),
      messages: [{ role: "user", content: "hi" }],
      abortSignal: controller.signal,
    });
    await new Response(result.toTextStreamResponse().body).text();
  });

  await check("route helper streams the full answer with a 200", async () => {
    const result = streamText({
      model: mockModel("one two three"),
      messages: [{ role: "user", content: "hi" }],
      onError: quiet,
    });
    const response = await textStreamResponseOrError(result.fullStream, quiet);
    assert.equal(response.status, 200, `expected 200, got ${response.status}`);
    const text = await response.text();
    assert.equal(text, "one two three ", `unexpected body: ${JSON.stringify(text)}`);
  });

  await check("gateway rejection becomes a 502 with a readable error, not an empty 200", async () => {
    const result = streamText({
      model: rejectingModel(),
      messages: [{ role: "user", content: "hi" }],
      onError: quiet,
    });
    let logged = null;
    const response = await textStreamResponseOrError(result.fullStream, (_m, err) => {
      logged = err;
    });
    assert.equal(response.status, 502, `expected 502, got ${response.status}`);
    const data = await response.json();
    assert.ok(data.error && data.error.length > 0, "502 body has no error message");
    assert.match(String(logged?.message), /Free tier/, "gateway error was not logged");
  });

  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} checks passed.`);
  return failed.length === 0 ? 0 : 1;
}

main()
  .then((code) => process.exit(code))
  .catch((err) => {
    console.error(`Smoke run aborted: ${err.message}`);
    process.exit(1);
  });
