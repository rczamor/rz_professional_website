import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { philosophyContent } from "@/content/philosophy";

export default function Philosophy() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div>
            <div className="mb-4">
              <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
                {philosophyContent.sectionLabel}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              {philosophyContent.headline}{" "}
              <span className="text-muted">
                {philosophyContent.headlineMuted}
              </span>
            </h2>

            <div className="space-y-5 mb-8">
              {philosophyContent.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-accent"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-muted leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>

            <a
              href={philosophyContent.ctaHref}
              className="inline-flex items-center px-6 py-3 text-sm font-medium bg-foreground text-background rounded-lg hover:bg-foreground/80 transition-colors"
            >
              {philosophyContent.ctaLabel} &rarr;
            </a>
          </div>

          {/* Right side - visual cards */}
          <AnimateOnScroll>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-card-bg border border-card-border rounded-xl overflow-hidden card-hover">
                <div className="aspect-[16/9] bg-gradient-to-br from-card-border/50 to-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-accent"
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                      </svg>
                    </div>
                    <span className="text-xs tracking-[0.15em] uppercase text-muted">
                      {philosophyContent.visualCards.persistentStateLabel}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 flex flex-col justify-center card-hover">
                <div className="text-accent text-xs tracking-[0.2em] uppercase mb-1">
                  {philosophyContent.visualCards.persistentStateLabel}
                </div>
                <div className="text-foreground text-sm">
                  {philosophyContent.visualCards.memoryDescription}
                </div>
              </div>
              <div className="bg-card-bg border border-card-border rounded-xl p-6 flex flex-col justify-center items-center text-center card-hover">
                <div className="text-3xl font-bold text-accent mb-1">
                  {philosophyContent.visualCards.metricValue}
                </div>
                <div className="text-xs tracking-[0.15em] uppercase text-muted">
                  {philosophyContent.visualCards.metricLabel}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
