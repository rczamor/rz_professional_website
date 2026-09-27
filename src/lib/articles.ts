import type { ArticleMetadata } from "@/content/types";
import fs from "fs";
import path from "path";

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");

export async function getAllArticles(): Promise<ArticleMetadata[]> {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const entries = fs.readdirSync(ARTICLES_DIR, { withFileTypes: true });
  const slugs = entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name);

  const articles: ArticleMetadata[] = [];

  for (const slug of slugs) {
    try {
      const mod = await import(`@/content/articles/${slug}/page.mdx`);
      if (mod.metadata) {
        articles.push({ ...mod.metadata, slug });
      }
    } catch {
      // skip directories without valid MDX
    }
  }

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

const PILLAR_ORDER: ArticleMetadata["pillar"][] = [
  "context-intelligence",
  "product-management",
  "leadership",
];

/**
 * The "Related thinking" picks for an article.
 *
 * Published articles sit in a ring ordered by pillar, then oldest-first, and
 * each one links to the next `count` around it. Neighbours mostly share a
 * pillar, and because every article is exactly `count` steps behind `count`
 * others, each gets `count` inbound links as well as `count` outbound, so none
 * drops out of the internal link graph as the archive grows.
 */
export function getRelatedArticles(
  slug: string,
  articles: ArticleMetadata[],
  count = 3
): ArticleMetadata[] {
  const ring = articles
    .filter((a) => !a.comingSoon)
    .sort(
      (a, b) =>
        PILLAR_ORDER.indexOf(a.pillar) - PILLAR_ORDER.indexOf(b.pillar) ||
        new Date(a.date).getTime() - new Date(b.date).getTime() ||
        a.slug.localeCompare(b.slug)
    );
  const i = ring.findIndex((a) => a.slug === slug);
  if (i === -1) return [];
  const n = Math.min(count, ring.length - 1);
  return Array.from({ length: n }, (_, k) => ring[(i + k + 1) % ring.length]);
}
