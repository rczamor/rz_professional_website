import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { caseStudies } from "@/content/work";

export const metadata = {
  title: "Work — Riche Zamor",
  description:
    "Riche Zamor's track record building AI products at Suzy, Grandstage, Helm Labs, and IBM — 300% growth, $3.25M pipeline, and $10M+ revenue impact.",
  openGraph: {
    title: "Work — Riche Zamor",
    description:
      "Riche Zamor's track record building AI products at Suzy, Grandstage, Helm Labs, and IBM — 300% growth, $3.25M pipeline, and $10M+ revenue impact.",
    url: "https://richezamor.com/work",
    type: "website",
    images: ["https://richezamor.com/og-image.png"],
    siteName: "Riche Zamor",
  },
  twitter: {
    card: "summary_large_image",
    site: "@richezamor",
    title: "Work — Riche Zamor",
    description: "Track record of building AI products at scale.",
    images: ["https://richezamor.com/og-image.png"],
  },
  alternates: { canonical: "https://richezamor.com/work" },
};

export default function WorkPage() {
  return (
    <>
      <Nav activePage="work" />
      <main id="main-content">
        {/* ── Hero ── */}
        <section className="hero hero-centered">
          <div className="container">
            <h1>Work</h1>
            <p className="hero-sub">Every role has been a context architecture story — taking raw data, fragmented systems, or greenfield products and building the intelligence layer that makes them work.</p>
          </div>
        </section>

        {/* ── Cases ── */}
        <section className="cases">
          <div className="container">
            {caseStudies.map((cs) => (
              <div key={cs.company} className="case reveal">
                <div className="case-header">
                  <div className="case-title-group">
                    <div className="case-company">{cs.company}</div>
                    <div className="case-meta">
                      <span className="case-tag role">{cs.role}</span>
                      <span className="case-tag period">{cs.period}</span>
                      <span className="case-tag type">{cs.type}</span>
                    </div>
                  </div>
                  <div className="case-metrics">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="cm">
                        <div className="cm-val">{m.value}</div>
                        <div className="cm-lbl">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="case-body"
                  style={cs.subEntries ? { gridTemplateColumns: "1fr" } : undefined}
                >
                  <div className="case-section">
                    <h3>{cs.subEntries ? "The Throughline" : "The Challenge"}</h3>
                    <p>{cs.challenge}</p>
                  </div>
                  {!cs.subEntries && (
                    <div className="case-section">
                      <h3>What I Did</h3>
                      <p>{cs.whatIBuilt}</p>
                    </div>
                  )}
                </div>
                {cs.contextConnection && (
                  <div className="case-context">
                    <h3>Context Connection</h3>
                    <p>{cs.contextConnection}</p>
                  </div>
                )}
                {cs.subEntries && (
                  <div className="phase2-grid">
                    {cs.subEntries.map((sub) => (
                      <div key={sub.role} className="p2-card">
                        <h4>{sub.role}</h4>
                        <p>{sub.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Bridge CTA ── */}
        <section className="page-bridge">
          <div className="container">
            <p className="page-bridge-prompt">Meet the person behind the work</p>
            <a href="/about" className="btn-secondary">About me <span>&rarr;</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
