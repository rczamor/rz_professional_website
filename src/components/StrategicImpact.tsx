export default function StrategicImpact() {
  return (
    <section id="impact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-4">
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
            02 / Strategic Impact
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Ecosystem Milestones
        </h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Suzy - large card */}
          <div className="md:col-span-2 bg-card-bg border border-card-border rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">SUZY</h3>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
            </div>
            <p className="text-accent text-sm font-semibold mb-3">
              Intelligence Infrastructure Expansion
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Led the product strategy for real-time consumer insights, integrating
              generative AI to synthesize context across millions of data points,
              reducing insight-to-action time by 65%.
            </p>
            <div className="flex gap-3">
              <span className="px-3 py-1 text-xs font-medium tracking-wide uppercase border border-card-border rounded-full text-muted">
                Enterprise AI
              </span>
              <span className="px-3 py-1 text-xs font-medium tracking-wide uppercase border border-card-border rounded-full text-muted">
                Growth Strategy
              </span>
            </div>
          </div>

          {/* Success metric card */}
          <div className="bg-gradient-to-br from-pink/20 to-pink/5 border border-pink/20 rounded-xl p-8 flex flex-col justify-center">
            <span className="text-xs tracking-[0.2em] uppercase text-pink/80 mb-2">
              Success Quotient
            </span>
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              $3.25M+
            </div>
            <div className="text-xs tracking-[0.15em] uppercase text-muted">
              Pipeline Generated
            </div>
          </div>

          {/* Grandstage card */}
          <div className="bg-card-bg border border-card-border rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Grandstage</h3>
            <p className="text-muted leading-relaxed mb-4">
              Co-founded and shipped three AI products including a market-intelligence
              answer engine with proprietary RAG + vector search.
            </p>
            <a href="#portfolio" className="text-accent text-sm font-medium hover:text-accent-hover transition-colors">
              VIEW CASE STUDY &rarr;
            </a>
          </div>

          {/* Contextual Awareness card */}
          <div className="bg-card-bg border border-card-border rounded-xl p-8 flex flex-col items-start">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-semibold mb-2">
              Context Layers
            </h4>
            <p className="text-muted text-sm leading-relaxed">
              Building persistent memory architectures that bridge the gap between
              raw AI capability and lasting user value.
            </p>
          </div>

          {/* Decision Intelligence card */}
          <div className="bg-card-bg border border-card-border rounded-xl p-8 flex flex-col items-start">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-semibold mb-2">
              Decision Intelligence
            </h4>
            <p className="text-muted text-sm leading-relaxed">
              Developing systems that understand user intent through historical
              continuity and semantic mapping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
