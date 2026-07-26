import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import ThesisCanvasAnimations from "@/components/ThesisCanvasAnimations";
import ScrollReveal from "@/components/ScrollReveal";
import "@/styles/thesis.css";
import { aiSystemLayers, thesisSteps, builtCards } from "@/content/thesis";
import { buildHowToSchema, safeJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Data Is Not Context — Riché Zamor",
  description:
    "The Context Architecture Thesis by Riché Zamor: an AI system has four layers — Data, Retrieval, Context, Inference. The five-step process lives at the Context layer, the one most systems skip entirely.",
  openGraph: {
    title: "Data Is Not Context — Riché Zamor",
    description:
      "The Context Architecture Thesis by Riché Zamor: an AI system has four layers — Data, Retrieval, Context, Inference. The five-step process (curate, synthesize, consolidate, prioritize, store) lives at the Context layer that sits between Retrieval and Inference.",
    url: "https://www.richezamor.com/thesis",
    type: "article",
    images: ["https://www.richezamor.com/og/thesis.png"],
    siteName: "Riché Zamor",
  },
  twitter: {
    card: "summary_large_image",
    site: "@richezamor",
    title: "Data Is Not Context — Riché Zamor",
    description:
      "The thesis on why AI systems need a Context layer between Retrieval and Inference — and the five steps that live there.",
    images: ["https://www.richezamor.com/og/thesis.png"],
  },
  alternates: { canonical: "https://www.richezamor.com/thesis" },
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
          text: "Context architecture is the practice of designing the informational environment that surrounds AI systems — shaping what they know, how they retrieve it, and how that knowledge is structured for human decision-making. The term was coined by Riché Zamor.",
        },
      },
      {
        "@type": "Question",
        name: "What are the four layers of an AI system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An AI system has four layers: (1) Data — storage at every time scale, from raw inputs to persistent memory; (2) Retrieval — reach: queries, tool calls, and API hits; (3) Context — where retrieval results become meaning the model can reason with, with its own durable storage; and (4) Inference — generation, where the agent operates as a principal rather than a tool. Most systems route Retrieval straight into Inference and skip the Context layer entirely.",
        },
      },
      {
        "@type": "Question",
        name: "What are the five steps of context architecture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The five steps are: (1) Curation — selectively picking from Data via Retrieval based on session and user intent; (2) Synthesis — extracting insights across sources; (3) Consolidation — finding cross-cutting patterns over time; (4) Prioritization — ranking by goal-awareness for the decision at hand; and (5) Intelligent Storage — storing consolidated insights at the Context layer itself with priority-aware indexing. All five live at the Context layer, between Retrieval and Inference.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Context layer in an AI system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Context layer is the layer of an AI system that sits between Retrieval and Inference, where retrieval results are turned into meaning the model can reason with. It runs the five-step process — curate, synthesize, consolidate, prioritize, store — and holds its own durable storage so Inference reaches consolidated meaning first and only round-trips to raw Data via Retrieval when the Context store is insufficient. Most AI systems skip this layer entirely.",
        },
      },
      {
        "@type": "Question",
        name: "What is memory-as-files?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Memory-as-files is the convergent storage primitive at the Context layer of an AI system — durable, addressable, human-inspectable artifacts (think AGENTS.md, CLAUDE.md, archival memory) that hold synthesized, prioritized, consolidated meaning rather than raw data. Anthropic, Paper Compute, LangChain, Cloudflare, and Letta all landed on this pattern within a single seven-day window in April 2026. Files are inspectable, diffable, governable, and exportable across vendor boundaries. Vectors are none of those things.",
        },
      },
      {
        "@type": "Question",
        name: "What does it mean for agents to be principals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Agents as principals reframes agents from tools-that-consume-context to autonomous decision-makers operating on context. At the Inference layer, the agent is no longer a tool — it is an identity-bearing actor with its own role, authority scope, and audit trail. The architectural question shifts from \"did we synthesize good context?\" to \"did we synthesize context this specific agent will use to decide well, given who it is and what it's allowed to do?\"",
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
          text: "Riché Zamor coined the term 'context architecture' based on two decades of building AI products at companies including Suzy, Grandstage, Helm Labs, and IBM.",
        },
      },
    ],
  };

  const howToJsonLd = buildHowToSchema(thesisSteps);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.richezamor.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "The Context Architecture Thesis",
        item: "https://www.richezamor.com/thesis",
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Data Is Not Context — The Context Architecture Thesis",
    author: {
      "@type": "Person",
      name: "Riché Zamor",
      url: "https://www.richezamor.com",
    },
    publisher: {
      "@type": "Person",
      name: "Riché Zamor",
    },
    url: "https://www.richezamor.com/thesis",
    datePublished: "2026-04-06",
    dateModified: "2026-05-07",
    description:
      "The thesis on why AI systems need a Context layer between Retrieval and Inference — and the five-step process that lives there. Data, Retrieval, Context, Inference: the four-layer AI system stack.",
    keywords: [
      "context architecture",
      "five-step context generation",
      "four-layer AI system stack",
      "data retrieval context inference",
      "context layer",
      "memory-as-files",
      "agents as principals",
      "inference layer",
    ].join(", "),
    about: [
      { "@type": "Thing", name: "Context Architecture" },
      { "@type": "Thing", name: "Four-Layer AI System Stack" },
      { "@type": "Thing", name: "Context Layer" },
      { "@type": "Thing", name: "Memory-as-Files" },
      { "@type": "Thing", name: "Agents as Principals" },
    ],
  };

  return (
    <>
      <Nav activePage="thesis" />
      <main id="main-content">
        {/* ===== HERO ===== */}
        <section className="thesis-hero">
          <div className="thesis-container">
            <h1>Data Is <span className="hi">Not</span> Context.</h1>
            <p className="thesis-hero-sub">An AI system has four layers — Data, Retrieval, Context, Inference. The five-step process lives at the Context layer, the one most systems skip entirely.</p>
            <div className="thesis-hero-meta">
              <span className="thesis-hero-meta-label">
                Last updated · <time dateTime="2026-05-07">May 7, 2026</time>
              </span>
              <span className="thesis-hero-meta-note">
                This thesis is evolving as the market around context rapidly evolves. This is a snapshot of my thinking as of this date.
              </span>
            </div>
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
              <p>The retrieval debate also misses a deeper structural problem. An AI system has <strong>four layers — Data, Retrieval, Context, Inference</strong>. Most teams route Retrieval straight into Inference and skip the Context layer entirely. That&apos;s where the five-step process lives, and that&apos;s the gap.</p>
            </div>
          </div>
        </section>

        {/* ===== THE FOUR LAYERS ===== */}
        <section className="thesis-layers-section" id="layers">
          <div className="thesis-container">
            <div className="thesis-layers-header reveal">
              <div className="thesis-prose-label">The AI System Stack</div>
              <h2>What are the four layers of an AI system?</h2>
              <p className="answer-summary">An AI system has four layers — <strong>Data, Retrieval, Context, Inference</strong>. Data stores. Retrieval reaches. Context generates meaning. Inference decides. The five-step process lives entirely at the Context layer — the one most teams skip when they wire Retrieval straight into Inference.</p>
            </div>
            <div className="thesis-layers-grid">
              {aiSystemLayers.map((layer) => (
                <div
                  key={layer.number}
                  className={`thesis-layer-card reveal${layer.isLocus ? " thesis-layer-card-locus" : ""}`}
                >
                  <div className="thesis-layer-tag">
                    <span>Layer {String(layer.number).padStart(2, "0")}</span>
                    <span className="thesis-layer-role">{layer.role}</span>
                  </div>
                  <h3>{layer.title}</h3>
                  <p>{layer.description}</p>
                  {layer.highlight ? (
                    <span className="thesis-layer-pill">{layer.highlight}</span>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="thesis-layers-takeaway reveal">
              <p>
                <strong>Most AI systems skip the Context layer entirely.</strong> They retrieve and shove — chunks come out of a vector store and go straight into the prompt, with no synthesis, no consolidation, no goal-aware prioritization, no consolidated store to hit first. That&apos;s the entire pipeline. The result: context windows stuffed with unprocessed retrievals, mediocre outputs, and products that feel impressive in a demo but collapse under real-world conditions.
              </p>
            </div>
          </div>
        </section>

        {/* ===== THE FIVE STEPS ===== */}
        <section className="thesis-steps-section" id="steps">
          <div className="thesis-container">
            <div className="thesis-steps-header reveal">
              <div className="thesis-prose-label">The Five Steps · At the Context Layer</div>
              <h2>What are the five steps of context architecture?</h2>
              <p className="answer-summary">All five live at the Context layer — between Retrieval and Inference. Curation reaches into Data via Retrieval based on session and user needs. Synthesis combines what comes back. Consolidation runs as a background loop that compounds meaning over time. Prioritization ranks by goal-awareness for the decision at hand. Intelligent storage holds consolidated meaning at the Context layer itself, so Inference reaches it first.</p>
            </div>
            <div className="thesis-steps-grid">
              {thesisSteps.map((step, i) => (
                <div key={step.number} className="thesis-step-card reveal" data-step={i}>
                  <div className="thesis-step-top">
                    <div className="thesis-step-num">{String(step.number).padStart(2, "0")}</div>
                    <div className="thesis-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                  <div className="thesis-step-canvas-wrap"><canvas></canvas></div>
                </div>
              ))}
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
              <p className="answer-summary">Riché Zamor coined the term &ldquo;context architecture&rdquo; based on two decades of building AI products that turn raw data into decision-ready context. He&apos;s not making this argument from the sidelines.</p>
            </div>
            <div className="thesis-built-grid">
              {builtCards.map((card) => (
                <div key={card.company} className="thesis-built-card reveal">
                  <div
                    className="thesis-built-co"
                    style={
                      card.color === "gradient"
                        ? { background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }
                        : { color: card.color }
                    }
                  >
                    {card.company}
                  </div>
                  <p>{card.description}</p>
                </div>
              ))}
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(howToJsonLd) }}
      />
    </>
  );
}
