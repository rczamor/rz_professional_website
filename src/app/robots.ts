import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        // Explicitly allow AI crawlers for GEO/AIO visibility
        userAgent: [
          "GPTBot",
          "Google-Extended",
          "ClaudeBot",
          "Applebot-Extended",
          "PerplexityBot",
          "Bytespider",
        ],
        allow: "/",
      },
      {
        // Rate-limit aggressive SEO bots. `crawlDelay` is supported per-rule in
        // MetadataRoute.Robots (see node_modules/next/dist/docs/.../robots.md),
        // so this carries over the directive the retired public/robots.txt held.
        userAgent: ["AhrefsBot", "SemrushBot"],
        allow: "/",
        crawlDelay: 10,
      },
    ],
    sitemap: "https://www.richezamor.com/sitemap.xml",
  };
}
