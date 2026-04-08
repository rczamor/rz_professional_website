import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * AI crawler user-agent patterns for GEO monitoring (CAR-250).
 * Logs are emitted to stdout so Vercel Functions logs capture them.
 * Filter in Vercel dashboard with: "AI_CRAWLER_HIT"
 */
const AI_CRAWLER_PATTERNS = [
  { name: "GPTBot", pattern: /GPTBot/i },
  { name: "ChatGPT-User", pattern: /ChatGPT-User/i },
  { name: "ClaudeBot", pattern: /ClaudeBot/i },
  { name: "Google-Extended", pattern: /Google-Extended/i },
  { name: "Applebot-Extended", pattern: /Applebot-Extended/i },
  { name: "PerplexityBot", pattern: /PerplexityBot/i },
  { name: "Bytespider", pattern: /Bytespider/i },
  { name: "CCBot", pattern: /CCBot/i },
  { name: "Amazonbot", pattern: /Amazonbot/i },
  { name: "YouBot", pattern: /YouBot/i },
  { name: "Cohere-ai", pattern: /cohere-ai/i },
];

export function proxy(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";
  const matched = AI_CRAWLER_PATTERNS.find((c) => c.pattern.test(ua));

  if (matched) {
    console.log(
      JSON.stringify({
        event: "AI_CRAWLER_HIT",
        crawler: matched.name,
        path: request.nextUrl.pathname,
        timestamp: new Date().toISOString(),
        userAgent: ua,
      })
    );
  }

  return NextResponse.next();
}

export const config = {
  // Run on page routes only, skip static assets and API routes
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|eot)).*)",
  ],
};
