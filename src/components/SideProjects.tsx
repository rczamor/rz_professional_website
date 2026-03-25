export default function SideProjects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
            02 / Laboratory
          </span>
          <span className="h-px flex-1 bg-card-border max-w-16" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Side Projects <span className="text-accent">&amp;</span> Prototypes
        </h2>
        <p className="text-muted text-lg max-w-xl mb-16">
          A curated selection of experiments exploring the intersection of
          context-aware computing, autonomous systems, and high-fidelity user
          experiences.
        </p>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Blocade */}
          <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden">
            <div className="aspect-[16/9] bg-gradient-to-br from-card-border/30 to-background flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl font-bold text-foreground/10 tracking-widest">
                  BLOCADE
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                  Active Prototype
                </span>
                <span className="text-xs font-mono text-muted">
                  ID: BLC-001
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Blocade: Political Fundraising System
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                A fundraising platform designed for local political campaigns,
                leveraging data-driven targeting and community engagement tools.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/rczamor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm font-medium hover:text-accent-hover transition-colors flex items-center gap-1"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <path d="M15 3h6v6" />
                    <path d="M10 14L21 3" />
                  </svg>
                  VIEW PROJECT
                </a>
              </div>
            </div>
          </div>

          {/* Ascend */}
          <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden">
            <div className="aspect-[16/9] bg-gradient-to-tr from-accent/5 to-card-border/20 flex items-center justify-center">
              <div className="w-48 h-32 rounded-lg bg-card-border/30 border border-card-border/50 flex items-center justify-center">
                <span className="text-xs font-mono text-muted">
                  Ascend UI
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                  Operational
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Ascend</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                A career growth system designed to strip away the bloat of modern
                career tools, focusing on linear growth architecture and
                signal-to-noise ratio.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted">v 1.0.0</span>
                <a
                  href="https://github.com/rczamor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-card-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
                >
                  &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Ploppy / AI Tools */}
          <div className="bg-card-bg border border-card-border rounded-xl p-8">
            <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
              Data Analysis
            </span>
            <h3 className="text-xl font-bold mb-2">Ploppy</h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Analyze NYC political contribution data with interactive
              visualizations and pattern recognition.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-background rounded-lg p-4">
                <div className="text-2xl font-bold">12ms</div>
                <div className="text-xs text-muted uppercase tracking-wide">
                  Latency
                </div>
              </div>
              <div className="bg-background rounded-lg p-4">
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-xs text-muted uppercase tracking-wide">
                  Records
                </div>
              </div>
            </div>
          </div>

          {/* AI Prototypes */}
          <div className="bg-card-bg border border-card-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">AI Prototypes</h3>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Live experiments in AI-powered productivity — onboarding
              assistants, HubSpot dashboards, topic trend analyzers, and more.
            </p>
            {/* Terminal-style display */}
            <div className="bg-background rounded-lg p-4 font-mono text-xs text-muted border border-card-border">
              <div className="text-accent">&gt; initializing_prototypes...</div>
              <div>&gt; status: <span className="text-foreground/60">operational</span></div>
              <div>&gt; ai_onboarding: <span className="text-accent">active</span></div>
              <div>&gt; hubspot_dashboard: <span className="text-accent">active</span></div>
              <div>&gt; trend_analyzer: <span className="text-foreground/60">standby</span></div>
              <div className="animate-pulse">_</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
