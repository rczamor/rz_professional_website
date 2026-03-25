const projects = [
  {
    title: "AI Research Engine for GTM Teams",
    company: "Spade AI (Grandstage)",
    role: "Co-Founder, Head of Product & Growth",
    description:
      "Developed the first AI research engine for GTM teams—think Perplexity AI, purpose-built for B2B marketing data. Led the entire product lifecycle including discovery, vision and strategy, roadmap, prototyping, testing, and team management across UX, data science, and full-stack engineering.",
    results: [
      "Scaled to 90 B2B companies in 3 months",
      "$0 customer acquisition cost",
      "End-to-end product lifecycle ownership",
    ],
    tags: ["AI/ML", "B2B SaaS", "Product Strategy", "Growth"],
  },
  {
    title: "AI-Powered Political Data Platform",
    company: "Confidential",
    role: "Product & GTM Executive",
    description:
      "Served as Product and GTM executive for an AI-powered data platform and marketing tools for political and public affairs professionals. Delivered insights into the likelihood of approximately 200 million Americans supporting key issues. Defined product strategy and a long-term roadmap to integrate five acquired products into a unified enterprise platform.",
    results: [
      "$3.25M in sales pipeline generated",
      "14x increase in partner ACV",
      "Six-figure pilot projects closed",
    ],
    tags: ["AI/ML", "Political Tech", "Enterprise", "GTM Strategy"],
  },
  {
    title: "Digital Experience Platform",
    company: "Johnson & Johnson",
    role: "Product Lead",
    description:
      "Led the revamp of Johnson & Johnson's digital experience platform, powering 1,000+ consumer product websites. Applied a hypothesis-driven approach, ran strategy sprints with product and engineering leadership, directed Dual-Track Scrum sprints to prototype and validate new features, and served as on-site product owner.",
    results: [
      "Powered 1,000+ consumer product websites",
      "Cut time-to-market from months to <4 weeks",
      "Saved millions in operational costs",
    ],
    tags: ["Enterprise", "Digital Experience", "CPG", "Scrum"],
  },
  {
    title: "Enterprise CX Tools",
    company: "Multiple Clients",
    role: "Product Leader",
    description:
      "Shipped CX tools enabling customer service in digital and social channels for Bank of America, Cigna Healthcare, and Reddit. Delivered enterprise digital experience platforms powering news delivery to millions for PBS and Al Jazeera.",
    results: [
      "Cut customer response times",
      "Increased satisfaction scores",
      "Delivered news to millions of users",
    ],
    tags: ["CX", "Finance", "Healthcare", "Media"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
        <div className="w-16 h-1 bg-accent mb-10 rounded-full" />

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card-bg border border-card-border rounded-xl p-8 hover:border-accent/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-accent text-sm font-medium">
                    {project.company} · {project.role}
                  </p>
                </div>
              </div>

              <p className="text-muted leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70 mb-3">
                  Key Results
                </h4>
                <ul className="space-y-1.5">
                  {project.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="text-accent mt-0.5">&#10003;</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
