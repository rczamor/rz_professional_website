const skillCategories = [
  {
    title: "Strategy",
    skills: [
      "Customer & Market Research",
      "Product Strategy",
      "Growth Strategy",
    ],
  },
  {
    title: "Design",
    skills: [
      "User Experience",
      "Prototyping & Experimentation",
      "User Testing",
    ],
  },
  {
    title: "Execution",
    skills: [
      "Product Management",
      "Product Launch",
      "Optimization & Growth",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-2">
          What I Can Help You With
        </h2>
        <p className="text-xl md:text-2xl font-medium text-center mb-2">
          Product, End-to-End.
        </p>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          From ideation through build and launch, I can work with you on all aspects of
          bringing your SaaS product or internal tools to market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-muted">
                    <span className="text-accent mt-1.5 text-xs">&#10022;</span>
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
