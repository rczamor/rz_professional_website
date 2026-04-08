import { getAllArticles } from "@/lib/articles";
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

  return {
    title: `${article.title} — Riche Zamor`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} — Riche Zamor`,
      description: article.excerpt,
      url: `https://richezamor.com/thinking/${slug}`,
      type: "article",
      images: ["https://richezamor.com/og-image.png"],
      siteName: "Riche Zamor",
    },
    twitter: {
      card: "summary_large_image",
      site: "@richezamor",
      title: `${article.title} — Riche Zamor`,
      description: article.excerpt,
      images: ["https://richezamor.com/og-image.png"],
    },
    alternates: { canonical: `https://richezamor.com/thinking/${slug}` },
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
    <ArticleLayout metadata={article}>
      <Content />
    </ArticleLayout>
  );
}
