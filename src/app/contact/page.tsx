import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Get in Touch — Riche Zamor",
  description:
    "Reach out for advisory, board positions, speaking engagements, or to connect.",
  openGraph: {
    title: "Get in Touch — Riche Zamor",
    description:
      "Reach out for advisory, board positions, speaking engagements, or to connect.",
    url: "https://richezamor.com/contact",
    type: "website",
    images: ["https://richezamor.com/og-image.png"],
    siteName: "Riche Zamor",
  },
  twitter: {
    card: "summary_large_image",
    site: "@richezamor",
    title: "Get in Touch — Riche Zamor",
    description:
      "Reach out for advisory, board positions, speaking engagements, or to connect.",
    images: ["https://richezamor.com/og-image.png"],
  },
  alternates: { canonical: "https://richezamor.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Nav activePage="contact" />

      <main>
        {/* Hero */}
        <section className="hero hero-centered" style={{ paddingBottom: '32px' }}>
          <div className="container">
              <h1>Let&rsquo;s Connect</h1>
              <p className="hero-sub">I&rsquo;m always open to connecting with people building at the intersection of AI and product. Here&rsquo;s what I&rsquo;m available for:</p>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="container">
            <div className="contact-grid reveal">

              {/* Left Column: Availability */}
              <div className="availability-section">
                <h2 className="availability-heading">Availability</h2>

                <div className="engagement-cards">
                  <div className="engagement-card">
                    <div className="engagement-icon">
                      <span className="material-symbols-outlined">account_tree</span>
                    </div>
                    <h3>Advisory</h3>
                    <p>If you&rsquo;re building an AI product and making architecture decisions about context, memory, RAG, or agent systems, I can help you think through the trade-offs.</p>
                  </div>

                  <div className="engagement-card">
                    <div className="engagement-icon">
                      <span className="material-symbols-outlined">groups</span>
                    </div>
                    <h3>Board Positions</h3>
                    <p>I&rsquo;m interested in joining boards of AI-forward companies where my product and go-to-market experience adds value.</p>
                  </div>

                  <div className="engagement-card">
                    <div className="engagement-icon">
                      <span className="material-symbols-outlined">record_voice_over</span>
                    </div>
                    <h3>Speaking &amp; Podcasts</h3>
                    <p>I speak about context architecture, AI product strategy, and building in production. Practitioner-focused talks with specific frameworks the audience can apply.</p>
                  </div>
                </div>

              </div>

              {/* Right Column: Contact Form */}
              <ContactForm />

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
