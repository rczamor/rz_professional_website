import type { ArticleMetadata } from "@/content/types";
import { ogImage, siteName, siteUrl, twitterHandle } from "@/content/seo";

export const personId = `${siteUrl}/#person`;
export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;

export function toISODate(dateStr: string): string {
  const parsed = Date.parse(dateStr);
  if (Number.isNaN(parsed)) return dateStr;
  return new Date(parsed).toISOString().split("T")[0];
}

export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildPersonEntity() {
  return {
    "@type": "Person",
    "@id": personId,
    name: "Riché Zamor",
    url: siteUrl,
    image: `${siteUrl}/images/about/headshot.jpg`,
    jobTitle: "VP of Product and Context Architect",
    description:
      "Riché Zamor is a context architect and VP of Product who designs how organizations structure knowledge for AI-driven decision-making.",
    sameAs: [
      "https://linkedin.com/in/richezamorjr/",
      "https://x.com/richezamor",
      "https://github.com/rczamor",
    ],
    knowsAbout: [
      "Context Architecture",
      "AI Product Strategy",
      "Context Layers",
      "Context Engineering",
      "RAG",
      "Product Management",
      "Startup Leadership",
    ],
  };
}

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    ...buildPersonEntity(),
  };
}

export function buildArticleSchema(metadata: ArticleMetadata) {
  const articleUrl = `${siteUrl}/thinking/${metadata.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    headline: metadata.title,
    description: metadata.excerpt,
    author: { "@id": personId },
    publisher: { "@id": personId },
    datePublished: toISODate(metadata.date),
    url: articleUrl,
    image: ogImage,
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    ...(metadata.keywords && metadata.keywords.length > 0
      ? { keywords: metadata.keywords.join(", ") }
      : {}),
  };
}

export function buildArticleBreadcrumbSchema(metadata: ArticleMetadata) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Thinking",
        item: `${siteUrl}/thinking`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: metadata.title,
        item: `${siteUrl}/thinking/${metadata.slug}`,
      },
    ],
  };
}

export function buildArticleFaqSchema(metadata: ArticleMetadata) {
  if (!metadata.faq || metadata.faq.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: metadata.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildHomeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...buildPersonEntity(),
        worksFor: { "@id": organizationId },
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteName,
        alternateName: `${siteName} — Context Architecture`,
        url: siteUrl,
        logo: ogImage,
        description:
          "Independent product leadership and context architecture practice — advisory, board work, and AI product strategy.",
        founder: { "@id": personId },
        sameAs: [
          "https://linkedin.com/in/richezamorjr/",
          "https://x.com/richezamor",
          "https://github.com/rczamor",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Inquiries",
          email: "connect@richezamor.com",
          url: `${siteUrl}/contact`,
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteName,
        description:
          "Riché Zamor is a context architect and VP of Product who designs how organizations structure knowledge for AI-driven decision-making.",
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
    ],
  };
}

export { ogImage, siteName, siteUrl, twitterHandle };
