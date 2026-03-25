export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-16 h-1 bg-accent mb-10 rounded-full" />

        <div className="space-y-6 text-muted leading-relaxed text-lg">
          <p>
            I&apos;m a product and growth leader with 16+ years of experience building
            and scaling ML/AI-powered customer experience (CX) platforms,
            go-to-market (GTM) systems, growth engines, and productivity tools for
            sales, marketing, and customer success teams across technology, finance,
            healthcare, media, and CPG.
          </p>
          <p>
            As a product leader, I&apos;ve managed teams from 4 to 40 spanning every
            product and engineering function, as well as multimillion-dollar budgets
            and P&amp;Ls. I lead product end-to-end—and I can sell them, too. My
            strategies are always anchored in generating revenue or saving millions
            for the organization.
          </p>
          <p>
            My growth superpower is scaling adoption and retention by leveraging
            growth loops, experimentation, A/B testing, personalization, and
            CRO—often doubling key metrics like acquisition, onboarding, or
            retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { metric: "16+", label: "Years of Experience" },
            { metric: "40+", label: "Team Members Managed" },
            { metric: "1,000+", label: "Websites Powered" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-card-bg border border-card-border rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-accent mb-1">
                {item.metric}
              </div>
              <div className="text-sm text-muted">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
