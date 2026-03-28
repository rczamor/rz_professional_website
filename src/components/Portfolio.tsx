import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { portfolioContent } from "@/content/portfolio";

const techIcons: Record<string, React.ReactNode> = {
  layers: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  grid: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
      <circle cx="5" cy="6" r="2" /><circle cx="12" cy="6" r="2" /><circle cx="19" cy="6" r="2" />
      <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
      <circle cx="5" cy="18" r="2" /><circle cx="12" cy="18" r="2" /><circle cx="19" cy="18" r="2" />
    </svg>
  ),
  hexagon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    </svg>
  ),
  monitor: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
};

export default function Portfolio() {
  const { workHistory, helmLabs, scalabilityMetric, ibmCard, technicalCore } =
    portfolioContent;

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
            {portfolioContent.sectionLabel}
          </span>
          <span className="h-px flex-1 bg-card-border max-w-16" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {portfolioContent.headline}{" "}
          <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
            {portfolioContent.headlineGradient}
          </span>
        </h2>
        <p className="text-muted text-lg max-w-xl mb-16">
          {portfolioContent.description}
        </p>

        {/* Bento grid */}
        <AnimateOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            {/* Suzy card */}
            <div className="lg:col-span-2 bg-card-bg border border-card-border rounded-xl p-8 card-hover">
              <div className="flex items-center justify-between mb-4">
                <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
                  {workHistory[0].label}
                </span>
                <div className="flex gap-2">
                  {workHistory[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">
                {workHistory[0].company}
              </h3>
              <p className="text-muted leading-relaxed mb-6 max-w-lg">
                {workHistory[0].description}
              </p>
              <div className="flex gap-12 mb-4">
                {workHistory[0].stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl md:text-3xl font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="text-xs tracking-[0.1em] uppercase text-muted mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
                <div>
                  <div className="text-xs tracking-[0.1em] uppercase text-muted mb-1">
                    Architecture
                  </div>
                  {workHistory[0].architecture.map((arch) => (
                    <div
                      key={arch}
                      className="text-sm font-mono text-foreground/80"
                    >
                      {arch}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scalability metric */}
            <div className="bg-card-bg border border-card-border rounded-xl p-8 flex flex-col justify-between card-hover">
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted mb-4">
                  <path d="M23 6l-9.5 9.5-5-5L1 18" />
                  <path d="M17 6h6v6" />
                </svg>
                <div className="text-xs tracking-[0.2em] uppercase text-muted mb-2">
                  System Scalability
                </div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold">
                  {scalabilityMetric.value}
                </div>
                <div className="text-xs tracking-[0.15em] uppercase text-muted mt-1">
                  {scalabilityMetric.label}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16">
            {/* Grandstage card */}
            <div className="bg-card-bg border border-card-border rounded-xl p-8 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <rect x="2" y="7" width="20" height="15" rx="2" />
                    <path d="M16 2l-4 5-4-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {workHistory[1].company}
                  </h3>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted">
                    {workHistory[1].role}
                  </p>
                </div>
              </div>
              <blockquote className="text-muted italic text-sm leading-relaxed border-l-2 border-card-border pl-4 mb-6">
                &ldquo;Shipped a proprietary RAG + vector-search answer engine
                that delivered $0 CAC and 300% growth — think Perplexity AI for
                B2B marketing data.&rdquo;
              </blockquote>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs tracking-[0.1em] uppercase text-accent mb-1">
                    Stack Focus
                  </div>
                  <div className="text-sm font-medium">
                    {workHistory[1].architecture.join(" / ")}
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.1em] uppercase text-accent mb-1">
                    Growth
                  </div>
                  <div className="text-sm font-medium">
                    90 B2B clients in 3 months
                  </div>
                </div>
              </div>
            </div>

            {/* Helm Labs card */}
            <div className="bg-card-bg border border-card-border rounded-xl p-8 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{helmLabs.company}</h3>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted">
                    {helmLabs.role}
                  </p>
                </div>
              </div>
              <p className="text-muted leading-relaxed mb-6 text-sm">
                {helmLabs.description}
              </p>
              <div className="flex gap-8 mb-4">
                {helmLabs.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="text-xs tracking-[0.1em] uppercase text-muted mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {helmLabs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium border border-accent/30 text-accent rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* IBM card */}
            <div className="bg-card-bg border border-card-border rounded-xl p-8 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-card-border flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M9 9h6v6H9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{ibmCard.company}</h3>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted">
                    {ibmCard.role}
                  </p>
                </div>
              </div>
              <p className="text-muted leading-relaxed mb-6 text-sm">
                {ibmCard.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {ibmCard.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium border border-accent/30 text-accent rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Technical Core */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-2xl font-bold">Technical Core</h3>
              <p className="text-muted text-sm">
                Proprietary methodology &amp; stack expertise
              </p>
            </div>
          </div>
        </div>
        <AnimateOnScroll delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {technicalCore.map((item) => (
              <div
                key={item.title}
                className="bg-card-bg border border-card-border rounded-xl p-6 card-hover"
              >
                <div className="mb-4">{techIcons[item.iconKey]}</div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-2">
                  {item.title}
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
