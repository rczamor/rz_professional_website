import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

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
              <p className="hero-sub">I&rsquo;ve spent twenty years building systems that help people and organizations make better decisions with the information they have. The thread running through my career isn&rsquo;t a job title. It&rsquo;s a question: how do you get the right information to the right person at the moment they need to decide?</p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="bio-section">
          <div className="container">
            <div className="bio-intro reveal">
              <p>That question has taken me from targeted political campaigns across the country to building enterprise AI platforms, and it&rsquo;s led me to what I work on now: the architecture of context in AI systems &mdash; the five-step process (curate, synthesize, consolidate, prioritize, store) that most AI products skip entirely.</p>
              <p>But I didn&rsquo;t arrive here through AI. I arrived here through behavioral economics, information architecture, and a lot of building.</p>
            </div>

            <div className="bio-subsection reveal">
              <div className="prose-label">The Early Years: Building and Breaking Things (2006&ndash;2014)</div>
              <p>I started in 2006 as a community organizer at Madison Park Development Corporation in Boston, where Celia Grant asked the question that changed my career: &ldquo;How could we have used technology to better mobilize voters in Roxbury?&rdquo; I went to DC to learn political technology, attended the first-ever digital organizing training (New Organizing Institute), and promptly got my teeth kicked in by an industry that didn&rsquo;t know me and didn&rsquo;t care to.</p>
              <p>So I built my way in. I blogged about behavioral economics and decision architecture starting in 2008 &mdash; years before &ldquo;nudge theory&rdquo; became mainstream. I wrote about knowledge systems for an Information Architecture trade publication. I spoke at conferences on these topics. I led digital for two highly targeted U.S. Senate and Congressional races, led digital transformation for some of the top advocacy and charitable organizations in the world, and built prototypes and production products for early stage startups.</p>
              <p>But I wasn&rsquo;t just doing &ldquo;digital.&rdquo; I was building &mdash; websites, database and CRM systems, martech platforms, prototypes, and early products. One startup was essentially Digg for fashion. Another was a fitness social network. I built my first data platform in 2003 &mdash; for Boston Beer Company, using Microsoft Access. Every job involved building applications, which prepared me for the career pivot from digital strategy to product management that came later.</p>
              <p>In 2009, I founded Social Contxt, a tech-enabled services company building an omnichannel martech platform for the SMB market, partly funded by Hootsuite. We grew to five people and six figures in revenue in six months. It didn&rsquo;t become a venture-scale company, but it taught me how to build a product business from zero.</p>
            </div>

            <div className="bio-subsection reveal">
              <div className="prose-label">Enterprise Transformation (2011&ndash;2021)</div>
              <p>I joined Hill Holliday in 2011 as a digital strategist, running campaigns and social customer service programs for Bank of America (1M+ Facebook followers, 30% increase in customer perception) and Cigna Healthcare (reduced service SLA from 7 days to 1 day). Then I moved to 4Site Interactive Studios, where I led digital strategy for clients like PBS, Oceana, and the NFL Foundation, before landing at Phase2.</p>
              <p>Phase2 is where I made the pivot from digital strategy to product. I launched and led a 10-person consulting practice ($3M revenue in year one) and embedded as product lead within J&amp;J, Northwell Health, Ann Inc., Twitter, Reddit, Memorial Sloan Kettering, Al Jazeera, and Sony Music. Each engagement was a transformation story: taking an organization&rsquo;s digital infrastructure and fundamentally changing how their teams used technology to engage customers and drive growth.</p>
              <p>At IBM (2018&ndash;2021), the transformation was bigger. I led digital product and growth for the Cloud and AI self-service portfolio, overseeing 48 reports and a $4M budget. I deployed the growth stack globally, built personalization systems into IBM&rsquo;s DXP, and drove millions in revenue through context-aware nurture and onboarding. But even with two analysts, three data science teams, and a cadre of agencies at my disposal, I constantly felt like I didn&rsquo;t know what our customers actually needed to drive meaningful adoption and retention. That frustration &mdash; &ldquo;if this is this hard with all the resources IBM has, how hard is this for small businesses?&rdquo; &mdash; sparked the idea for Grandstage.</p>
            </div>

            <div className="bio-subsection reveal">
              <div className="prose-label">Founder and Builder (2022&ndash;Present)</div>
              <p>I co-founded Grandstage in 2022. We built an AI research engine for GTM teams, raised $525K, went through Techstars and Antler, shipped three products, and scaled to 90 B2B companies at $0 CAC. After Grandstage, I served as SVP and GM at Helm Labs, generating a $3.25M pipeline for an AI data intelligence platform pre-product launch.</p>
              <p>Now I&rsquo;m VP Product at Suzy, where I led the transformation from a consumer survey platform to a Decision Engine &mdash; an enterprise product that synthesizes fragmented market intelligence into decisions 350+ brands can act on. We launched the Decision Engine on April 2, 2026.</p>
              <p>I&rsquo;m also building Sia &mdash; a personal knowledge system that demonstrates the exact five-step context generation architecture I advocate for. Building it is the proof.</p>
            </div>

            <div className="bio-subsection reveal">
              <div className="prose-label">The Throughline</div>
              <p>Looking back across twenty years, the thread is clear: from politics to digital strategy to product management to AI context architecture. Each step was about the same problem &mdash; how do you turn raw information into something a person (or a system) can use to make a good decision? I&rsquo;ve been reading and writing about cognitive psychology, information theory, and decision science since 2008. What&rsquo;s changed is that AI has made the architecture of context a product problem, not just an academic one. And product problems are what I solve.</p>
              <p>I live in Brooklyn with my wife and two young children. When I&rsquo;m not building, I&rsquo;m strength training, photographing street scenes, or reading sci-fi.</p>
            </div>
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
              <div className="talk-card reveal">
                <h3>The Five Steps Most AI Systems Skip</h3>
                <p>Why most AI products treat data as context and what happens when you build the generation layer they&rsquo;re missing. The five-step architecture (curate, synthesize, consolidate, prioritize, store), grounded in cognitive science and demonstrated in production.</p>
              </div>

              <div className="talk-card reveal">
                <h3>RAG Is Not Enough</h3>
                <p>RAG is a retrieval pattern, not a context strategy. What the next generation of AI products needs beyond chunking and embedding &mdash; and how to think about it differently.</p>
              </div>

              <div className="talk-card reveal">
                <h3>From Zero to Revenue: Building AI Products Without Writing Code</h3>
                <p>The practical guide to building production SaaS products using AI coding tools. Architecture decisions, the mistakes that cost weeks, and the workflows that actually scale.</p>
              </div>

              <div className="talk-card reveal">
                <h3>The Product Leader&rsquo;s Guide to AI Architecture Decisions</h3>
                <p>When to build vs. buy. How to evaluate context systems. Whether your product actually needs a context layer. A decision framework from someone who&rsquo;s made these calls.</p>
              </div>
            </div>

            <div className="speaking-cta reveal">
              For speaking inquiries, podcast bookings, or panel invitations: <Link href="/contact" className="btn-secondary" style={{ display: "inline-flex", marginTop: "16px" }}>Get in touch <span>&rarr;</span></Link>
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
              <div className="timeline-line"></div>
              <div className="timeline-entries">

                <div className="timeline-entry">
                  <div className="timeline-dot"></div>
                  <div className="timeline-entry-years">2025&ndash;Present</div>
                  <div className="timeline-entry-title">VP Product</div>
                  <div className="timeline-entry-company">Suzy</div>
                  <div className="timeline-entry-desc">Led transformation to Decision Engine; launched April 2, 2026</div>
                </div>

                <div className="timeline-entry">
                  <div className="timeline-dot"></div>
                  <div className="timeline-entry-years">2024</div>
                  <div className="timeline-entry-title">SVP &amp; General Manager</div>
                  <div className="timeline-entry-company">Helm Labs</div>
                  <div className="timeline-entry-desc">AI data intelligence platform; $3.25M pipeline pre-launch</div>
                </div>

                <div className="timeline-entry">
                  <div className="timeline-dot"></div>
                  <div className="timeline-entry-years">2022&ndash;2024</div>
                  <div className="timeline-entry-title">Co-Founder &amp; Head of Product</div>
                  <div className="timeline-entry-company">Grandstage / Spade AI</div>
                  <div className="timeline-entry-desc">AI market intelligence; 300% growth, $0 CAC, Techstars + Antler</div>
                </div>

                <div className="timeline-entry">
                  <div className="timeline-dot"></div>
                  <div className="timeline-entry-years">2018&ndash;2021</div>
                  <div className="timeline-entry-title">Digital Product &amp; Growth Leader</div>
                  <div className="timeline-entry-company">IBM</div>
                  <div className="timeline-entry-desc">Cloud &amp; AI portfolio; $4M budget, 48 reports, millions in revenue impact</div>
                </div>

                <div className="timeline-entry">
                  <div className="timeline-dot"></div>
                  <div className="timeline-entry-years">2014&ndash;2017</div>
                  <div className="timeline-entry-title">Director, Product &amp; Digital Strategy</div>
                  <div className="timeline-entry-company">Phase2</div>
                  <div className="timeline-entry-desc">Consulting practice; $3M revenue, J&amp;J, Northwell, Ann Inc., Twitter</div>
                </div>

                <div className="timeline-entry">
                  <div className="timeline-dot"></div>
                  <div className="timeline-entry-years">2012&ndash;2014</div>
                  <div className="timeline-entry-title">Director, Strategy</div>
                  <div className="timeline-entry-company">4Site Interactive Studios</div>
                  <div className="timeline-entry-desc">PBS, nonprofits, digital strategy work</div>
                </div>

                <div className="timeline-entry">
                  <div className="timeline-dot"></div>
                  <div className="timeline-entry-years">2011&ndash;2012</div>
                  <div className="timeline-entry-title">Digital Strategist</div>
                  <div className="timeline-entry-company">Hill Holliday</div>
                  <div className="timeline-entry-desc">Bank of America, Cigna Healthcare</div>
                </div>

                <div className="timeline-entry">
                  <div className="timeline-dot"></div>
                  <div className="timeline-entry-years">2009&ndash;2011</div>
                  <div className="timeline-entry-title">Founder</div>
                  <div className="timeline-entry-company">Social Contxt</div>
                  <div className="timeline-entry-desc">Martech platform for SMBs, funded by Hootsuite</div>
                </div>

                <div className="timeline-entry">
                  <div className="timeline-dot"></div>
                  <div className="timeline-entry-years">2006&ndash;2009</div>
                  <div className="timeline-entry-title">Digital Director &amp; Product Manager</div>
                  <div className="timeline-entry-company">Freelance</div>
                  <div className="timeline-entry-desc">Political campaigns, Mozilla, Jane Goodall Institute, U.S. Senate races</div>
                </div>

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
              <a href="https://linkedin.com/in/richezamorjr/" className="social-link">LinkedIn</a>
              <a href="https://x.com/richezamor" className="social-link">X / Twitter</a>
              <a href="https://github.com/rczamor" className="social-link">GitHub</a>
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
