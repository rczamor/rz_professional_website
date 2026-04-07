import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Prototypes — Riche Zamor",
  description:
    "Side projects and prototypes — things I build to learn, test ideas, and scratch itches.",
  openGraph: {
    title: "Projects & Prototypes — Riche Zamor",
    description:
      "Side projects and prototypes — things I build to learn, test ideas, and scratch itches.",
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

      <main>
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
                  <h3>Sia</h3>
                  <div className="project-status">In Development</div>
                  <p>A personal knowledge system demonstrating the five-step context generation architecture I advocate for. Curates from Feedly and other sources, synthesizes at ingest time, runs consolidation agents every six hours, prioritizes by goal-awareness, and stores with intelligent indexing. Built with FastAPI, Neon Postgres + pgvector, Ollama, and Langfuse. This is the proof of the thesis.</p>
                  <a href="#" className="featured-link">Learn more <span>&rarr;</span></a>
                </div>
                <div className="featured-visual">
                  <svg viewBox="0 0 200 200" width="200" height="200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {/* Edges */}
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
                    {/* Glow halos */}
                    <circle cx="100" cy="40" r="16" fill="var(--accent)" opacity="0.06" />
                    <circle cx="100" cy="120" r="20" fill="var(--accent)" opacity="0.08" />
                    {/* Nodes */}
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
              <div className="project-card">
                <h3>Ascend</h3>
                <div className="project-status">Live</div>
                <p className="project-description">A career growth SaaS product built entirely with AI coding tools. No hand-written code. Total cost: &lt;$500 vs. ~$200K per product in the Grandstage era.</p>
                <a href="https://ascend.careers" target="_blank" className="project-link external">ascend.careers</a>
              </div>
              <div className="project-card">
                <h3>Blocade</h3>
                <div className="project-status">Live</div>
                <p className="project-description">A political fundraising system for local campaigns. Streamlined tools for grassroots campaign finance and donor management.</p>
                <a href="https://blocade.app" target="_blank" className="project-link external">blocade.app</a>
              </div>
              <div className="project-card">
                <h3>AI Topic Trend Analyzer</h3>
                <div className="project-status prototype">Prototype</div>
                <p className="project-description">Analyzes trending topics and patterns in AI discourse. Real-time tracking of emerging themes, terminology, and community focus areas.</p>
                <a href="https://ai-topic-analyzer.replit.app" target="_blank" className="project-link external">View Prototype</a>
              </div>
              <div className="project-card">
                <h3>Hubspot AI Dashboard</h3>
                <div className="project-status prototype">Prototype</div>
                <p className="project-description">AI-powered onboarding and analytics dashboard for HubSpot. Demonstrates intelligent context generation for customer success.</p>
                <a href="https://hubspot-ai-onboarding.replit.app" target="_blank" className="project-link external">View Prototype</a>
              </div>
              <div className="project-card">
                <h3>AI Onboarding Assistant</h3>
                <div className="project-status prototype">Prototype</div>
                <p className="project-description">Intelligent onboarding system that adapts to user context and behavior. Demonstrates personalized context generation at scale.</p>
              </div>
              <div className="project-card">
                <h3>Ploppy</h3>
                <div className="project-status">Project</div>
                <p className="project-description">Analyze NYC political contribution data. Tools for understanding political finance patterns and contributor networks in New York City.</p>
              </div>
              <div className="project-card">
                <h3>Recipe Remix</h3>
                <div className="project-status">Live</div>
                <p className="project-description">Because sometimes you just want to build something fun. A creative cooking tool that remixes and reimagines recipes.</p>
                <a href="https://recipe-remix.app" target="_blank" className="project-link external">recipe-remix.app</a>
              </div>
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
