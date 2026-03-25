const sideProjects = [
  {
    title: "Blocade",
    description:
      "A political fundraising system designed for local campaigns. Empowers grassroots political candidates with modern fundraising tools and donor management.",
    tags: ["Political Tech", "Fundraising", "SaaS"],
  },
  {
    title: "Verbind",
    description:
      "A free, open source, modular, customizable software platform for publishing to social media platforms and managing online communities.",
    tags: ["Open Source", "Social Media", "Community"],
  },
  {
    title: "Grandstage",
    description:
      "A marketplace enabling creators to sell their premium content. Built to empower independent creators with tools to monetize their work directly.",
    tags: ["Marketplace", "Creator Economy", "E-commerce"],
  },
];

export default function SideProjects() {
  return (
    <section id="side-projects" className="py-24 px-6 bg-card-bg/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Side Projects</h2>
        <div className="w-16 h-1 bg-accent mb-10 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sideProjects.map((project) => (
            <div
              key={project.title}
              className="bg-background border border-card-border rounded-xl p-6 hover:border-accent/30 transition-colors"
            >
              <h3 className="text-lg font-bold mb-3">{project.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full bg-accent/10 text-accent"
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
