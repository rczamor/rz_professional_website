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

  const comingSoon = !article.slug || article.comingSoon;

  if (article.featured) {
    return (
      <article
        className={`featured-article reveal${comingSoon ? " coming-soon" : ""}`}
        data-pillar={article.pillar}
      >
        <div className="featured-article-meta">
          {comingSoon && <span className="coming-soon-label">Coming Soon</span>}
          <time dateTime={isoDate}>{article.date}</time>
          <span className="article-meta-separator" />
          <span>{article.readTime}</span>
        </div>
        <h2>{article.title}</h2>
        <p>{article.excerpt}</p>
        <div className="article-footer">
          <div className="article-badges">
            <span className="featured-article-badge">
              {article.pillar.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`article-card reveal${comingSoon ? " coming-soon" : ""}`}
      data-pillar={article.pillar}
    >
      <div className="article-meta">
        {comingSoon && <span className="coming-soon-label">Coming Soon</span>}
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
