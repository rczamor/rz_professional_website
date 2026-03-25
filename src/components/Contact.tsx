export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Ready to architect the future of{" "}
          <span className="text-accent italic">intelligent products</span>?
        </h2>
        <p className="text-muted text-lg leading-relaxed mb-10">
          Currently accepting select advisory roles and speaking engagements
          focused on the intersection of Product Management and the AI stack.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@richezamor.com"
            className="inline-flex items-center px-8 py-3 text-sm font-semibold tracking-wide uppercase bg-accent text-background rounded-lg hover:bg-accent-hover transition-colors"
          >
            Initiate Contact
          </a>
          <a
            href="https://www.linkedin.com/in/richezamorjr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 text-sm font-semibold tracking-wide uppercase border border-card-border text-foreground rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
