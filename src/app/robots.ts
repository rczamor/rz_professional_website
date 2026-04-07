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
        // Rate-limit aggressive SEO bots
        userAgent: ["AhrefsBot", "SemrushBot"],
        allow: "/",
        // Note: crawl-delay not supported in MetadataRoute.Robots
        // Add via public/robots.txt if needed
      },
    ],
    sitemap: "https://richezamor.com/sitemap.xml",
  };
}
