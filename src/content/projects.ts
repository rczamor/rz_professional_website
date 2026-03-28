export const projectsContent = {
  sectionLabel: "05 / Laboratory",
  headline: "Side Projects",
  headlineAccent: "&",
  headlineSuffix: "Prototypes",
  description:
    "A curated selection of experiments exploring the intersection of context-aware computing, autonomous systems, and high-fidelity user experiences.",
  projects: [
    {
      name: "Blocade",
      subtitle: "Political Fundraising System",
      status: "Active Prototype",
      id: "BLC-001",
      description:
        "A fundraising platform designed for local political campaigns, leveraging data-driven targeting and community engagement tools.",
      linkHref: "https://github.com/rczamor",
      linkLabel: "VIEW PROJECT",
    },
    {
      name: "Ascend",
      subtitle: "Career Growth System",
      status: "Operational",
      version: "v 1.0.0",
      description:
        "A career growth system designed to strip away the bloat of modern career tools, focusing on linear growth architecture and signal-to-noise ratio.",
      linkHref: "https://github.com/rczamor",
      linkLabel: "View Ascend project",
    },
  ],
  ploppy: {
    category: "Data Analysis",
    name: "Ploppy",
    description:
      "Analyze NYC political contribution data with interactive visualizations and pattern recognition.",
    metrics: [
      { value: "12ms", label: "Latency" },
      { value: "1M+", label: "Records" },
    ],
  },
  prototypes: {
    title: "AI Prototypes",
    description:
      "Live experiments in AI-powered productivity \u2014 onboarding assistants, HubSpot dashboards, topic trend analyzers, and more.",
    terminalLines: [
      { prefix: "> ", text: "initializing_prototypes...", suffix: "", color: "accent" },
      { prefix: "> ", text: "status: ", suffix: "operational", color: "muted" },
      { prefix: "> ", text: "ai_onboarding: ", suffix: "active", color: "accent" },
      { prefix: "> ", text: "hubspot_dashboard: ", suffix: "active", color: "accent" },
      { prefix: "> ", text: "trend_analyzer: ", suffix: "standby", color: "muted" },
    ],
  },
} as const;
