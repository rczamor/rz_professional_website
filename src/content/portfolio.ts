export const portfolioContent = {
  sectionLabel: "04 / Work History",
  headline: "The Neural",
  headlineGradient: "Blueprint.",
  description:
    "Architecting intelligence layers for global leaders. Specializing in RAG pipelines, multi-modal systems, and precision-engineered computational frameworks.",
  workHistory: [
    {
      company: "Suzy",
      role: "VP of Product",
      label: "Enterprise AI Integration",
      tags: ["Decision Intelligence", "RAG"],
      description:
        "Rewired a legacy survey company into an AI-native Decision Intelligence Platform in six weeks. Architected AI-native operating model with human + AI-agent specs, prototype-first development, and daily North Star cycles.",
      stats: [
        { value: "6 Weeks", label: "Time to Market" },
        { value: "+65%", label: "Insight Speed" },
      ],
      architecture: ["Agentic Workflows", "Vector Indexing"],
    },
    {
      company: "Grandstage",
      role: "Co-Founder & Head of Product",
      label: "AI Research Engine",
      tags: ["RAG", "Vector Search"],
      description:
        "Shipped three AI products including a market-intelligence answer engine\u2014think Perplexity AI, purpose-built for B2B marketing data. Led entire product lifecycle from discovery through GTM execution.",
      stats: [
        { value: "300%", label: "Growth" },
        { value: "$0", label: "CAC" },
      ],
      architecture: ["RAG Pipeline", "Python / AWS"],
    },
  ],
  helmLabs: {
    company: "Helm Labs",
    role: "General Manager",
    label: "AI Data Platform",
    tags: ["Data Platform", "GTM"],
    description:
      "Led GTM and product for an AI data platform. Built $3.25M pipeline at 14\u00D7 ACV. Scaled enterprise sales motion from 0 to repeatable.",
    stats: [
      { value: "$3.25M", label: "Pipeline" },
      { value: "14\u00D7", label: "ACV Multiple" },
    ],
    architecture: ["Data Infra", "Enterprise GTM"],
  },
  scalabilityMetric: {
    value: "300%",
    label: "Infrastructure Growth",
  },
  ibmCard: {
    company: "IBM",
    role: "Digital Product & Growth Leader",
    description:
      "Built personalized digital experiences driving growth in lead generation, trial conversion, and product adoption. Secured seven- and eight-figure investments from the C-suite. Rolled out growth tools for marketing teams worldwide.",
    tags: ["Cloud & Watson", "Growth Engines", "Lifecycle Ops"],
  },
  technicalCore: [
    {
      iconKey: "layers" as const,
      title: "RAG Pipelines",
      description:
        "Advanced vector retrieval & context window optimization.",
    },
    {
      iconKey: "grid" as const,
      title: "Context Layers",
      description:
        "Persistent memory architectures for AI agent systems.",
    },
    {
      iconKey: "hexagon" as const,
      title: "Decision Intel",
      description:
        "AI-native platforms for insight synthesis and action.",
    },
    {
      iconKey: "monitor" as const,
      title: "LLM Ops",
      description:
        "Automated testing & lifecycle management for agents.",
    },
  ],
} as const;
