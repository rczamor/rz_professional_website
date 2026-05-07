import type { ContextLayer, ThesisStep } from "./types";

export const aiSystemLayers: ContextLayer[] = [
  {
    number: 1,
    title: "Data",
    role: "Stores",
    description:
      "Storage at every time scale — raw inputs, telemetry, archives, and persistent memory alike. The substrate the system reaches into.",
  },
  {
    number: 2,
    title: "Retrieval",
    role: "Reaches",
    description:
      "The reach layer. Queries, tool calls, API hits, vector lookups — how the system gets to the Data when it needs it. Optimizing retrieval alone doesn’t produce meaning; it just delivers raw chunks faster.",
  },
  {
    number: 3,
    title: "Context",
    role: "Generates meaning",
    description:
      "Where retrieval results become meaning the model can reason with. The full five-step process — curate, synthesize, consolidate, prioritize, store — lives here, with its own durable storage. The convergent primitive is memory-as-files: durable, addressable, human-inspectable artifacts that are diffable, governable, and exportable across vendor boundaries.",
    highlight: "All five steps live here",
    isLocus: true,
  },
  {
    number: 4,
    title: "Inference",
    role: "Decides",
    description:
      "Generation. Where the agent stops being a tool and becomes a principal — an identity-bearing actor with its own role, authority scope, and audit trail. The architectural question shifts from “did we synthesize good context?” to “did we synthesize context this specific agent will use to decide well, given who it is and what it’s allowed to do?”",
    highlight: "Agents as principals",
  },
];

export const thesisSteps: ThesisStep[] = [
  {
    number: 1,
    title: "Curation",
    description:
      "Selectively picking from the Data layer based on assumed session and user needs. Context-layer work that reaches into Data via Retrieval. Intent-driven selection, not passive intake filtering — the system decides what to pull, in what form, and how fresh it must be.",
  },
  {
    number: 2,
    title: "Synthesis",
    description:
      "Classifying inputs, extracting insights, combining information across sources, and producing understanding that no single document contained. The active processing step that turns raw retrieval results into meaning the model can reason with.",
  },
  {
    number: 3,
    title: "Consolidation",
    description:
      "The periodic, background process of replaying accumulated knowledge to find cross-cutting patterns, merge redundant information, prune stale facts, and extract higher-order insights. Context-layer operation against the Data layer over time. Sleep, for AI systems.",
  },
  {
    number: 4,
    title: "Prioritization",
    description:
      "Ranking information by goal-awareness for the decision at hand. Compression without goal-awareness is just making data smaller. Prioritization makes it actionable. Expert decision-makers process less information than novices — and the right things.",
  },
  {
    number: 5,
    title: "Intelligent Storage",
    description:
      "Storing consolidated insights at the Context layer itself with priority-aware indexing — so Inference reaches the Context store first for consolidated meaning and only round-trips to raw Data via Retrieval when needed. The convergent primitive is memory-as-files: durable, addressable, human-inspectable artifacts that are diffable, governable, and exportable across vendor boundaries. Vectors are none of those things.",
  },
];

export const builtCards = [
  {
    company: "Suzy",
    color: "var(--accent)",
    description:
      "Led the transformation from consumer survey platform to Decision Engine — an enterprise product that synthesizes fragmented marketing intelligence into decisions 350+ brands can act on. The platform’s three capabilities map directly to the five-step framework. Shipped in six weeks.",
  },
  {
    company: "Grandstage",
    color: "#00c9a0",
    description:
      "Built a context system for market intelligence that fused 10,000+ data sources into synthesized, goal-ranked context. Scaled to 90 B2B companies in 3 months at $0 CAC — because a hierarchical relevance model lifted retention from 50% to 80% by getting the context right.",
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
      "Millions in revenue came from personalized context systems — e-nurture streams, onboarding flows, and recommendation engines that answered one question: what does this specific customer need to see, right now, to make a decision?",
  },
];
