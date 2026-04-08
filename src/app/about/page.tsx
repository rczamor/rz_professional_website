import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import {
  heroSub,
  bioIntro,
  bioSections,
  speakingEntries,
  timelineEntries,
  socialLinks,
} from "@/content/about";

export const metadata: Metadata = {
  title: "About — Riche Zamor",
  description:
    "About Riche Zamor — context architect, VP of Product, 2x founder, and author of the Context Architecture Thesis.",
  openGraph: {
    title: "About — Riche Zamor",
    description:
      "About Riche Zamor — context architect, VP of Product, 2x founder, and author of the Context Architecture Thesis.",
    url: "https://richezamor.com/about",
    type: "website",
    images: ["https://richezamor.com/og-image.png"],
    siteName: "Riche Zamor",
  },
  twitter: {
    card: "summary_large_image",
    site: "@richezamor",
    title: "About — Riche Zamor",
    description:
      "AI product leader with 20 years of experience building systems that turn raw data into decision-ready context.",
    images: ["https://richezamor.com/og-image.png"],
  },
  alternates: { canonical: "https://richezamor.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <Nav activePage="about" />

      <main id="main-content">
        {/* Hero */}
        <section className="hero hero-centered">
          <div className="container">
            <h1>About</h1>
            <p className="hero-sub">{heroSub}</p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="bio-section">
          <div className="container">
            <div className="bio-intro reveal">
              {bioIntro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {bioSections.map((section) => (
              <div key={section.label} className="bio-subsection reveal">
                <div className="prose-label">{section.label}</div>
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Speaking Section */}
        <section className="speaking-section">
          <div className="container">
            <div className="speaking-intro reveal">
              <div className="section-label">Speaking &amp; Podcasts</div>
              <h2 className="section-title">I speak about context, product, and AI.</h2>
              <p>I speak about context architecture, AI product strategy, and the lessons from building AI products in production. My talks are practitioner-focused: specific decisions, real trade-offs, frameworks the audience can apply Monday morning.</p>
            </div>

            <div className="speaking-grid">
              {speakingEntries.map((talk) => (
                <div key={talk.title} className="talk-card reveal">
                  <h3>{talk.title}</h3>
                  <p>{talk.description}</p>
                </div>
              ))}
            </div>

            <div className="speaking-cta reveal">
              For speaking inquiries, podcast bookings, or panel invitations:{" "}
              <Link href="/contact" className="btn-secondary" style={{ display: "inline-flex", marginTop: "16px" }}>
                Get in touch <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Career Arc Section */}
        <section className="career-section">
          <div className="container">
            <div className="career-intro reveal">
              <div className="section-label">Career Arc</div>
              <h2 className="section-title">Twenty years of building systems.</h2>
            </div>

            <div className="career-timeline reveal">
              <div className="timeline-line" />
              <div className="timeline-entries">
                {timelineEntries.map((entry) => (
                  <div key={entry.years} className="timeline-entry">
                    <div className="timeline-dot" />
                    <div className="timeline-entry-years">{entry.years}</div>
                    <div className="timeline-entry-title">{entry.title}</div>
                    <div className="timeline-entry-company">{entry.company}</div>
                    <div className="timeline-entry-desc">{entry.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Section */}
        <section className="social-section">
          <div className="container">
            <div className="social-intro reveal">
              <div className="section-label">Find me online</div>
              <h2 className="section-title">Let&rsquo;s connect.</h2>
            </div>

            <div className="social-links reveal">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="social-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bridge CTA ── */}
        <section className="page-bridge">
          <div className="container">
            <p className="page-bridge-prompt">See what I&rsquo;m building now</p>
            <a href="/projects" className="btn-secondary">View projects <span>&rarr;</span></a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
