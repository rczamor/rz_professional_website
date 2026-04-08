import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/HeroCanvas";
import FiveStepsCallout from "@/components/FiveStepsCallout";
import LogosSection from "@/components/LogosSection";
import GSAPAnimations from "@/components/GSAPAnimations";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import type { Metadata } from "next";
import {
  heroStats,
  capabilities,
  selectWork,
  whyMeCards,
  jsonLdData,
} from "@/content/home";

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
  return (
    <>
      <Nav activePage="home" />
      <GSAPAnimations />

      <main id="main-content">
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-heading">
        <HeroCanvas />
        <div className="container">
          <div className="hero-content">
            <h1 id="hero-heading">
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
              {heroStats.map((stat) => (
                <div key={stat.org} className="hero-stat">
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                  <div className="hero-stat-org">{stat.org}</div>
                </div>
              ))}
            </div>

            <div className="hero-ctas">
              <a href="/thesis" className="btn-primary">
                Read the Thesis <span>&rarr;</span>
              </a>
              <a href="/work" className="btn-secondary">
                See My Work <span>&rarr;</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Logo Grid */}
      <LogosSection />

      {/* Thesis Teaser */}
      <section className="thesis-section" aria-labelledby="thesis-heading">
        <div className="container">
          <div className="thesis-teaser reveal">
            <div className="thesis-teaser-text">
              <div className="section-label">The Thesis</div>
              <h2 id="thesis-heading" className="section-title">
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
                Read the full thesis <span>&rarr;</span>
              </a>
            </div>

            <div className="thesis-teaser-widget">
              <FiveStepsCallout />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="capabilities-section" aria-labelledby="capabilities-heading">
        <div className="container">
          <div className="capabilities-intro reveal">
            <div className="section-label">What I Do</div>
            <h2 id="capabilities-heading" className="section-title">
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
            {capabilities.map((cap) => (
              <div key={cap.title} className="capability-card reveal">
                <div className="capability-icon">
                  <span className="material-symbols-outlined">{cap.icon}</span>
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Select Work */}
      <section className="work-section" aria-labelledby="work-heading">
        <div className="container">
          <div className="work-intro reveal">
            <div className="section-label">Select Work</div>
            <h2 id="work-heading" className="section-title">Execution at scale.</h2>
            <p className="section-subtitle">
              Every role has been a transformation story. Here&apos;s what I
              built, what changed, and what it taught me about context.
            </p>
          </div>
          <div className="work-grid">
            {selectWork.map((w) => (
              <div key={w.company} className="work-card reveal">
                <div className="work-card-header">
                  <div className="work-company">{w.company}</div>
                  <div className="work-role">{w.role}</div>
                </div>
                <div className="work-card-body">
                  <p>{w.body}</p>
                </div>
                <div className="work-metric">
                  <div className="work-metric-value">{w.metricValue}</div>
                  <div className="work-metric-label">{w.metricLabel}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="work-cta reveal">
            <a href="/work" className="btn-secondary">
              See all work <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials — hidden per CAR-271 */}
      {/* <TestimonialsCarousel /> */}

      {/* Why Me */}
      <section className="why-section" aria-labelledby="why-heading">
        <div className="container">
          <div className="why-intro reveal">
            <div className="section-label">Why Me</div>
            <h2 id="why-heading" className="section-title">
              A product mind grounded in the bottom line.
            </h2>
            <p className="section-subtitle">
              I lead product end-to-end — and I can sell it, too. My strategies
              are anchored in generating revenue or saving millions.
            </p>
          </div>
          <div className="why-grid">
            {whyMeCards.map((card) => (
              <div key={card.number} className="why-card reveal">
                <div className="why-number">{card.number}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="container reveal">
          <div className="cta-box">
            <div className="section-label">Let&apos;s Connect</div>
            <h2 id="cta-heading" className="section-title">
              Ready to architect the next{" "}
              <span className="highlight">context</span>?
            </h2>
            <p className="section-subtitle">
              I&apos;m open to advisory engagements, board positions, speaking
              opportunities, and connecting with people building at the
              intersection of AI and product.
            </p>
            <a href="/contact" className="btn-primary">
              Get in touch <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
    </>
  );
}
