import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import {
  heroSub,
  introText,
  throughlineQuote,
  throughlineBody,
  personalText,
  speakingEntries,
  socialLinks,
  photos,
} from "@/content/about";
import { AnimatedStats } from "@/components/about/AnimatedStats";
import JourneyMapWrapper from "@/components/about/JourneyMapWrapper";
import AboutPhoto from "@/components/about/AboutPhoto";

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
        {/* ═══ HERO ═══ */}
        <section className="hero hero-centered">
          <div className="container">
            <h1>About</h1>
            <p className="hero-sub">{heroSub}</p>
          </div>
        </section>

        {/* ═══ INTRO + PORTRAIT ═══ */}
        <section className="about-section">
          <div className="container about-intro-grid">
            <div>
              {introText.map((p, i) => (
                <p key={i} className="about-body-text">
                  {p}
                </p>
              ))}
            </div>
            <AboutPhoto
              src={photos.headshot.src}
              alt={photos.headshot.alt}
              aspect={photos.headshot.aspect}
              label="Portrait"
            />
          </div>
        </section>

        {/* ═══ BY THE NUMBERS ═══ */}
        <section className="about-section">
          <div className="container">
            <div className="section-label">By the numbers</div>
            <h2 className="section-title" style={{ marginBottom: 64 }}>
              The quick version<span className="accent-dot">.</span>
            </h2>
            <AnimatedStats />
          </div>
        </section>

        {/* ═══ PHOTO STRIP 1 ═══ */}
        <section className="about-photo-strip">
          <div className="container about-three-col">
            <AboutPhoto
              src={photos.speaking.src}
              alt={photos.speaking.alt}
              aspect={photos.speaking.aspect}
              label="Speaking"
            />
            <AboutPhoto
              src={photos.building.src}
              alt={photos.building.alt}
              aspect={photos.building.aspect}
              label="Building"
            />
            <AboutPhoto
              src={photos.nycSkyline.src}
              alt={photos.nycSkyline.alt}
              aspect={photos.nycSkyline.aspect}
              label="Street Photography"
            />
          </div>
        </section>

        {/* ═══ THE JOURNEY + STICKY MAP ═══ */}
        <section className="about-section">
          <div className="container">
            <JourneyMapWrapper />
          </div>
        </section>

        {/* ═══ PHOTO STRIP 2 ═══ */}
        <section className="about-photo-strip">
          <div className="container about-two-col-photos">
            <AboutPhoto
              src={photos.family.src}
              alt={photos.family.alt}
              aspect={photos.family.aspect}
              label="Family / Brooklyn"
              objectPosition="center 20%"
            />
            <AboutPhoto
              src={photos.deadlift.src}
              alt={photos.deadlift.alt}
              aspect={photos.deadlift.aspect}
              label="Strength Training"
              objectPosition="center 15%"
            />
          </div>
        </section>

        {/* ═══ THE THROUGHLINE ═══ */}
        <section className="about-section">
          <div className="container about-throughline">
            <div className="section-label">The Throughline</div>
            <blockquote>
              {throughlineQuote}
              <span className="accent-dot">?</span>
            </blockquote>
            <p className="about-body-text" style={{ maxWidth: 640 }}>
              {throughlineBody}
            </p>
          </div>
        </section>

        {/* ═══ OFF THE CLOCK ═══ */}
        <section className="about-section">
          <div className="container about-personal-grid">
            <div>
              <div className="section-label">Off the clock</div>
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                Brooklyn, with family<span className="accent-dot">.</span>
              </h2>
              <p
                className="about-body-text"
                style={{ maxWidth: 540, marginBottom: 32 }}
              >
                {personalText}
              </p>
              <div className="about-social-links">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="about-small-photos">
              <AboutPhoto
                src={photos.scifiReads.src}
                alt={photos.scifiReads.alt}
                aspect={photos.scifiReads.aspect}
                label="Sci-fi reads"
              />
              <AboutPhoto
                src={photos.brooklynStreet.src}
                alt={photos.brooklynStreet.alt}
                aspect={photos.brooklynStreet.aspect}
                label="Street photo"
              />
            </div>
          </div>
        </section>

        {/* ═══ SPEAKING & PODCASTS ═══ */}
        <section className="about-section">
          <div className="container">
            <div className="section-label">Speaking &amp; Podcasts</div>
            <h2 className="section-title" style={{ marginBottom: 12 }}>
              I speak about context, product, and AI
              <span className="accent-dot">.</span>
            </h2>
            <p
              className="about-body-text"
              style={{ maxWidth: 640, marginBottom: 48 }}
            >
              Practitioner-focused: specific decisions, real trade-offs,
              frameworks the audience can apply Monday morning.
            </p>
            <div className="about-speaking-grid">
              {speakingEntries.map((talk) => (
                <div key={talk.title} className="about-speaking-card">
                  <h3>{talk.title}</h3>
                  <p>{talk.description}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 48 }}>
              <Link href="/contact" className="about-btn-primary">
                Get in touch for speaking inquiries &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ PAGE BRIDGE ═══ */}
        <section className="about-footer-cta">
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              See what I&rsquo;m building<span className="accent-dot">.</span>
            </h2>
            <p
              className="about-body-text"
              style={{ marginBottom: 40 }}
            >
              Explore the projects, read the thinking, or get in touch.
            </p>
            <div className="about-cta-buttons">
              <Link href="/projects" className="about-btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="about-btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
