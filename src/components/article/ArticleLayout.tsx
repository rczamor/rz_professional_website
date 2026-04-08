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
          <section className="hero hero-centered">
            <div className="container">
              <div className="article-hero-meta">
                <span className={`article-badge${metadata.badgeVariant ? ` ${metadata.badgeVariant}` : ""}`}>
                  {metadata.badge}
                </span>
                <span className="article-hero-pillar">
                  {metadata.pillar.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </span>
              </div>
              <h1>{metadata.title}</h1>
              <div className="article-hero-info">
                <address rel="author" className="article-author-address">By Riche Zamor</address>
                <span className="article-meta-separator" />
                <time dateTime={isoDate}>{metadata.date}</time>
                <span className="article-meta-separator" />
                <span>{metadata.readTime}</span>
              </div>
            </div>
          </section>
          <section className="article-body">
            <div className="container">
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
