// Kept free of path aliases and non-erasable TS syntax so the chat smoke test
// (scripts/smoke-chat-route.mjs) can import it directly under Node's type stripping.

/** The subset of AI SDK `fullStream` parts this helper reads. */
type StreamPart =
  | { type: "text-delta"; text: string }
  | { type: "error"; error: unknown }
  | { type: string };

export const UNAVAILABLE_MESSAGE =
  "The assistant is unavailable right now. Please try again shortly.";

/**
 * Turn a `streamText` result's `fullStream` into an HTTP response, holding the
 * status line until the first token (or failure) arrives.
 *
 * `toTextStreamResponse()` commits a 200 immediately, and provider errors —
 * e.g. the AI Gateway rejecting the model with a 403 — only surface inside the
 * stream afterwards. Visitors then get a 200 with an empty body and no error.
 * Waiting for the first part lets a failure before any text become a real 502
 * with a readable message instead.
 */
export async function textStreamResponseOrError(
  fullStream: AsyncIterable<StreamPart>,
  log: (message: string, err: unknown) => void = console.error
): Promise<Response> {
  const iterator = fullStream[Symbol.asyncIterator]();
  const encoder = new TextEncoder();

  const unavailable = () =>
    Response.json({ error: UNAVAILABLE_MESSAGE }, { status: 502 });

  let first: string | undefined;
  try {
    while (first === undefined) {
      const { done, value } = await iterator.next();
      if (done) {
        log("[/api/chat] stream ended before any text", null);
        return unavailable();
      }
      if (value.type === "error") {
        log("[/api/chat] model call failed:", (value as { error: unknown }).error);
        return unavailable();
      }
      if (value.type === "text-delta") {
        const text = (value as { text: string }).text;
        if (text) first = text;
      }
    }
  } catch (err) {
    log("[/api/chat] model call failed:", err);
    return unavailable();
  }

  const body = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(encoder.encode(first));
    },
    async pull(controller) {
      try {
        // Skip non-text parts until there's something to hand the reader.
        while (true) {
          const { done, value } = await iterator.next();
          if (done) {
            controller.close();
            return;
          }
          if (value.type === "text-delta") {
            const text = (value as { text: string }).text;
            if (!text) continue;
            controller.enqueue(encoder.encode(text));
            return;
          }
          if (value.type === "error") {
            // Headers are already sent; end the partial answer cleanly and log it.
            log("[/api/chat] stream failed mid-response:", (value as { error: unknown }).error);
            controller.close();
            return;
          }
        }
      } catch (err) {
        log("[/api/chat] stream failed mid-response:", err);
        controller.close();
      }
    },
    async cancel() {
      await iterator.return?.();
    },
  });

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
