import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { ArticleMetadata } from "@/content/types";

interface ArticleLayoutProps {
  metadata: ArticleMetadata;
  children: React.ReactNode;
}

export default function ArticleLayout({ metadata, children }: ArticleLayoutProps) {
  return (
    <>
      <Nav activePage="thinking" />
      <main id="main-content">
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
              <span>Riche Zamor</span>
              <span className="article-meta-separator" />
              <span>{metadata.date}</span>
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
    </>
  );
}
