const projects = [
  {
    title: "AI Market Insights System",
    company: "Spade AI (Grandstage Inc.)",
    description:
      "Developed the first AI research engine for GTM teams—think Perplexity AI, purpose-built for B2B marketing data. Led the entire product lifecycle: discovery, vision and strategy, roadmap, prototyping, testing, and team management across UX, data science, and full-stack engineering. Partnered with engineers and data scientists on technical architecture, LLM evaluations, data sourcing, and specifications. Orchestrated go-to-market execution, including content marketing, sales outreach, demos, deal closing, and customer onboarding. Maintained close engagement throughout the customer lifecycle, translating feedback into enhancements and new features.",
    result: "Result: scaled to 90 B2B companies in 3 months with $0 CAC.",
  },
  {
    title: "AI-Powered Data Platform",
    company: "Helm Labs",
    description:
      "Served as Product and GTM executive for an AI-powered data platform and marketing tools for political and public affairs professionals, delivering insights into the likelihood of approximately 200 million Americans supporting key issues. Conducted market research and competitive analysis to uncover customer needs and differentiation opportunities. Defined product strategy, requirements, and a long-term roadmap to integrate five acquired products into a unified enterprise platform. Built and executed GTM strategy across sales, customer experience, and partnerships, while managing two product pods to design and deliver the new platform.",
    result:
      "Results: Generated $3.25M in sales pipeline, increased partner ACV 14x, and closed six-figure pilot projects.",
  },
  {
    title: "Growth Engines",
    company: "IBM Cloud & Watson",
    description:
      "Built personalized digital experiences and applications to drive growth in lead generation, trial conversion, and product adoption. Led end-to-end product development from discovery through launch. Secured seven- and eight-figure investments from the C-suite. Rolled out and enabled growth tools (CDP, lifecycle marketing platform, and product analytics) for marketing teams worldwide. Designed e-nurture and onboarding applications and patterns adopted enterprise-wide.",
    result:
      "Results: Increased trial registrations by 31%, generated eight figures in marketing-qualified pipeline, boosted trial conversion by 30%, and lifted customer spend by 10%.",
  },
  {
    title: "Digital Experience Platform",
    company: "The Well by Northwell Health",
    description:
      "Transformed how one of the largest U.S. healthcare systems engaged patients beyond scheduled visits. Led executives in defining product vision, strategy, and long-term roadmap. Partnered with UX and engineering to shape requirements, prototype editorial content experiences, and deliver the platform as in-house product lead.",
    result:
      "Outcome: Kept thousands of patients connected to Northwell Health through personalized lifestyle content.",
  },
  {
    title: "Digital Experience Platform",
    company: "Johnson & Johnson Consumer Products",
    description:
      "Led the revamp of Johnson & Johnson's digital experience platform, powering 1,000+ consumer product websites. Applied a hypothesis-driven approach, running a strategy sprint with product and engineering leadership to surface key enhancements and platform issues. Directed Dual-Track Scrum sprints to prototype and validate new features, resolve critical challenges, and guide technical requirements. Served as on-site product owner, leading agile development and collaborating closely with J&J teams. Drove stakeholder onboarding through clear communications and training.",
    result:
      "Results: Cut website time-to-market from months to under four weeks, saving millions in operational costs.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="text-2xl md:text-3xl font-light mb-1">{project.title}</h3>
              <p className="text-accent font-medium mb-4">{project.company}</p>
              <p className="text-foreground/80 leading-relaxed mb-3">
                {project.description}
              </p>
              <p className="text-foreground font-medium">{project.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
