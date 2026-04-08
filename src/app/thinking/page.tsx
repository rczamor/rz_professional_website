import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import ThinkingArticles from "./ThinkingArticles";

export const metadata: Metadata = {
  title: "Thinking in Public — Riche Zamor",
  description:
    "Articles and insights on context architecture, AI product strategy, and leadership by Riche Zamor.",
  openGraph: {
    title: "Thinking in Public — Riche Zamor",
    description:
      "Articles and insights on context architecture, AI product strategy, and leadership by Riche Zamor.",
    url: "https://richezamor.com/thinking",
    type: "website",
    images: ["https://richezamor.com/og-image.png"],
    siteName: "Riche Zamor",
  },
  twitter: {
    card: "summary_large_image",
    site: "@richezamor",
    title: "Thinking in Public — Riche Zamor",
    description:
      "Essays and frameworks on context intelligence, product management, and leadership.",
    images: ["https://richezamor.com/og-image.png"],
  },
  alternates: { canonical: "https://richezamor.com/thinking" },
};

export default async function ThinkingPage() {
  const articles = await getAllArticles();

  return (
    <>
      <Nav activePage="thinking" />

      <main id="main-content">
        {/* Hero */}
        <section className="hero hero-centered">
          <div className="container">
              <h1>Thinking in <span className="highlight">Public</span></h1>
              <p className="hero-sub">Essays, frameworks, and observations on context architecture, AI product strategy, and building what matters.</p>
          </div>
        </section>

        {/* Filter + Articles (client component for interactivity) */}
        <ThinkingArticles articles={articles} />

        {/* CTA / Newsletter Section */}
        <section className="cta-section">
          <div className="container reveal">
            <div className="cta-box">
              <div className="section-label">Newsletter</div>
              <h2 className="section-title">The <span className="highlight">Context</span> Layer</h2>
              <p className="section-subtitle">A newsletter on the architecture behind AI memory, context synthesis, and building products that think. Launching Q3 2026.</p>
              <NewsletterSignup buttonText="Join the Waitlist" className="cta-newsletter" />
            </div>
          </div>
        </section>
        {/* ── Bridge CTA ── */}
        <section className="page-bridge">
          <div className="container">
            <p className="page-bridge-prompt">Want to discuss these ideas?</p>
            <a href="/contact" className="btn-secondary">Get in touch <span>&rarr;</span></a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
