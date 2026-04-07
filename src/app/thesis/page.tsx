import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import ThesisCanvasAnimations from "@/components/ThesisCanvasAnimations";
import ScrollReveal from "@/components/ScrollReveal";
import "@/styles/thesis.css";

export const metadata = {
  title: "Data Is Not Context — Riche Zamor",
  description:
    "The Context Architecture Thesis by Riche Zamor: a five-step framework for designing the informational environment that surrounds AI systems.",
  openGraph: {
    title: "Data Is Not Context — Riche Zamor",
    description:
      "The Context Architecture Thesis by Riche Zamor: curation, synthesis, consolidation, prioritization, and intelligent storage — the five steps most AI systems skip.",
    url: "https://richezamor.com/thesis",
    type: "article",
    images: ["https://richezamor.com/og-image.png"],
    siteName: "Riche Zamor",
  },
  twitter: {
    card: "summary_large_image",
    site: "@richezamor",
    title: "Data Is Not Context — Riche Zamor",
    description: "The thesis on why AI systems need context architecture.",
    images: ["https://richezamor.com/og-image.png"],
  },
  alternates: { canonical: "https://richezamor.com/thesis" },
};

export default function ThesisPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is context architecture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Context architecture is the practice of designing the informational environment that surrounds AI systems — shaping what they know, how they retrieve it, and how that knowledge is structured for human decision-making. The term was coined by Riche Zamor.",
        },
      },
      {
        "@type": "Question",
        name: "What are the five steps of context architecture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The five steps are: (1) Curation — filtering what enters the pipeline, (2) Synthesis — extracting insights across sources, (3) Consolidation — finding cross-cutting patterns over time, (4) Prioritization — ranking by goal-awareness, and (5) Intelligent Storage — storing with priority-aware indexing.",
        },
      },
      {
        "@type": "Question",
        name: "Why does context architecture matter more than larger context windows?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The bottleneck is not how much context you can fit — it's how well that context has been selected and compressed for the decision at hand. Expert decision-makers process less information than novices, but they process the right things.",
        },
      },
      {
        "@type": "Question",
        name: "Who coined context architecture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Riche Zamor coined the term 'context architecture' based on two decades of building AI products at companies including Suzy, Grandstage, Helm Labs, and IBM.",
        },
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Data Is Not Context — The Context Architecture Thesis",
    author: {
      "@type": "Person",
      name: "Riche Zamor",
      url: "https://richezamor.com",
    },
    publisher: {
      "@type": "Person",
      name: "Riche Zamor",
    },
    url: "https://richezamor.com/thesis",
    datePublished: "2026-04-06",
    description: "The thesis on why AI systems need context architecture — the five-step pipeline most teams skip.",
  };

  return (
    <>
      <Nav activePage="thesis" />
      <main id="main-content">
        {/* ===== HERO ===== */}
        <section className="thesis-hero">
          <div className="thesis-container">
            <h1>Data Is <span className="hi">Not</span> Context.</h1>
            <p className="thesis-hero-sub">The five-step process most AI systems skip — and why it determines whether your product is mediocre or exceptional.</p>
          </div>
        </section>

        {/* ===== THE PROBLEM ===== */}
        <section className="thesis-prose">
          <div className="thesis-container">
            <div className="thesis-narrow reveal">
              <div className="thesis-prose-label">The Problem</div>
              <h2>Why do most AI systems confuse data with context?</h2>
              <p>They chunk documents. Embed them. Store them in a vector database. Retrieve the top-k results at query time. Ship the output.</p>
              <p><strong>This is not context. This is data retrieval with a similarity score.</strong></p>
              <p>The result is predictable: hallucinations, irrelevant responses, context windows stuffed with noise, and products that feel impressive in a demo but collapse under real-world conditions. Research has consistently shown that LLM performance degrades non-uniformly as you add more context — even on simple tasks.<span className="cite"><span className="cite-num">1</span><span className="cite-tooltip"><span className="cite-source">Lost in the Middle: How Language Models Use Long Contexts</span><span className="cite-detail">Liu et al. (2023) demonstrated that LLM performance degrades significantly when relevant information is placed in the middle of long contexts, even on simple retrieval tasks.</span><a className="cite-link" href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener noreferrer">arxiv.org/abs/2307.03172 &rarr;</a></span></span> Information positioned in the middle of the context window sees 20%+ accuracy drops.<span className="cite"><span className="cite-num">2</span><span className="cite-tooltip"><span className="cite-source">Same study — &ldquo;U-shaped&rdquo; attention curve</span><span className="cite-detail">The same research found a U-shaped performance curve: models attend most to the beginning and end of context, with 20%+ accuracy degradation for information in the middle positions.</span><a className="cite-link" href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener noreferrer">arxiv.org/abs/2307.03172 &rarr;</a></span></span></p>
              <p>More context is not better context. And most of what&apos;s being retrieved was never actually <em>context</em> to begin with.</p>
            </div>
          </div>
        </section>

        {/* ===== THE FIVE STEPS ===== */}
        <section className="thesis-steps-section" id="steps">
          <div className="thesis-container">
            <div className="thesis-steps-header reveal">
              <div className="thesis-prose-label">The Five Steps</div>
              <h2>What are the five steps of context architecture?</h2>
              <p className="answer-summary">Context architecture follows five steps: curation, synthesis, consolidation, prioritization, and intelligent storage. Most AI systems skip four of them, jumping straight to retrieval.</p>
            </div>
            <div className="thesis-steps-grid">

              <div className="thesis-step-card reveal" data-step="0">
                <div className="thesis-step-top">
                  <div className="thesis-step-num">01</div>
                  <div className="thesis-step-content">
                    <h3>Curation</h3>
                    <p>Not everything is worth processing. Intelligent filtering at the intake level determines whether downstream steps operate on signal or noise. What sources matter? What&apos;s fresh? What&apos;s relevant to the goals of this system? Curation is the decision about what enters the pipeline at all.</p>
                  </div>
                </div>
                <div className="thesis-step-canvas-wrap"><canvas></canvas></div>
              </div>

              <div className="thesis-step-card reveal" data-step="1">
                <div className="thesis-step-top">
                  <div className="thesis-step-num">02</div>
                  <div className="thesis-step-content">
                    <h3>Synthesis</h3>
                    <p>The active processing step — classifying inputs, extracting insights, combining information across sources, and producing understanding that no single document contained. The difference between storing an article and understanding what it means in the context of everything else the system knows.</p>
                  </div>
                </div>
                <div className="thesis-step-canvas-wrap"><canvas></canvas></div>
              </div>

              <div className="thesis-step-card reveal" data-step="2">
                <div className="thesis-step-top">
                  <div className="thesis-step-num">03</div>
                  <div className="thesis-step-content">
                    <h3>Consolidation</h3>
                    <p>The periodic, background process of replaying accumulated knowledge to find cross-cutting patterns, merge redundant information, prune stale facts, and extract higher-order insights. This is what the brain does during sleep. It&apos;s what makes an intelligence system compound over time rather than just accumulate.</p>
                  </div>
                </div>
                <div className="thesis-step-canvas-wrap"><canvas></canvas></div>
              </div>

              <div className="thesis-step-card reveal" data-step="3">
                <div className="thesis-step-top">
                  <div className="thesis-step-num">04</div>
                  <div className="thesis-step-content">
                    <h3>Prioritization</h3>
                    <p>Ranking information by goal-awareness. What does the system need to decide? What context is most relevant to that specific decision? Compression without goal-awareness is just making data smaller. Prioritization makes it actionable. Expert decision-makers process less information than novices — and the right things.</p>
                  </div>
                </div>
                <div className="thesis-step-canvas-wrap"><canvas></canvas></div>
              </div>

              <div className="thesis-step-card reveal" data-step="4">
                <div className="thesis-step-top">
                  <div className="thesis-step-num">05</div>
                  <div className="thesis-step-content">
                    <h3>Intelligent Storage</h3>
                    <p>Storing insights with priority-aware indexing so that high-value consolidated knowledge is rapidly retrievable while lower-priority information decays gracefully. The storage layer reflects the importance of what was learned, not just its recency or embedding similarity.</p>
                  </div>
                </div>
                <div className="thesis-step-canvas-wrap"><canvas></canvas></div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== LESS CONTEXT, BETTER DECISIONS ===== */}
        <section className="thesis-prose">
          <div className="thesis-container">
            <div className="thesis-narrow reveal">
              <div className="thesis-prose-label">Less Context, Better Decisions</div>
              <h2>Why does context architecture matter more than larger context windows?</h2>
              <p>The bottleneck is not how much context you can fit. It&apos;s how well that context has been selected and compressed for the decision at hand.</p>
              <p><strong>Expert decision-makers don&apos;t process more information than novices. They process less — and they process the right things.</strong><span className="cite"><span className="cite-num">3</span><span className="cite-tooltip"><span className="cite-source">Sources of Power: How People Make Decisions</span><span className="cite-detail">Gary Klein&apos;s research on naturalistic decision making showed that experts use pattern recognition, not exhaustive analysis. They recognize the situation and act on the first viable option.</span><a className="cite-link" href="https://mitpress.mit.edu/9780262611466/" target="_blank" rel="noopener noreferrer">MIT Press &rarr;</a></span></span></p>
              <p>Research on ecological rationality showed that simple heuristics using minimal cues match or outperform complex statistical models under real-world uncertainty.<span className="cite"><span className="cite-num">4</span><span className="cite-tooltip"><span className="cite-source">Simple Heuristics That Make Us Smart</span><span className="cite-detail">Gigerenzer, Todd &amp; the ABC Research Group (1999) demonstrated that fast-and-frugal heuristics using minimal information can match or exceed the accuracy of complex statistical models in uncertain environments.</span><a className="cite-link" href="https://global.oup.com/academic/product/simple-heuristics-that-make-us-smart-9780195143812" target="_blank" rel="noopener noreferrer">Oxford University Press &rarr;</a></span></span> Fireground commanders used explicit option comparison less than 5% of the time — they recognized the pattern and acted.<span className="cite"><span className="cite-num">5</span><span className="cite-tooltip"><span className="cite-source">Recognition-Primed Decision Model</span><span className="cite-detail">Klein (1989) found that experienced firefighters used recognition-primed decision making in 80%+ of cases, generating a single course of action through pattern matching rather than comparing options.</span><a className="cite-link" href="https://doi.org/10.1016/S0065-2601(08)60315-8" target="_blank" rel="noopener noreferrer">doi.org &rarr;</a></span></span></p>
              <p>The question is not &ldquo;how do we fit more in?&rdquo; It&apos;s &ldquo;how do we build systems that know precisely what to leave out?&rdquo;</p>
            </div>
          </div>
        </section>

        {/* ===== STATS + CONTEXT ARCHITECTURE ===== */}
        <section className="thesis-stats-section">
          <div className="thesis-container">
            <div className="thesis-stats-row reveal">
              <div className="thesis-stat-card">
                <div className="thesis-stat-val">65%</div>
                <div className="thesis-stat-lbl">Enterprise AI failures from context drift<span className="cite"><span className="cite-num">6</span><span className="cite-tooltip"><span className="cite-source">Gartner: AI in the Enterprise</span><span className="cite-detail">Gartner research indicates that the majority of enterprise AI project failures stem from data quality and context issues rather than model capability limitations.</span><a className="cite-link" href="https://www.gartner.com/en/topics/artificial-intelligence" target="_blank" rel="noopener noreferrer">gartner.com &rarr;</a></span></span></div>
              </div>
              <div className="thesis-stat-card">
                <div className="thesis-stat-val">30&ndash;60%</div>
                <div className="thesis-stat-lbl">Effective vs. advertised context window<span className="cite"><span className="cite-num">7</span><span className="cite-tooltip"><span className="cite-source">Effective context utilization research</span><span className="cite-detail">Multiple studies including Liu et al. (2023) and Hsieh et al. (2024) show that effective context utilization is significantly lower than the raw token window size, with models struggling to use 30–60% of available context effectively.</span><a className="cite-link" href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener noreferrer">arxiv.org &rarr;</a></span></span></div>
              </div>
              <div className="thesis-stat-card">
                <div className="thesis-stat-val">20%+</div>
                <div className="thesis-stat-lbl">Accuracy drop in mid-window information<span className="cite"><span className="cite-num">2</span><span className="cite-tooltip"><span className="cite-source">Lost in the Middle — U-shaped curve</span><span className="cite-detail">Liu et al. demonstrated a U-shaped attention curve where information in the middle of the context window sees 20%+ accuracy degradation compared to information at the beginning or end.</span><a className="cite-link" href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener noreferrer">arxiv.org/abs/2307.03172 &rarr;</a></span></span></div>
              </div>
            </div>
            <div className="thesis-narrow reveal">
              <div className="thesis-prose-label">Context Architecture Is Product Strategy</div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: "28px" }}>How you architect context determines your product&apos;s quality, defensibility, and unit economics.</h2>
              <p style={{ fontSize: "17px", lineHeight: 1.85, color: "var(--text-secondary)" }}><dfn id="context-architecture" title="The practice of designing the informational environment that surrounds AI systems">Context architecture</dfn> is the practice of designing the informational environment that surrounds AI systems — shaping what they know, how they retrieve it, and how that knowledge is structured for human decision-making. This is not a plumbing decision — it&apos;s the most consequential product strategy decision in any AI system. Companies like Glean have built multi-billion dollar valuations on context layers, not model capability.<span className="cite"><span className="cite-num">8</span><span className="cite-tooltip"><span className="cite-source">Glean valuation: $4.6B (2024)</span><span className="cite-detail">Glean, an enterprise AI search and knowledge platform built on context architecture, reached a $4.6B valuation in its Series E — demonstrating that context infrastructure is a venture-scale opportunity.</span><a className="cite-link" href="https://www.glean.com" target="_blank" rel="noopener noreferrer">glean.com &rarr;</a></span></span> No formal framework exists for measuring context quality pre-inference, modeling context ROI, or defining cost-per-decision metrics.</p>
              <p style={{ fontSize: "17px", lineHeight: 1.85, color: "var(--text-secondary)", marginTop: "24px" }}><strong style={{ color: "var(--text-primary)" }}>The companies that figure this out will own the next era of AI products.</strong> The ones that don&apos;t will keep swapping models every quarter and wondering why their outputs haven&apos;t improved.</p>
            </div>
          </div>
        </section>

        {/* ===== WHAT I'VE BUILT ===== */}
        <section className="thesis-built-section">
          <div className="thesis-container">
            <div className="thesis-built-header reveal">
              <div className="thesis-prose-label">What I&apos;ve Built</div>
              <h2>Who coined context architecture?</h2>
              <p className="answer-summary">Riche Zamor coined the term &ldquo;context architecture&rdquo; based on two decades of building AI products that turn raw data into decision-ready context. He&apos;s not making this argument from the sidelines.</p>
            </div>
            <div className="thesis-built-grid">
              <div className="thesis-built-card reveal">
                <div className="thesis-built-co" style={{ color: "var(--accent)" }}>Suzy</div>
                <p>Led the transformation from consumer survey platform to Decision Engine — an enterprise product that synthesizes fragmented marketing intelligence into decisions 350+ brands can act on. The platform&apos;s three capabilities map directly to the five-step framework. Shipped in six weeks.</p>
              </div>
              <div className="thesis-built-card reveal">
                <div className="thesis-built-co" style={{ color: "#00c9a0" }}>Grandstage</div>
                <p>Built a context system for market intelligence that fused 10,000+ data sources into synthesized, goal-ranked context. Scaled to 90 B2B companies in 3 months at $0 CAC — because a hierarchical relevance model lifted retention from 50% to 80% by getting the context right.</p>
              </div>
              <div className="thesis-built-card reveal">
                <div className="thesis-built-co" style={{ color: "var(--accent-secondary)" }}>Helm Labs</div>
                <p>Generated $3.25M in pipeline before the product launched by selling the vision of how data about 200 million Americans should be curated, prioritized, and presented to decision-makers. The pipeline was built on context architecture as a value proposition.</p>
              </div>
              <div className="thesis-built-card reveal">
                <div className="thesis-built-co" style={{ color: "#a07cfc" }}>IBM</div>
                <p>Millions in revenue came from personalized context systems — e-nurture streams, onboarding flows, and recommendation engines that answered one question: what does this specific customer need to see, right now, to make a decision?</p>
              </div>
              <div className="thesis-built-card reveal">
                <div className="thesis-built-co" style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Sia</div>
                <p>Right now, I&apos;m building Sia — a personal knowledge system demonstrating the exact five-step architecture. It curates from dozens of sources, synthesizes at ingest time, runs consolidation agents every six hours, prioritizes by goal-awareness, and stores with intelligent indexing. Building it is the proof.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="thesis-cta">
          <div className="thesis-container reveal">
            <div className="thesis-cta-box">
              <div className="thesis-prose-label">Go Deeper</div>
              <h2>Want to <span className="hi">explore</span> this further?</h2>
              <p>I write about context architecture, AI product strategy, and the lessons from building these systems. If you&apos;re working on this problem, I&apos;d like to hear from you.</p>
              <div className="thesis-cta-btns">
                <a href="https://linkedin.com/in/richezamorjr/" className="thesis-btn-p" target="_blank" rel="noopener noreferrer">Follow on LinkedIn <span>&rarr;</span></a>
                <Link href="/contact" className="thesis-btn-s">Get in touch <span>&rarr;</span></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollReveal />
      <ThesisCanvasAnimations />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
