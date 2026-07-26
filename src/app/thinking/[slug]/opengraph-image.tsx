import { getAllArticles } from "@/lib/articles";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og-card";

export const alt = "Riché Zamor — Thinking";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Match the article page: only known slugs resolve. Without this, arbitrary
// paths would render a card on demand, turning image generation into an
// unbounded amount of work an anonymous caller can request.
export const dynamicParams = false;

/** Prerender one card per article at build time alongside the article pages. */
export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.filter((a) => !a.comingSoon).map((a) => ({ slug: a.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articles = await getAllArticles();
  const article = articles.find((a) => a.slug === slug);

  return renderOgCard({
    eyebrow: article?.badge || "Thinking",
    title: article?.title ?? "Thinking",
    subtitle: article?.excerpt,
    path: `/thinking/${slug}`,
  });
}
