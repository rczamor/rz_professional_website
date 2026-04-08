import type { ArticleMetadata } from "@/content/types";

interface ArticleCardProps {
  article: ArticleMetadata;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  if (article.featured) {
    return (
      <a
        href={article.comingSoon ? undefined : `/thinking/${article.slug}`}
        className="featured-article reveal"
        data-pillar={article.pillar}
        style={article.comingSoon ? { pointerEvents: "none" } : undefined}
      >
        <div className="featured-article-meta">
          <span>{article.comingSoon ? "Coming Soon" : article.date}</span>
          <span className="featured-article-badge">
            {article.pillar.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </span>
        </div>
        <h2>{article.title}</h2>
        <p>{article.excerpt}</p>
        <p style={{ marginTop: "16px", fontSize: "13px", color: "var(--text-tertiary)" }}>
          {article.readTime}
        </p>
      </a>
    );
  }

  return (
    <a
      href={article.comingSoon ? undefined : `/thinking/${article.slug}`}
      className="article-card reveal"
      data-pillar={article.pillar}
      style={article.comingSoon ? { pointerEvents: "none" } : undefined}
    >
      <div className="article-meta">
        <span className="article-author">Riche Zamor</span>
        <span className="article-meta-separator" />
        <span>{article.date}</span>
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
    </a>
  );
}
