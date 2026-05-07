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
      "The first step of context architecture. Selectively picking from the Data layer based on assumed session and user needs. Context-layer work that reaches into Data via Retrieval. Intent-driven selection, not passive intake filtering.",
  },
  {
    term: "Synthesis",
    definition:
      "The second step of context architecture. The active processing step — classifying inputs, extracting insights, combining information across sources, and producing understanding that no single document contained.",
  },
  {
    term: "Consolidation",
    definition:
      "The third step of context architecture. The periodic, background process of replaying accumulated knowledge to find cross-cutting patterns, merge redundant information, prune stale facts, and extract higher-order insights. Context-layer operation against the Data layer over time.",
  },
  {
    term: "Prioritization",
    definition:
      "The fourth step of context architecture. Ranking information by goal-awareness for the decision at hand. Determining what the system needs to decide and what context is most relevant to that specific decision.",
  },
  {
    term: "Intelligent Storage",
    definition:
      "The fifth step of context architecture. Storing consolidated insights at the Context layer itself with priority-aware indexing — so Inference reaches the Context store first for consolidated meaning, and only round-trips to raw Data via Retrieval when the Context store is insufficient.",
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
    term: "RAG (Retrieval-Augmented Generation)",
    definition:
      "A retrieval pattern that pulls relevant documents from a knowledge base and provides them as context to a language model. RAG optimizes the Retrieval layer, then hands raw results to Inference. Context architecture argues that RAG alone is insufficient — without a Context layer between Retrieval and Inference where synthesis, consolidation, and goal-aware prioritization run, the pipeline is just delivering noise efficiently.",
  },
  {
    term: "Goal-Aware Compression",
    definition:
      "The process of reducing information volume while preserving the elements most relevant to a specific decision or objective. Distinguished from generic summarization by its alignment with explicit goals.",
  },
  {
    term: "Four-Layer AI System Stack",
    definition:
      "Riche Zamor’s framing of an AI system as four layers — Data, Retrieval, Context, Inference. Data stores. Retrieval reaches. Context generates meaning. Inference decides. The five-step process lives entirely at the Context layer. Most AI systems route Retrieval straight into Inference and skip the Context layer entirely.",
  },
  {
    term: "Data Layer",
    definition:
      "Layer 1 of the AI system stack. Storage at every time scale — raw inputs, telemetry, archives, and persistent memory alike. The substrate the system reaches into via Retrieval.",
  },
  {
    term: "Retrieval Layer",
    definition:
      "Layer 2 of the AI system stack. The reach layer — queries, tool calls, API hits, vector lookups. How the system gets to Data when it needs it. Optimizing Retrieval alone doesn’t produce meaning; it just delivers raw chunks faster.",
  },
  {
    term: "Context Layer",
    definition:
      "Layer 3 of the AI system stack — between Retrieval and Inference. Where retrieval results become meaning the model can reason with. The five-step process (curate, synthesize, consolidate, prioritize, store) lives entirely at this layer, with its own durable storage. The convergent storage primitive is memory-as-files.",
  },
  {
    term: "Inference Layer",
    definition:
      "Layer 4 of the AI system stack. Generation. Where the agent stops being a tool and becomes a principal — an identity-bearing actor with role, authority scope, and audit trail. The architectural question at this layer is: did we synthesize context this specific agent will use to decide well, given who it is and what it’s allowed to do?",
  },
  {
    term: "Memory-as-Files",
    definition:
      "The convergent storage primitive at the Context layer of an AI system. Durable, addressable, human-inspectable artifacts (think AGENTS.md, CLAUDE.md, archival memory) that hold synthesized, prioritized, consolidated meaning rather than raw data. Anthropic, Paper Compute, LangChain, Cloudflare, and Letta all landed on this pattern within a single seven-day window in April 2026. Files are inspectable, diffable, governable, and exportable across vendor boundaries. Vectors are none of those things.",
  },
  {
    term: "Agents as Principals",
    definition:
      "The reframing of agents from tools-that-consume-context to autonomous decision-makers operating on context. At the Inference layer of the AI system stack, the agent is no longer a tool — it’s an identity-bearing actor with its own role, authority scope, and audit trail. The architectural question shifts from “did we synthesize good context?” to “did we synthesize context this specific agent will use to decide well?”",
  },
];
