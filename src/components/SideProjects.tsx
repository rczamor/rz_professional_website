const sideProjects = [
  { title: "Blocade", description: "Political Fundraising System for Local Campaigns" },
  { title: "Ascend", description: "Career Growth System" },
  { title: "Ploppy", description: "Analyze NYC Political Contribution Data" },
  { title: "PROTOTYPE", description: "AI Onboarding Assistant" },
  { title: "PROTOTYPE", description: "Hubspot AI Dashboard" },
  { title: "AI Topic Trend Analyzer", description: null },
  { title: "Recipe Remix App", description: null },
];

export default function SideProjects() {
  return (
    <section id="side-projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-2">
          My side projects &amp; prototypes:
        </h2>

        <ul className="mt-10 space-y-3 text-center">
          {sideProjects.map((project, index) => (
            <li key={index} className="text-foreground/80 text-lg">
              <span className="font-medium text-foreground">{project.title}</span>
              {project.description && (
                <span> - {project.description}</span>
              )}
            </li>
          ))}
          <li className="text-lg">
            <a
              href="https://github.com/rczamor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors font-medium"
            >
              My Github &rarr;
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
