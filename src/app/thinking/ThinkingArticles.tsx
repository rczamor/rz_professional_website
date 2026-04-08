"use client";

import { useState } from "react";
import ArticleCard from "@/components/article/ArticleCard";
import type { ArticleMetadata } from "@/content/types";

type Pillar = "all" | "context-intelligence" | "product-management" | "leadership";

interface ThinkingArticlesProps {
  articles: ArticleMetadata[];
}

export default function ThinkingArticles({ articles }: ThinkingArticlesProps) {
  const [activeFilter, setActiveFilter] = useState<Pillar>("all");

  const featured = articles.find((a) => a.featured);
  const grid = articles.filter((a) => !a.featured);

  const isVisible = (pillar: string) =>
    activeFilter === "all" || activeFilter === pillar;

  return (
    <>
      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-bar" id="filter-bar">
            {(["all", "context-intelligence", "product-management", "leadership"] as Pillar[]).map(
              (pillar) => (
                <button
                  key={pillar}
                  className={`filter-pill${activeFilter === pillar ? " active" : ""}`}
                  data-filter={pillar}
                  onClick={() => setActiveFilter(pillar)}
                >
                  {pillar === "all"
                    ? "All"
                    : pillar
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-section">
        <div className="container">
          {featured && isVisible(featured.pillar) && (
            <ArticleCard article={featured} />
          )}
          <div className="articles-grid" id="articles-grid">
            {grid
              .filter((a) => isVisible(a.pillar))
              .map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
