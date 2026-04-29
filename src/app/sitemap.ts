import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://richezamor.com";
  const lastModified = new Date("2026-04-29");

  const articles = await getAllArticles();
  const articleEntries: MetadataRoute.Sitemap = articles
    .filter((a) => !a.comingSoon)
    .map((a) => {
      const parsed = Date.parse(a.date);
      return {
        url: `${baseUrl}/thinking/${a.slug}`,
        lastModified: isNaN(parsed) ? lastModified : new Date(parsed),
        changeFrequency: "monthly" as const,
        priority: a.featured ? 0.8 : 0.6,
      };
    });

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/thesis`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/thinking`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...articleEntries,
  ];
}
