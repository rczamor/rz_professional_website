const skillCategories = [
  {
    title: "AI-Powered Products",
    skills: [
      "CRM & Customer Data Platforms",
      "Lifecycle Marketing Tools",
      "Personalized Digital Experiences",
      "Insights & Analytics Systems",
      "AI Research Engines",
    ],
  },
  {
    title: "Growth & GTM",
    skills: [
      "Go-to-Market Strategy",
      "Product-Led Growth",
      "Growth Loops & Experimentation",
      "A/B Testing & CRO",
      "Sales Pipeline Development",
    ],
  },
  {
    title: "Product Leadership",
    skills: [
      "Product Strategy & Roadmap",
      "Dual-Track Scrum",
      "Cross-Functional Team Management",
      "P&L Ownership",
      "Enterprise Product Development",
    ],
  },
  {
    title: "Domains",
    skills: [
      "SaaS & Enterprise Software",
      "Healthcare & Finance",
      "Media & Publishing",
      "Political Technology",
      "Consumer Products",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card-bg/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <div className="w-16 h-1 bg-accent mb-10 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-background border border-card-border rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4 text-accent">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-muted">
                    <span className="text-accent mt-1.5 text-xs">&#9654;</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
