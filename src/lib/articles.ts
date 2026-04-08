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
