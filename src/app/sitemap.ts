import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.richezamor.com";

  // Last site-wide structural update to the core pages (the June 2026 canonical
  // host + Context Architect positioning sweep). Replaces a previously hardcoded
  // April date that left every core URL reporting a stale `lastmod` to crawlers.
  const coreLastModified = new Date("2026-06-21");

  const articles = await getAllArticles();
  const published = articles.filter((a) => !a.comingSoon);

  // Content-surfacing pages (home, the /thinking index) track the newest
  // published article automatically, so shipping an article keeps their
  // `lastmod` honest without a manual edit.
  const newestContentTime = published.reduce((latest, a) => {
    const parsed = Date.parse(a.date);
    return Number.isNaN(parsed) ? latest : Math.max(latest, parsed);
  }, coreLastModified.getTime());
  const latestContent = new Date(newestContentTime);

  const articleEntries: MetadataRoute.Sitemap = published.map((a) => {
    const parsed = Date.parse(a.date);
    return {
      url: `${baseUrl}/thinking/${a.slug}`,
      lastModified: Number.isNaN(parsed) ? coreLastModified : new Date(parsed),
      changeFrequency: "monthly" as const,
      priority: a.featured ? 0.8 : 0.6,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: latestContent,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/thesis`,
      lastModified: coreLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: coreLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/thinking`,
      lastModified: latestContent,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: coreLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: coreLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: coreLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: coreLastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...articleEntries,
  ];
}
