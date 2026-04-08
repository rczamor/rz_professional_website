import type { ThesisStep } from "./types";

export const thesisSteps: ThesisStep[] = [
  {
    number: 1,
    title: "Curation",
    description:
      "Not everything is worth processing. Intelligent filtering at the intake level determines whether downstream steps operate on signal or noise. What sources matter? What\u2019s fresh? What\u2019s relevant to the goals of this system? Curation is the decision about what enters the pipeline at all.",
  },
  {
    number: 2,
    title: "Synthesis",
    description:
      "The active processing step \u2014 classifying inputs, extracting insights, combining information across sources, and producing understanding that no single document contained. The difference between storing an article and understanding what it means in the context of everything else the system knows.",
  },
  {
    number: 3,
    title: "Consolidation",
    description:
      "The periodic, background process of replaying accumulated knowledge to find cross-cutting patterns, merge redundant information, prune stale facts, and extract higher-order insights. This is what the brain does during sleep. It\u2019s what makes an intelligence system compound over time rather than just accumulate.",
  },
  {
    number: 4,
    title: "Prioritization",
    description:
      "Ranking information by goal-awareness. What does the system need to decide? What context is most relevant to that specific decision? Compression without goal-awareness is just making data smaller. Prioritization makes it actionable. Expert decision-makers process less information than novices \u2014 and the right things.",
  },
  {
    number: 5,
    title: "Intelligent Storage",
    description:
      "Storing insights with priority-aware indexing so that high-value consolidated knowledge is rapidly retrievable while lower-priority information decays gracefully. The storage layer reflects the importance of what was learned, not just its recency or embedding similarity.",
  },
];

export const builtCards = [
  {
    company: "Suzy",
    color: "var(--accent)",
    description:
      "Led the transformation from consumer survey platform to Decision Engine \u2014 an enterprise product that synthesizes fragmented marketing intelligence into decisions 350+ brands can act on. The platform\u2019s three capabilities map directly to the five-step framework. Shipped in six weeks.",
  },
  {
    company: "Grandstage",
    color: "#00c9a0",
    description:
      "Built a context system for market intelligence that fused 10,000+ data sources into synthesized, goal-ranked context. Scaled to 90 B2B companies in 3 months at $0 CAC \u2014 because a hierarchical relevance model lifted retention from 50% to 80% by getting the context right.",
  },
  {
    company: "Helm Labs",
    color: "var(--accent-secondary)",
    description:
      "Generated $3.25M in pipeline before the product launched by selling the vision of how data about 200 million Americans should be curated, prioritized, and presented to decision-makers. The pipeline was built on context architecture as a value proposition.",
  },
  {
    company: "IBM",
    color: "#a07cfc",
    description:
      "Millions in revenue came from personalized context systems \u2014 e-nurture streams, onboarding flows, and recommendation engines that answered one question: what does this specific customer need to see, right now, to make a decision?",
  },
  {
    company: "Sia",
    color: "gradient",
    description:
      "Right now, I\u2019m building Sia \u2014 a personal knowledge system demonstrating the exact five-step architecture. It curates from dozens of sources, synthesizes at ingest time, runs consolidation agents every six hours, prioritizes by goal-awareness, and stores with intelligent indexing. Building it is the proof.",
  },
];
