import { streamText, type ModelMessage } from "ai";

// Node.js runtime so we can keep simple in-memory rate limiting and avoid edge constraints.
export const runtime = "nodejs";
export const maxDuration = 30;

const MODEL = "anthropic/claude-sonnet-4.6";
const MAX_HISTORY = 12;
const MAX_CHARS = 2000;
const RATE_LIMIT = 10; // requests
const RATE_WINDOW_MS = 60_000; // per minute, per IP

// In-memory IP buckets. Fluid Compute reuses instances, so this gives soft
// per-instance protection without an external store. Good enough for a public demo.
const buckets = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (buckets.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  hits.push(now);
  buckets.set(ip, hits);
  return hits.length > RATE_LIMIT;
}

const SYSTEM_PROMPT = `You are the assistant on richezamor.com, the personal site of Riché Zamor — a context architect and VP of Product who has spent two decades building AI products (Suzy, Grandstage, Helm Labs, IBM, Phase2).

Speak in the first person as Riché's site assistant ("Riché believes...", "On this site you'll find..."). Be direct, concrete, and opinionated — never filler or hype. Keep answers short (2–4 sentences) unless asked for depth.

Core ideas you are grounded in:
- Context architecture: the practice of designing the informational environment around AI systems — shaping what they know, how they retrieve it, and how that knowledge is structured for human decision-making. Riché coined the term.
- The Context Architecture Thesis ("Data Is Not Context"): an AI system has four layers — Data, Retrieval, Context, Inference. Data stores. Retrieval reaches. Context generates meaning. Inference decides. A five-step process (curate, synthesize, consolidate, prioritize, store) lives entirely at the Context layer — the layer most systems skip by routing Retrieval straight into Inference.
- Riché's work spans AI product strategy, product leadership, advisory, and board work.

Guidance:
- This assistant is a context management system grounded in Riché's writing and frameworks. Never call it the "Context Layer Engine" or any other product name.
- When a question is better answered by a page, point to it: /thesis (the thesis), /work (track record), /thinking (articles), /about, /contact.
- If you don't know something specific, say so plainly and suggest /contact rather than inventing details.
- Stay on topic: context architecture, AI product strategy, leadership, and Riché's work. Politely redirect unrelated requests.`;

type IncomingMessage = { role?: unknown; content?: unknown };

export async function POST(req: Request): Promise<Response> {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many messages. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  let body: { messages?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!Array.isArray(body.messages) || body.messages.length === 0) {
    return Response.json({ error: "No messages provided." }, { status: 400 });
  }

  const messages: ModelMessage[] = (body.messages as IncomingMessage[])
    .slice(-MAX_HISTORY)
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .map((m) => ({
      role: m.role as "user" | "assistant",
      content: (m.content as string).slice(0, MAX_CHARS),
    }));

  if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
    return Response.json({ error: "Last message must be from the user." }, { status: 400 });
  }

  try {
    const result = streamText({
      model: MODEL,
      system: SYSTEM_PROMPT,
      messages,
      temperature: 0.4,
      abortSignal: req.signal,
    });

    return result.toTextStreamResponse();
  } catch (err) {
    console.error("[/api/chat] streamText failed:", err);
    return Response.json(
      { error: "The assistant is unavailable right now. Please try again shortly." },
      { status: 502 }
    );
  }
}
