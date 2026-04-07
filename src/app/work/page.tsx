import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Work — Riche Zamor",
  description:
    "Track record of building AI products at scale. Suzy, Grandstage, Helm Labs, IBM — every role a transformation story.",
  openGraph: {
    title: "Work — Riche Zamor",
    description:
      "Track record of building AI products at scale. 300% growth at $0 CAC. $3.25M pipeline pre-product. Millions in revenue impact.",
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
      <main>
        {/* ── Hero ── */}
        <section className="hero hero-centered">
          <div className="container">
            <h1>Work</h1>
            <p className="hero-sub">Transforming organizations through 0&rarr;1 innovation, AI architecture, and product-led growth.</p>
          </div>
        </section>

        {/* ── Cases ── */}
        <section className="cases">
          <div className="container">

            {/* ── Suzy ── */}
            <div className="case reveal">
              <div className="case-header">
                <div className="case-title-group">
                  <div className="case-company">Suzy</div>
                  <div className="case-meta">
                    <span className="case-tag role">VP Product</span>
                    <span className="case-tag period">Dec 2025 – Present</span>
                    <span className="case-tag type">Decision Engine</span>
                  </div>
                </div>
                <div className="case-metrics">
                  <div className="cm"><div className="cm-val">6 wks</div><div className="cm-lbl">concept &rarr; launch</div></div>
                  <div className="cm"><div className="cm-val">350+</div><div className="cm-lbl">enterprise brands</div></div>
                </div>
              </div>
              <div className="case-body">
                <div className="case-section"><h3>The Challenge</h3><p>Suzy had spent nine years as a market research platform trusted by 350+ enterprises — Microsoft, Google, PepsiCo, Netflix, P&amp;G. But the product was a survey tool in a market being rapidly disrupted by AI. Enterprise marketing teams were drowning in fragmented intelligence across 20+ tools with no system that synthesized it all into action.</p></div>
                <div className="case-section"><h3>What I Did</h3><p>Led product strategy for transformation to Decision Engine — structured around Intelligence, Insights, and Impact. Architected retrieval using Databricks vector DB with Qwen3-Embedding-8B. Designed AI evaluation framework. Drove inference cost optimization through model tiering (Opus/Sonnet/Haiku routing). Led GTM strategy. Reorganized product org from two pods into six triads shipping on daily cycles.</p></div>
              </div>
              <div className="case-context"><h3>Context Connection</h3><p>Suzy&#39;s three capabilities map directly to the five-step context generation framework: Intelligence is curation, Insights is synthesis and consolidation, Impact is prioritization and intelligent storage. The thesis showed up in the product before I named it.</p></div>
            </div>

            {/* ── Grandstage / Spade AI ── */}
            <div className="case reveal">
              <div className="case-header">
                <div className="case-title-group">
                  <div className="case-company">Grandstage / Spade AI</div>
                  <div className="case-meta">
                    <span className="case-tag role">Co-Founder &amp; Head of Product</span>
                    <span className="case-tag period">2022 – 2024</span>
                    <span className="case-tag type">AI Market Intelligence</span>
                  </div>
                </div>
                <div className="case-metrics">
                  <div className="cm"><div className="cm-val">300%</div><div className="cm-lbl">user growth</div></div>
                  <div className="cm"><div className="cm-val">$0</div><div className="cm-lbl">CAC</div></div>
                  <div className="cm"><div className="cm-val">80%</div><div className="cm-lbl">retention</div></div>
                </div>
              </div>
              <div className="case-body">
                <div className="case-section"><h3>The Challenge</h3><p>GTM teams at B2B companies were spending weeks compiling market insights from fragmented sources — analyst reports, news feeds, competitor data, social signals. The process was manual, expensive, and produced results that were stale by the time they reached a decision-maker.</p></div>
                <div className="case-section"><h3>What I Did</h3><p>Led zero-to-one product development for a venture-backed platform ($525K raised). Managed ten across PM, UX, data science, and engineering. Shipped three AI products. Built hybrid search architecture: PostgreSQL + PGVector for dense retrieval, HNSW-indexed keyword search for sparse. Designed hierarchical relevance model using K-Means clustering. Custom evaluation and observability tooling increased precision over 40%.</p></div>
              </div>
              <div className="case-context"><h3>Context Connection</h3><p>This product worked because it consolidated raw market data into synthesized, goal-aware context — not because of the model. The architecture validated the five-step approach before I had the language for it.</p></div>
            </div>

            {/* ── Helm Labs ── */}
            <div className="case reveal">
              <div className="case-header">
                <div className="case-title-group">
                  <div className="case-company">Helm Labs</div>
                  <div className="case-meta">
                    <span className="case-tag role">SVP &amp; General Manager</span>
                    <span className="case-tag period">2024</span>
                    <span className="case-tag type">AI Data Intelligence</span>
                  </div>
                </div>
                <div className="case-metrics">
                  <div className="cm"><div className="cm-val">$3.25M</div><div className="cm-lbl">pipeline pre-launch</div></div>
                  <div className="cm"><div className="cm-val">14x</div><div className="cm-lbl">partner ACV growth</div></div>
                </div>
              </div>
              <div className="case-body">
                <div className="case-section"><h3>The Challenge</h3><p>Helm Labs (subsidiary of Murmuration, funded by Bloomberg LP) had acquired five separate products serving political and public affairs professionals. They needed a unified platform strategy, a coherent product roadmap, and a go-to-market motion built from scratch — for a product that didn&#39;t exist yet.</p></div>
                <div className="case-section"><h3>What I Did</h3><p>Defined enterprise data platform vision integrating proprietary datasets and custom ML models covering 200+ behavioral and demographic data points on ~200M Americans. Built GTM strategy selling platform access with research services. Led search interface redesign reducing response time 50%+. Achieved 105% gross margin growth through pricing optimization.</p></div>
              </div>
              <div className="case-context"><h3>Context Connection</h3><p>The value I sold was context architecture — how information about ~200 million Americans would be prioritized and presented to decision-makers. The pipeline was built on the strength of the vision and the services layer, not a shipping product.</p></div>
            </div>

            {/* ── IBM ── */}
            <div className="case reveal">
              <div className="case-header">
                <div className="case-title-group">
                  <div className="case-company">IBM</div>
                  <div className="case-meta">
                    <span className="case-tag role">Digital Product &amp; Growth Leader</span>
                    <span className="case-tag period">2018 – 2021</span>
                    <span className="case-tag type">Growth — Cloud &amp; Watson</span>
                  </div>
                </div>
                <div className="case-metrics">
                  <div className="cm"><div className="cm-val">31%</div><div className="cm-lbl">trial conversion lift</div></div>
                  <div className="cm"><div className="cm-val">$2.4M</div><div className="cm-lbl">e-nurture revenue</div></div>
                  <div className="cm"><div className="cm-val">8 fig</div><div className="cm-lbl">pipeline</div></div>
                </div>
              </div>
              <div className="case-body">
                <div className="case-section"><h3>The Challenge</h3><p>IBM&#39;s Cloud and AI business needed to fundamentally transform how it acquired, converted, and retained approximately one million trial users globally. The digital experience was generic — same content and journey for every user regardless of product interest, stage, or behavior.</p></div>
                <div className="case-section"><h3>What I Did</h3><p>Oversaw 48 reports and $4M budget. Built content authoring features for IBM&#39;s DXP cutting time-to-market 50%+ and doubling organic traffic. Launched IBM&#39;s first personalization pilot. Developed predictive dashboards and automated personalized onboarding. Deployed growth stack (Braze, Segment, Amplitude) across 30+ countries with 100% adoption.</p></div>
              </div>
              <div className="case-context"><h3>Context Connection</h3><p>Personalization at scale is a context problem: what does this specific customer need to see, right now, to make a decision? The systems I built at IBM were early context-aware architectures applied to growth.</p></div>
            </div>

            {/* ── Phase2 ── */}
            <div className="case reveal">
              <div className="case-header">
                <div className="case-title-group">
                  <div className="case-company">Phase2</div>
                  <div className="case-meta">
                    <span className="case-tag role">Director, Product &amp; Digital Strategy</span>
                    <span className="case-tag period">2014 – 2017</span>
                    <span className="case-tag type">Enterprise Transformation</span>
                  </div>
                </div>
                <div className="case-metrics">
                  <div className="cm"><div className="cm-val">$3M</div><div className="cm-lbl">practice revenue yr 1</div></div>
                  <div className="cm"><div className="cm-val">500%</div><div className="cm-lbl">J&amp;J revenue growth</div></div>
                </div>
              </div>
              <div className="case-body" style={{ gridTemplateColumns: '1fr' }}>
                <div className="case-section"><h3>The Throughline</h3><p>Launched and led a 10-person digital and product strategy consulting practice. Embedded as product lead within major enterprise clients, each time transforming how the organization used digital platforms and intelligent tools.</p></div>
              </div>
              <div className="phase2-grid">
                <div className="p2-card"><h4>Johnson &amp; Johnson</h4><p>Overhauled CMS powering 1,000+ product websites. Cut time-to-market from months to under four weeks. Grew engagement revenue 500%+.</p></div>
                <div className="p2-card"><h4>Northwell Health</h4><p>Designed editorial platform transforming patient engagement. Led CMS enhancements and decoupled React frontend. Reactivated tens of thousands of dormant patients.</p></div>
                <div className="p2-card"><h4>Ann Inc. (Ann Taylor)</h4><p>Managed design and build of digital workspace for retail employees across brands.</p></div>
                <div className="p2-card"><h4>Other Platforms</h4><p>Twitter international SEO tools. Memorial Sloan Kettering CMS. Reddit digital support center. Al Jazeera omnichannel CMS. Sony Music collaboration system.</p></div>
              </div>
            </div>

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
