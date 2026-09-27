import { getAllArticles, getRelatedArticles } from "@/lib/articles";
import ArticleLayout from "@/components/article/ArticleLayout";
import type { Metadata } from "next";

export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles
    .filter((a) => !a.comingSoon)
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const articles = await getAllArticles();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  // Google truncates titles past ~60 chars; drop the byline suffix rather than
  // lose the headline itself when the two don't fit together.
  const byline = `${article.title} — Riché Zamor`;
  const title = byline.length <= 60 ? byline : article.title;
  const description = article.description ?? article.excerpt;

  return {
    title,
    description,
    keywords: article.keywords,
    openGraph: {
      title,
      description,
      url: `https://www.richezamor.com/thinking/${slug}`,
      type: "article",
      siteName: "Riché Zamor",
    },
    twitter: {
      card: "summary_large_image",
      site: "@richezamor",
      title,
      description,
    },
    alternates: { canonical: `https://www.richezamor.com/thinking/${slug}` },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articles = await getAllArticles();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return null;

  const { default: Content } = await import(
    `@/content/articles/${slug}/page.mdx`
  );

  return (
    <ArticleLayout metadata={article} related={getRelatedArticles(slug, articles)}>
      <Content />
    </ArticleLayout>
  );
}
