export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left content */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
                01 / System Architecture
              </span>
              <span className="h-px flex-1 bg-card-border" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
              VP Product | I build the{" "}
              <span className="text-accent">context layer</span> that makes AI
              actually remember.
            </h1>

            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
              Engineering cognitive continuity for the next generation of
              intelligent systems. Transforming raw data into persistent memory
              architectures that scale.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <div className="text-3xl md:text-4xl font-bold">10+</div>
                <div className="text-xs text-muted tracking-[0.15em] uppercase mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">200+</div>
                <div className="text-xs text-muted tracking-[0.15em] uppercase mt-1">
                  Products Launched
                </div>
              </div>
            </div>
          </div>

          {/* Right side - status card */}
          <div className="hidden lg:block">
            <div className="bg-card-bg border border-card-border rounded-xl p-1 overflow-hidden">
              <div className="aspect-[4/5] bg-gradient-to-br from-card-border to-background rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-card-border/50 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="text-xs tracking-[0.2em] uppercase text-muted mb-1">
                    Status
                  </div>
                  <div className="text-sm text-foreground/80">
                    Currently building AI-native decision intelligence at scale.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
