import type { ArticleMetadata } from "@/content/types";

interface ArticleCardProps {
  article: ArticleMetadata;
}

function toISODate(dateStr: string): string {
  const parsed = Date.parse(dateStr);
  if (isNaN(parsed)) return dateStr;
  return new Date(parsed).toISOString().split("T")[0];
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const isoDate = toISODate(article.date);

  if (article.featured) {
    return (
      <article
        className="featured-article reveal"
        data-pillar={article.pillar}
      >
        <div className="featured-article-meta">
          {article.comingSoon ? (
            <span>Coming Soon</span>
          ) : (
            <time dateTime={isoDate}>{article.date}</time>
          )}
          <span className="featured-article-badge">
            {article.pillar.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </span>
        </div>
        <h2>{article.title}</h2>
        <p>{article.excerpt}</p>
        <footer style={{ marginTop: "16px", fontSize: "13px", color: "var(--text-tertiary)" }}>
          <address className="article-author article-author-address">By Riche Zamor</address>
          <span className="article-meta-separator" />
          <span>{article.readTime}</span>
        </footer>
      </article>
    );
  }

  return (
    <article
      className="article-card reveal"
      data-pillar={article.pillar}
    >
      <div className="article-meta">
        <address className="article-author article-author-address">By Riche Zamor</address>
        <span className="article-meta-separator" />
        <time dateTime={isoDate}>{article.date}</time>
        <span className="article-meta-separator" />
        <span>{article.readTime}</span>
      </div>
      <h3 className="article-title">{article.title}</h3>
      <p className="article-excerpt">{article.excerpt}</p>
      <div className="article-footer">
        <div className="article-badges">
          <span className={`article-badge${article.badgeVariant ? ` ${article.badgeVariant}` : ""}`}>
            {article.badge}
          </span>
        </div>
      </div>
    </article>
  );
}
