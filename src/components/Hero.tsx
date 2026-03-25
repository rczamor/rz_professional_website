export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
          Product &amp; Growth Leader
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          I Build Intelligent GTM &amp; CX Platforms.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          I&apos;m a seasoned product leader who helps build AI-powered GTM / CX / Growth
          systems and platforms to empower marketing, sales, and customer success
          teams to grow product adoption, retention revenue and lifetime value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-card-border text-foreground font-medium hover:bg-card-bg transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Client logos */}
        <div className="mt-20">
          <p className="text-xs text-muted uppercase tracking-widest mb-6">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-muted/60">
            {[
              "Johnson & Johnson",
              "Bank of America",
              "Cigna Healthcare",
              "Reddit",
              "IBM",
              "PBS",
              "Al Jazeera",
              "Northwell Health",
            ].map((name) => (
              <span key={name} className="text-sm font-medium whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
