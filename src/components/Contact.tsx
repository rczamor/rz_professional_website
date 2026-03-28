import { contactContent } from "@/content/contact";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
            {contactContent.availability.text}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          {contactContent.headline}{" "}
          <span className="text-accent italic">
            {contactContent.highlightedWord}
          </span>
          ?
        </h2>
        <p className="text-muted text-lg leading-relaxed mb-10">
          {contactContent.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {contactContent.ctas.map((cta) =>
            cta.variant === "primary" ? (
              <a
                key={cta.label}
                href={cta.href}
                className="inline-flex items-center px-8 py-3 text-sm font-semibold tracking-wide uppercase bg-accent text-background rounded-lg hover:bg-accent-hover transition-colors"
              >
                {cta.label}
              </a>
            ) : (
              <a
                key={cta.label}
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center px-8 py-3 text-sm font-semibold tracking-wide uppercase border border-card-border text-foreground rounded-lg hover:border-accent hover:text-accent transition-colors"
              >
                {cta.label}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
