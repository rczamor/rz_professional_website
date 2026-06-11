import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/article/think_components/ProgressBar";
import type { ArticleFAQ as ArticleFAQItem, ArticleMetadata } from "@/content/types";
import {
  buildArticleBreadcrumbSchema,
  buildArticleFaqSchema,
  buildArticleSchema,
  safeJsonLd,
  toISODate,
} from "@/lib/seo";

interface ArticleLayoutProps {
  metadata: ArticleMetadata;
  children: React.ReactNode;
}

function pillarLabel(pillar: string): string {
  return pillar.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function slugifyFaqQuestion(question: string): string {
  return `faq-${question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}`;
}

function ArticleFAQ({ items, slug }: { items?: ArticleFAQItem[]; slug: string }) {
  if (!items || items.length === 0) return null;

  const headingId = `${slug}-faq`;

  return (
    <section className="article-faq" aria-labelledby={headingId}>
      <h2 id={headingId} className="article-faq-title">
        Frequently Asked Questions
      </h2>
      <div className="article-faq-list">
        {items.map((item) => {
          const id = slugifyFaqQuestion(item.question);
          return (
            <div key={item.question} className="article-faq-item">
              <h3 id={id} className="article-faq-question">
                <a href={`#${id}`}>{item.question}</a>
              </h3>
              <p className="article-faq-answer">{item.answer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function ArticleLayout({ metadata, children }: ArticleLayoutProps) {
  const isoDate = toISODate(metadata.date);
  const articleJsonLd = buildArticleSchema(metadata);
  const breadcrumbJsonLd = buildArticleBreadcrumbSchema(metadata);
  const faqJsonLd = buildArticleFaqSchema(metadata);

  return (
    <>
      <Nav activePage="thinking" />
      {/* Rendered once here (not per-article in MDX) so the fixed
          `.think-progress` never lands inside `.article-prose` and the opener
          stays the prose's first child. See .spec/design.md › Article page rhythm. */}
      <ProgressBar />
      <main id="main-content">
        <article>
          <header className="think-hero">
            <div className="container">
              <div className="think-hero-eyebrow">
                <span className="think-hero-dot" aria-hidden="true" />
                <span>{pillarLabel(metadata.pillar)}</span>
                {metadata.badge && (
                  <>
                    <span className="think-hero-eyebrow-sep" aria-hidden="true">/</span>
                    <span>{metadata.badge}</span>
                  </>
                )}
              </div>
              <h1 className="think-hero-title">{metadata.title}</h1>
              <dl className="think-hero-meta">
                <div>
                  <dt>By</dt>
                  <dd>
                    <address rel="author">Riché Zamor</address>
                  </dd>
                </div>
                <div>
                  <dt>Published</dt>
                  <dd>
                    <time dateTime={isoDate}>{metadata.date}</time>
                  </dd>
                </div>
                <div>
                  <dt>Read</dt>
                  <dd>{metadata.readTime}</dd>
                </div>
              </dl>
            </div>
          </header>
          <section className="article-body">
            <div className="container">
              <p className="think-article-deck">{metadata.excerpt}</p>
              <div className="article-prose">
                {children}
              </div>
              <ArticleFAQ items={metadata.faq} slug={metadata.slug} />
            </div>
          </section>
        </article>
        <section className="page-bridge">
          <div className="container">
            <p className="page-bridge-prompt">More thinking in public</p>
            <Link href="/thinking" className="btn-secondary">
              All articles <span>&rarr;</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
        />
      )}
    </>
  );
}
