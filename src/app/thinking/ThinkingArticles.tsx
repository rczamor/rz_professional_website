"use client";

import { useState } from "react";

type Pillar = "all" | "context-intelligence" | "product-management" | "leadership";

export default function ThinkingArticles() {
  const [activeFilter, setActiveFilter] = useState<Pillar>("all");

  const isVisible = (pillar: string) =>
    activeFilter === "all" || activeFilter === pillar;

  return (
    <>
      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-bar" id="filter-bar">
            <button
              className={`filter-pill${activeFilter === "all" ? " active" : ""}`}
              data-filter="all"
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
            <button
              className={`filter-pill${activeFilter === "context-intelligence" ? " active" : ""}`}
              data-filter="context-intelligence"
              onClick={() => setActiveFilter("context-intelligence")}
            >
              Context Intelligence
            </button>
            <button
              className={`filter-pill${activeFilter === "product-management" ? " active" : ""}`}
              data-filter="product-management"
              onClick={() => setActiveFilter("product-management")}
            >
              Product Management
            </button>
            <button
              className={`filter-pill${activeFilter === "leadership" ? " active" : ""}`}
              data-filter="leadership"
              onClick={() => setActiveFilter("leadership")}
            >
              Leadership
            </button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-section">
        <div className="container">
          {/* Featured Article */}
          {isVisible("context-intelligence") && (
            <div className="featured-article reveal" data-pillar="context-intelligence">
              <div className="featured-article-meta">
                <span>Coming Soon</span>
                <span className="featured-article-badge">Context Intelligence</span>
              </div>
              <h2>Data Is Not Context</h2>
              <p>The AI industry is obsessed with retrieval &mdash; how to get the right chunks into the context window. But retrieval is downstream. If what you&rsquo;re retrieving was never curated, synthesized, consolidated, prioritized, or stored intelligently, your RAG pipeline is just efficiently delivering noise. This essay defines the five-step architecture that turns raw data into decision-ready context.</p>
              <p style={{ marginTop: "16px", fontSize: "13px", color: "var(--text-tertiary)" }}>8 min read</p>
            </div>
          )}

          {/* Article Grid */}
          <div className="articles-grid" id="articles-grid">
            {isVisible("context-intelligence") && (
              <div className="article-card reveal" data-pillar="context-intelligence">
                <div className="article-meta">
                  <span className="article-author">Riche Zamor</span>
                  <span className="article-meta-separator"></span>
                  <span>March 14, 2026</span>
                  <span className="article-meta-separator"></span>
                  <span>12 min read</span>
                </div>
                <h3 className="article-title">Your AI Has a Three-Phase Problem</h3>
                <p className="article-excerpt">Most AI systems fail not because they lack intelligence, but because they lack diagnosis. Why context collapse happens in three distinct phases and how to prevent each one.</p>
                <div className="article-footer">
                  <div className="article-badges">
                    <span className="article-badge">Deep Dive</span>
                  </div>
                </div>
              </div>
            )}

            {isVisible("context-intelligence") && (
              <div className="article-card reveal" data-pillar="context-intelligence">
                <div className="article-meta">
                  <span className="article-author">Riche Zamor</span>
                  <span className="article-meta-separator"></span>
                  <span>March 7, 2026</span>
                  <span className="article-meta-separator"></span>
                  <span>9 min read</span>
                </div>
                <h3 className="article-title">What Expert Cardiologists Teach Us About AI Context</h3>
                <p className="article-excerpt">The diagnostic process that cardiologists use&mdash;pattern recognition, differential diagnosis, synthesis&mdash;is exactly what we should be engineering into AI memory systems.</p>
                <div className="article-footer">
                  <div className="article-badges">
                    <span className="article-badge">Framework</span>
                  </div>
                </div>
              </div>
            )}

            {isVisible("product-management") && (
              <div className="article-card reveal" data-pillar="product-management">
                <div className="article-meta">
                  <span className="article-author">Riche Zamor</span>
                  <span className="article-meta-separator"></span>
                  <span>February 28, 2026</span>
                  <span className="article-meta-separator"></span>
                  <span>14 min read</span>
                </div>
                <h3 className="article-title">How I Grew Grandstage 300% at $0 CAC</h3>
                <p className="article-excerpt">Product-led growth isn&rsquo;t just a tactic. It&rsquo;s a framework for understanding how products compound through quality, trust, and network effects. Here&rsquo;s what I learned.</p>
                <div className="article-footer">
                  <div className="article-badges">
                    <span className="article-badge product">Case Study</span>
                  </div>
                </div>
              </div>
            )}

            {isVisible("product-management") && (
              <div className="article-card reveal" data-pillar="product-management">
                <div className="article-meta">
                  <span className="article-author">Riche Zamor</span>
                  <span className="article-meta-separator"></span>
                  <span>February 21, 2026</span>
                  <span className="article-meta-separator"></span>
                  <span>11 min read</span>
                </div>
                <h3 className="article-title">The Product Leader&rsquo;s Framework for AI Architecture Decisions</h3>
                <p className="article-excerpt">Not all AI architecture decisions are created equal. A framework for evaluating tradeoffs between latency, cost, accuracy, and maintainability when designing AI features.</p>
                <div className="article-footer">
                  <div className="article-badges">
                    <span className="article-badge">Framework</span>
                  </div>
                </div>
              </div>
            )}

            {isVisible("context-intelligence") && (
              <div className="article-card reveal" data-pillar="context-intelligence">
                <div className="article-meta">
                  <span className="article-author">Riche Zamor</span>
                  <span className="article-meta-separator"></span>
                  <span>February 14, 2026</span>
                  <span className="article-meta-separator"></span>
                  <span>7 min read</span>
                </div>
                <h3 className="article-title">Building My Own Context Layer: Week 1</h3>
                <p className="article-excerpt">What happens when you try to build context architecture in the real world? This is what I learned in the first week of building my own implementation.</p>
                <div className="article-footer">
                  <div className="article-badges">
                    <span className="article-badge">Building in Public</span>
                  </div>
                </div>
              </div>
            )}

            {isVisible("leadership") && (
              <div className="article-card reveal" data-pillar="leadership">
                <div className="article-meta">
                  <span className="article-author">Riche Zamor</span>
                  <span className="article-meta-separator"></span>
                  <span>February 7, 2026</span>
                  <span className="article-meta-separator"></span>
                  <span>6 min read</span>
                </div>
                <h3 className="article-title">The Interview Where the Hiring Manager Watched CNN</h3>
                <p className="article-excerpt">A story about attention, context, and what it means to actually listen. Why the best interviews are the ones where the interviewer fully shows up.</p>
                <div className="article-footer">
                  <div className="article-badges">
                    <span className="article-badge leadership">Story</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
