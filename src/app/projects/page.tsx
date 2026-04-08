import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { featuredProject, projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects & Prototypes — Riche Zamor",
  description:
    "Side projects and prototypes by Riche Zamor — AI experiments, context architecture tools, and things built to test ideas.",
  openGraph: {
    title: "Projects & Prototypes — Riche Zamor",
    description:
      "Side projects and prototypes by Riche Zamor — AI experiments, context architecture tools, and things built to test ideas.",
    url: "https://richezamor.com/projects",
    type: "website",
    images: ["https://richezamor.com/og-image.png"],
    siteName: "Riche Zamor",
  },
  twitter: {
    card: "summary_large_image",
    site: "@richezamor",
    title: "Projects & Prototypes — Riche Zamor",
    description:
      "Side projects and prototypes — things I build to learn, test ideas, and scratch itches.",
    images: ["https://richezamor.com/og-image.png"],
  },
  alternates: { canonical: "https://richezamor.com/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Nav activePage="projects" />

      <main id="main-content">
        {/* Hero */}
        <section className="hero hero-centered">
          <div className="container">
              <h1>Side Projects &amp; Prototypes</h1>
              <p className="hero-sub">Things I build to learn, test ideas, and scratch itches.</p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <div className="container">
            <div className="projects-intro reveal">
              <div className="section-label">Featured Project</div>
            </div>

            <div className="projects-grid featured">
              <div className="project-card featured reveal">
                <div>
                  <h3>{featuredProject.title}</h3>
                  <div className="project-status">{featuredProject.status}</div>
                  <p>{featuredProject.description}</p>
                  {featuredProject.link && (
                    <a href={featuredProject.link} className="featured-link">
                      {featuredProject.linkText} <span>&rarr;</span>
                    </a>
                  )}
                </div>
                <div className="featured-visual">
                  <svg viewBox="0 0 200 200" width="200" height="200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <line x1="100" y1="40" x2="50" y2="90" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
                    <line x1="100" y1="40" x2="150" y2="80" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
                    <line x1="50" y1="90" x2="70" y2="150" stroke="var(--accent-secondary)" strokeWidth="1.5" opacity="0.25" />
                    <line x1="50" y1="90" x2="100" y2="120" stroke="var(--accent)" strokeWidth="1.5" opacity="0.2" />
                    <line x1="150" y1="80" x2="100" y2="120" stroke="var(--accent-secondary)" strokeWidth="1.5" opacity="0.25" />
                    <line x1="150" y1="80" x2="160" y2="140" stroke="var(--accent)" strokeWidth="1.5" opacity="0.2" />
                    <line x1="100" y1="120" x2="70" y2="150" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
                    <line x1="100" y1="120" x2="130" y2="160" stroke="var(--accent-secondary)" strokeWidth="1.5" opacity="0.25" />
                    <line x1="160" y1="140" x2="130" y2="160" stroke="var(--accent)" strokeWidth="1.5" opacity="0.2" />
                    <line x1="70" y1="150" x2="130" y2="160" stroke="var(--accent-secondary)" strokeWidth="1.5" opacity="0.15" />
                    <line x1="30" y1="60" x2="50" y2="90" stroke="var(--accent)" strokeWidth="1" opacity="0.15" />
                    <line x1="170" y1="50" x2="150" y2="80" stroke="var(--accent-secondary)" strokeWidth="1" opacity="0.15" />
                    <circle cx="100" cy="40" r="16" fill="var(--accent)" opacity="0.06" />
                    <circle cx="100" cy="120" r="20" fill="var(--accent)" opacity="0.08" />
                    <circle cx="100" cy="40" r="7" fill="var(--accent)" opacity="0.9" />
                    <circle cx="50" cy="90" r="5" fill="var(--accent)" opacity="0.7" />
                    <circle cx="150" cy="80" r="5.5" fill="var(--accent-secondary)" opacity="0.7" />
                    <circle cx="100" cy="120" r="8" fill="var(--accent)" opacity="0.95" />
                    <circle cx="70" cy="150" r="4.5" fill="var(--accent-secondary)" opacity="0.6" />
                    <circle cx="130" cy="160" r="5" fill="var(--accent)" opacity="0.65" />
                    <circle cx="160" cy="140" r="4" fill="var(--accent-secondary)" opacity="0.5" />
                    <circle cx="30" cy="60" r="3" fill="var(--accent)" opacity="0.3" />
                    <circle cx="170" cy="50" r="3" fill="var(--accent-secondary)" opacity="0.3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="projects-intro reveal">
              <div className="section-label">Other Projects</div>
            </div>

            <div className="projects-grid reveal">
              {projects.map((p) => (
                <div key={p.title} className="project-card">
                  <h3>{p.title}</h3>
                  <div className={`project-status${p.status === "Prototype" ? " prototype" : ""}`}>
                    {p.status}
                  </div>
                  <p className="project-description">{p.description}</p>
                  {p.link && (
                    <a
                      href={p.link}
                      target={p.link.startsWith("http") ? "_blank" : undefined}
                      className={`project-link${p.link.startsWith("http") ? " external" : ""}`}
                    >
                      {p.link.startsWith("http")
                        ? p.link.replace(/^https?:\/\//, "").replace(/\/$/, "")
                        : p.link}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="cta-section reveal" style={{ marginTop: "80px", paddingTop: "80px" }}>
              <div className="cta-box">
                <h2>Explore the code</h2>
                <p>Many of these projects are open-source or available on my GitHub. Check out the latest work, fork experiments, or contribute.</p>
                <a href="https://github.com/rczamor" target="_blank" className="cta-link">View my GitHub <span>&rarr;</span></a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bridge CTA ── */}
        <section className="page-bridge">
          <div className="container">
            <p className="page-bridge-prompt">Read my latest thinking</p>
            <a href="/thinking" className="btn-secondary">View essays <span>&rarr;</span></a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
