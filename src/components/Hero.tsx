export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Diagonal grid background pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #999 1px, transparent 1px), linear-gradient(-45deg, #999 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light leading-tight tracking-tight mb-4">
          Hi, I&apos;m Rich&eacute;!
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground/80 mb-6">
          VP of Product
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 mb-4">
          Building AI-Native Data &amp; Intelligence Platforms
        </h3>
        <h4 className="text-lg sm:text-xl md:text-2xl font-light text-foreground/70 mb-10">
          AI Context Layers Architect
        </h4>

        <div className="max-w-3xl mx-auto text-left space-y-4 text-foreground/80 text-base md:text-lg leading-relaxed mb-12">
          <p>
            I turn raw AI models into reliable, context-rich intelligence and decision engines
            for product and GTM teams.
          </p>
          <p>
            At Suzy I rewired a legacy survey company into an AI-native Decision
            Intelligence Platform in six weeks. Earlier I co-founded Grandstage and shipped
            a proprietary RAG + vector-search answer engine that delivered $0 CAC and
            300% growth.
          </p>
          <p>
            Models get smarter monthly. Context Layers = the new moat.
          </p>
        </div>

        {/* Inline navigation links */}
        <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 mb-8 text-sm font-semibold tracking-widest uppercase">
          <a href="#about" className="text-accent hover:text-accent-hover transition-colors">
            More About Me
          </a>
          <span className="text-muted">|</span>
          <a href="#skills" className="text-accent hover:text-accent-hover transition-colors">
            My Skills
          </a>
          <span className="text-muted">|</span>
          <a href="#portfolio" className="text-accent hover:text-accent-hover transition-colors">
            Portfolio
          </a>
          <span className="text-muted">|</span>
          <a href="#side-projects" className="text-accent hover:text-accent-hover transition-colors">
            Side Projects
          </a>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/80 transition-colors text-base"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}
