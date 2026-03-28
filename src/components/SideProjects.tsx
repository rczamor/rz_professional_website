import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { projectsContent } from "@/content/projects";

export default function SideProjects() {
  const { projects, ploppy, prototypes } = projectsContent;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
            {projectsContent.sectionLabel}
          </span>
          <span className="h-px flex-1 bg-card-border max-w-16" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {projectsContent.headline}{" "}
          <span className="text-accent">&amp;</span> {projectsContent.headlineSuffix}
        </h2>
        <p className="text-muted text-lg max-w-xl mb-16">
          {projectsContent.description}
        </p>

        {/* Project cards grid */}
        <AnimateOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            {/* Blocade */}
            <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden card-hover">
              <div className="aspect-[16/9] bg-gradient-to-br from-card-border/30 to-background flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl font-bold text-foreground/10 tracking-widest">
                    {projects[0].name.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                    {projects[0].status}
                  </span>
                  {projects[0].id && (
                    <span className="text-xs font-mono text-muted">
                      ID: {projects[0].id}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {projects[0].name}: {projects[0].subtitle}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {projects[0].description}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={projects[0].linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm font-medium hover:text-accent-hover transition-colors flex items-center gap-1"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <path d="M15 3h6v6" />
                      <path d="M10 14L21 3" />
                    </svg>
                    {projects[0].linkLabel}
                  </a>
                </div>
              </div>
            </div>

            {/* Ascend */}
            <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden card-hover">
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
                    {projects[1].status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{projects[1].name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {projects[1].description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted">
                    {projects[1].version}
                  </span>
                  <a
                    href={projects[1].linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-card-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
                    aria-label={projects[1].linkLabel}
                  >
                    &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Ploppy */}
            <div className="bg-card-bg border border-card-border rounded-xl p-8 card-hover">
              <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
                {ploppy.category}
              </span>
              <h3 className="text-xl font-bold mb-2">{ploppy.name}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {ploppy.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {ploppy.metrics.map((metric) => (
                  <div key={metric.label} className="bg-background rounded-lg p-4">
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-xs text-muted uppercase tracking-wide">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Prototypes */}
            <div className="bg-card-bg border border-card-border rounded-xl p-8 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">{prototypes.title}</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {prototypes.description}
              </p>
              {/* Terminal-style display */}
              <div className="bg-background rounded-lg p-4 font-mono text-xs text-muted border border-card-border">
                {prototypes.terminalLines.map((line, i) => (
                  <div key={i}>
                    <span className={line.color === "accent" ? "text-accent" : ""}>
                      {line.prefix}{line.text}
                    </span>
                    {line.suffix && (
                      <span className={line.color === "accent" ? "text-accent" : "text-foreground/60"}>
                        {line.suffix}
                      </span>
                    )}
                  </div>
                ))}
                <div className="animate-pulse">_</div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
