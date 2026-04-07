import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/HeroCanvas";
import FiveStepsCallout from "@/components/FiveStepsCallout";
import LogosSection from "@/components/LogosSection";
import GSAPAnimations from "@/components/GSAPAnimations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riche Zamor — VP of Product. 2x Founder. Context Architect.",
  description:
    "Riche Zamor is a context architect and VP of Product who designs how organizations structure knowledge for AI-driven decision-making.",
  openGraph: {
    title: "Riche Zamor — VP of Product. 2x Founder. Context Architect.",
    description:
      "Riche Zamor is a context architect and VP of Product who designs how organizations structure knowledge for AI-driven decision-making.",
    url: "https://richezamor.com/",
    type: "website",
    images: ["https://richezamor.com/og-image.png"],
    siteName: "Riche Zamor",
  },
  twitter: {
    card: "summary_large_image",
    site: "@richezamor",
    title: "Riche Zamor — VP of Product. 2x Founder. Context Architect.",
    description:
      "Building AI products that turn raw data into decision-ready context. The architecture most teams skip is the problem I keep solving.",
    images: ["https://richezamor.com/og-image.png"],
  },
  alternates: {
    canonical: "https://richezamor.com/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Riche Zamor",
    url: "https://richezamor.com",
    jobTitle: "VP of Product",
    description:
      "Building AI products that turn raw data into decision-ready context.",
    sameAs: [
      "https://linkedin.com/in/richezamorjr",
      "https://twitter.com/richezamor",
      "https://github.com/rczamor",
    ],
    knowsAbout: [
      "Product Management",
      "AI Products",
      "Context Architecture",
      "Startup Leadership",
    ],
  };

  return (
    <>
      <Nav activePage="home" />
      <GSAPAnimations />

      <main id="main-content">
      {/* Hero */}
      <section className="hero">
        <HeroCanvas />
        <div className="container">
          <div className="hero-content">
            <h1>
              VP of Product.
              <br />
              <span className="highlight">Context Architect.</span>
            </h1>
            <p className="hero-description">
              I transform how organizations use data, intelligence, and AI to
              make decisions. The architecture most teams skip — turning raw data
              into decision-ready <dfn title="The practice of designing informational environments for AI systems">context</dfn> — is the problem I keep solving.
            </p>
            <p className="hero-plain">
              In plain English: I help companies make their AI products smarter by organizing information better.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">300%</div>
                <div className="hero-stat-label">Growth at $0 CAC</div>
                <div className="hero-stat-org">Grandstage</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">$3.25M</div>
                <div className="hero-stat-label">Pipeline pre-product</div>
                <div className="hero-stat-org">Helm Labs</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">$10M+</div>
                <div className="hero-stat-label">Revenue impact</div>
                <div className="hero-stat-org">IBM</div>
              </div>
            </div>

            <div className="hero-ctas">
              <a href="/thesis" className="btn-primary">
                Read the Thesis <span>→</span>
              </a>
              <a href="/work" className="btn-secondary">
                See My Work <span>→</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Logo Grid */}
      <LogosSection />

      {/* Thesis Teaser */}
      <section className="thesis-section">
        <div className="container">
          <div className="thesis-teaser reveal">
            {/* Left column: text */}
            <div className="thesis-teaser-text">
              <div className="section-label">The Thesis</div>
              <h2 className="section-title">
                Data is{" "}
                <span
                  className="em"
                  style={{ fontStyle: "italic", color: "var(--accent)" }}
                >
                  not
                </span>{" "}
                context.
              </h2>
              <p className="thesis-body">
                The AI industry is obsessed with retrieval — how to get the
                right chunks into the context window. But retrieval is
                downstream. If what you&apos;re retrieving was never curated,
                synthesized, consolidated, prioritized, or stored intelligently,
                your RAG pipeline is just efficiently delivering noise.
              </p>
              <p className="thesis-body">
                Most AI systems skip four of the five steps that turn data into
                context. That&apos;s the gap I build for.
              </p>
              <a href="/thesis" className="thesis-link">
                Read the full thesis <span>→</span>
              </a>
            </div>

            {/* Right column: pipeline widget */}
            <div className="thesis-teaser-widget">
              <FiveStepsCallout />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="capabilities-section">
        <div className="container">
          <div className="capabilities-intro reveal">
            <div className="section-label">What I Do</div>
            <h2 className="section-title">
              Product leadership,
              <br />
              end-to-end.
            </h2>
            <p className="section-subtitle">
              I take AI products from zero to revenue. Strategy through
              execution, architecture through launch and go-to-market.
            </p>
          </div>
          <div className="capabilities-grid">
            <div className="capability-card reveal">
              <div className="capability-icon">
                <span className="material-symbols-outlined">hub</span>
              </div>
              <h3>Strategy</h3>
              <p>
                Customer and market research. Product strategy. Growth strategy.
                AI architecture decisions that map to business outcomes.
              </p>
            </div>
            <div className="capability-card reveal">
              <div className="capability-icon">
                <span className="material-symbols-outlined">deployed_code</span>
              </div>
              <h3>Build</h3>
              <p>
                Requirements. Prototyping. Technical architecture. Working
                directly with engineering and data science to ship products that
                hold up in production.
              </p>
            </div>
            <div className="capability-card reveal">
              <div className="capability-icon">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3>Scale</h3>
              <p>
                Go-to-market execution. Growth experimentation. Analytics and
                optimization. Building the feedback loops that make products
                compound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Select Work */}
      <section className="work-section">
        <div className="container">
          <div className="work-intro reveal">
            <div className="section-label">Select Work</div>
            <h2 className="section-title">Execution at scale.</h2>
            <p className="section-subtitle">
              Every role has been a transformation story. Here&apos;s what I
              built, what changed, and what it taught me about context.
            </p>
          </div>
          <div className="work-grid">
            <div className="work-card reveal">
              <div className="work-card-header">
                <div className="work-company">Suzy</div>
                <div className="work-role">VP Product</div>
              </div>
              <div className="work-card-body">
                <p>
                  Led the transformation of a consumer survey platform trusted by
                  350+ enterprise brands into a Decision Engine — synthesizing
                  fragmented marketing intelligence into decisions organizations
                  can act on. Built and shipped in six weeks.
                </p>
              </div>
              <div className="work-metric">
                <div className="work-metric-value">6 wks</div>
                <div className="work-metric-label">concept → launch</div>
              </div>
            </div>

            <div className="work-card reveal">
              <div className="work-card-header">
                <div className="work-company">Grandstage</div>
                <div className="work-role">Co-Founder &amp; Head of Product</div>
              </div>
              <div className="work-card-body">
                <p>
                  Built an answer engine fusing 10,000+ sources into synthesized
                  market intelligence. Designed the hybrid search architecture
                  and hierarchical relevance model that lifted user retention
                  from 50% to 80%.
                </p>
              </div>
              <div className="work-metric">
                <div className="work-metric-value">300%</div>
                <div className="work-metric-label">
                  user growth · $0 CAC
                </div>
              </div>
            </div>

            <div className="work-card reveal">
              <div className="work-card-header">
                <div className="work-company">Helm Labs</div>
                <div className="work-role">SVP &amp; General Manager</div>
              </div>
              <div className="work-card-body">
                <p>
                  Defined product vision for a unified enterprise data platform
                  integrating five acquired products and proprietary datasets
                  covering 200M+ Americans. Built the GTM motion from scratch.
                </p>
              </div>
              <div className="work-metric">
                <div className="work-metric-value">$3.25M</div>
                <div className="work-metric-label">pipeline pre-launch</div>
              </div>
            </div>

            <div className="work-card reveal">
              <div className="work-card-header">
                <div className="work-company">IBM</div>
                <div className="work-role">Digital Product &amp; Growth</div>
              </div>
              <div className="work-card-body">
                <p>
                  Transformed how IBM&apos;s Cloud and AI business acquired,
                  converted, and retained ~1M users globally. Deployed growth
                  stack across 30+ countries with 100% adoption.
                </p>
              </div>
              <div className="work-metric">
                <div className="work-metric-value">31%</div>
                <div className="work-metric-label">trial conversion lift</div>
              </div>
            </div>
          </div>
          <div className="work-cta reveal">
            <a href="/work" className="btn-secondary">
              See all work <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="why-section">
        <div className="container">
          <div className="why-intro reveal">
            <div className="section-label">Why Me</div>
            <h2 className="section-title">
              A product mind grounded in the bottom line.
            </h2>
            <p className="section-subtitle">
              I lead product end-to-end — and I can sell it, too. My strategies
              are anchored in generating revenue or saving millions.
            </p>
          </div>
          <div className="why-grid">
            <div className="why-card reveal">
              <div className="why-number">01</div>
              <h3>A career built on transformation.</h3>
              <p>
                Every major role has been a transformation story — taking an
                organization, a team, or a product and fundamentally changing how
                it operates. I don&apos;t maintain products. I transform
                businesses through them.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-number">02</div>
              <h3>An original thesis backed by real builds.</h3>
              <p>
                A specific, defensible point of view on turning raw data into
                decision-ready context — grounded in cognitive science and
                information theory, validated by every product I&apos;ve
                shipped.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-number">03</div>
              <h3>The full stack: strategy to revenue.</h3>
              <p>
                Strategy, architecture, build, go-to-market, and growth — in one
                person. I&apos;ve raised venture capital, sold enterprise deals,
                deployed growth infrastructure globally, and written production
                AI applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container reveal">
          <div className="cta-box">
            <div className="section-label">Let&apos;s Connect</div>
            <h2 className="section-title">
              Ready to architect the next{" "}
              <span className="highlight">context</span>?
            </h2>
            <p className="section-subtitle">
              I&apos;m open to advisory engagements, board positions, speaking
              opportunities, and connecting with people building at the
              intersection of AI and product.
            </p>
            <a href="/contact" className="btn-primary">
              Get in touch <span>→</span>
            </a>
          </div>
        </div>
      </section>

      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
