import type { GlossaryTerm } from "./types";

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Context Architecture",
    definition:
      "The practice of designing the informational environment that surrounds AI systems — shaping what they know, how they retrieve it, and how that knowledge is structured for human decision-making. Coined by Riche Zamor.",
  },
  {
    term: "Curation",
    definition:
      "The first step of context architecture. Intelligent filtering at the intake level that determines whether downstream steps operate on signal or noise. Deciding what sources matter, what\u2019s fresh, and what\u2019s relevant to the system\u2019s goals.",
  },
  {
    term: "Synthesis",
    definition:
      "The second step of context architecture. The active processing step — classifying inputs, extracting insights, combining information across sources, and producing understanding that no single document contained.",
  },
  {
    term: "Consolidation",
    definition:
      "The third step of context architecture. The periodic, background process of replaying accumulated knowledge to find cross-cutting patterns, merge redundant information, prune stale facts, and extract higher-order insights.",
  },
  {
    term: "Prioritization",
    definition:
      "The fourth step of context architecture. Ranking information by goal-awareness. Determining what the system needs to decide and what context is most relevant to that specific decision.",
  },
  {
    term: "Intelligent Storage",
    definition:
      "The fifth step of context architecture. Storing insights with priority-aware indexing so that high-value consolidated knowledge is rapidly retrievable while lower-priority information decays gracefully.",
  },
  {
    term: "Context Drift",
    definition:
      "The gradual degradation of AI system performance as the context it relies on becomes stale, irrelevant, or misaligned with current goals. A primary cause of enterprise AI project failures.",
  },
  {
    term: "Context Window",
    definition:
      "The maximum amount of text (measured in tokens) that a language model can process in a single interaction. Context architecture argues that the quality of what fills this window matters more than its size.",
  },
  {
    term: "Decision-Ready Context",
    definition:
      "Information that has been curated, synthesized, consolidated, prioritized, and stored intelligently — ready to support a specific human or AI decision without further processing.",
  },
  {
    term: "Context Layer",
    definition:
      "The architectural component of an AI system responsible for managing the flow from raw data to decision-ready context. The layer that sits between data sources and the model\u2019s inference step.",
  },
  {
    term: "RAG (Retrieval-Augmented Generation)",
    definition:
      "A technique that retrieves relevant documents from a knowledge base and provides them as context to a language model. Context architecture argues that RAG alone is insufficient — retrieval without prior curation, synthesis, and prioritization delivers noise.",
  },
  {
    term: "Goal-Aware Compression",
    definition:
      "The process of reducing information volume while preserving the elements most relevant to a specific decision or objective. Distinguished from generic summarization by its alignment with explicit goals.",
  },
];
