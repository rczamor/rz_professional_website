import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { ArticleMetadata } from "@/content/types";

interface ArticleLayoutProps {
  metadata: ArticleMetadata;
  children: React.ReactNode;
}

function toISODate(dateStr: string): string {
  const parsed = Date.parse(dateStr);
  if (isNaN(parsed)) return dateStr;
  return new Date(parsed).toISOString().split("T")[0];
}

function pillarLabel(pillar: string): string {
  return pillar.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ArticleLayout({ metadata, children }: ArticleLayoutProps) {
  const isoDate = toISODate(metadata.date);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadata.title,
    description: metadata.excerpt,
    author: {
      "@type": "Person",
      name: "Riche Zamor",
      url: "https://richezamor.com",
      jobTitle: "VP of Product",
      sameAs: [
        "https://linkedin.com/in/richezamorjr",
        "https://twitter.com/richezamor",
        "https://github.com/rczamor",
      ],
    },
    datePublished: isoDate,
    url: `https://richezamor.com/thinking/${metadata.slug}`,
    publisher: {
      "@type": "Person",
      name: "Riche Zamor",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://richezamor.com/thinking/${metadata.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://richezamor.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Thinking",
        item: "https://richezamor.com/thinking",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: metadata.title,
        item: `https://richezamor.com/thinking/${metadata.slug}`,
      },
    ],
  };

  return (
    <>
      <Nav activePage="thinking" />
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
            </div>
          </section>
        </article>
        <section className="page-bridge">
          <div className="container">
            <p className="page-bridge-prompt">More thinking in public</p>
            <a href="/thinking" className="btn-secondary">
              All articles <span>&rarr;</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
