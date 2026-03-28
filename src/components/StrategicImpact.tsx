import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { impactContent } from "@/content/impact";

const conceptIcons: Record<string, React.ReactNode> = {
  layers: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  pulse: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
};

export default function StrategicImpact() {
  const { suzyCard, metricCard, grandstageCard, conceptCards } = impactContent;

  return (
    <section id="impact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-4">
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
            {impactContent.sectionLabel}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          {impactContent.headline}
        </h2>

        {/* Bento grid */}
        <AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Suzy - large card */}
            <div className="md:col-span-2 bg-card-bg border border-card-border rounded-xl p-8 card-hover">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{suzyCard.title}</h3>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
              </div>
              <p className="text-accent text-sm font-semibold mb-3">
                {suzyCard.subtitle}
              </p>
              <p className="text-muted leading-relaxed mb-6">
                {suzyCard.description}
              </p>
              <div className="flex gap-3">
                {suzyCard.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium tracking-wide uppercase border border-card-border rounded-full text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Success metric card */}
            <div className="bg-gradient-to-br from-pink/20 to-pink/5 border border-pink/20 rounded-xl p-8 flex flex-col justify-center card-hover">
              <span className="text-xs tracking-[0.2em] uppercase text-pink/80 mb-2">
                {metricCard.label}
              </span>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {metricCard.value}
              </div>
              <div className="text-xs tracking-[0.15em] uppercase text-muted">
                {metricCard.sublabel}
              </div>
            </div>

            {/* Grandstage card */}
            <div className="bg-card-bg border border-card-border rounded-xl p-8 card-hover">
              <h3 className="text-xl font-bold mb-2">
                {grandstageCard.title}
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                {grandstageCard.description}
              </p>
              <a
                href={grandstageCard.linkHref}
                className="text-accent text-sm font-medium hover:text-accent-hover transition-colors"
              >
                {grandstageCard.linkLabel} &rarr;
              </a>
            </div>

            {/* Concept cards */}
            {conceptCards.map((card) => (
              <div
                key={card.title}
                className="bg-card-bg border border-card-border rounded-xl p-8 flex flex-col items-start card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  {conceptIcons[card.iconKey]}
                </div>
                <h4 className="text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                  {card.title}
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
