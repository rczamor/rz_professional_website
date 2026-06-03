// Market-map roster data for "The AI Software Market Map: Pick Your Floor".
// Single source of truth shared by the interactive MarketMap table and the
// per-floor static FloorTable fallbacks. Figures are point-in-time as of early
// June 2026; an asterisk marks an estimate or unverified figure.

export type TierVariant = "leader" | "challenger" | "follower";

export interface FloorRow {
  company: string;
  /** Floor 5 only — legacy vs. new split. */
  group?: string;
  /** Verbatim tier label as written in the article (e.g. "Leader (compute)"). */
  tier: string;
  scale: string;
  move: string;
}

export interface Floor {
  id: string;
  num: number;
  /** Short label used in filters and the consolidated table. */
  label: string;
  /** Full section heading as written in the article. */
  heading: string;
  /** First column header — "Company" or "Player". */
  companyHeader: string;
  /** Last column header — varies per floor. */
  moveHeader: string;
  rows: FloorRow[];
  note: string;
}

/** Map a verbatim tier label to a palette variant. */
export function tierVariant(tier: string): TierVariant {
  const t = tier.toLowerCase();
  if (t.includes("leader")) return "leader";
  if (t.includes("challenger")) return "challenger";
  return "follower"; // follower, primitive
}

export const FLOORS: Floor[] = [
  {
    id: "floor-1",
    num: 1,
    label: "Inference & Infrastructure",
    heading: "Floor 1: inference and infrastructure",
    companyHeader: "Company",
    moveHeader: "90-day move",
    note: "Estimate or unverified; full figures and sources in the research report.",
    rows: [
      { company: "Anthropic", tier: "Leader", scale: "~$45B+ run-rate", move: "Claude Managed Agents; ~$45B compute deal" },
      { company: "OpenAI", tier: "Leader", scale: "~$33B annualized", move: "Confidential S-1; Codex + Symphony" },
      { company: "Google", tier: "Leader", scale: "Cloud ~$13B/qtr", move: "Gemini 3; Memory Bank; TPU v8" },
      { company: "CoreWeave", tier: "Leader (compute)", scale: "~$99B backlog", move: "$21B Meta contract; Anthropic partner" },
      { company: "Bedrock / Vertex / Azure AI", tier: "Leader (distribution)", scale: "hyperscaler", move: "100k+ Claude-on-Bedrock customers" },
      { company: "xAI", tier: "Challenger", scale: "~$500M ARR*", move: "Sells Colossus capacity to Anthropic" },
      { company: "Mistral", tier: "Challenger", scale: "~$400M ARR*", move: "$830M debt for a Paris data center" },
      { company: "DeepSeek", tier: "Challenger", scale: "undisclosed", move: "V4-Pro near-frontier at a fraction of cost" },
      { company: "Groq", tier: "Follower", scale: "post-pivot", move: "NVIDIA $20B deal absorbed the LPU team" },
      { company: "SambaNova", tier: "Follower", scale: "—", move: "Vista-led recapitalization" },
    ],
  },
  {
    id: "floor-2",
    num: 2,
    label: "Agent Data Platforms",
    heading: "Floor 2: agent data platforms",
    companyHeader: "Company",
    moveHeader: "90-day move",
    note: "Tiers and figures from the research report.",
    rows: [
      { company: "Notion", tier: "Leader", scale: "~$600M ARR", move: "Developer Platform (May 13): Workers, External Agents API" },
      { company: "Salesforce", tier: "Leader", scale: "$41.5B FY26", move: "Headless 360 (Apr 15): 60+ MCP tools" },
      { company: "HubSpot", tier: "Leader", scale: "~$3.45B ARR", move: "“Open Ecosystem for the Agent Era” (May 4)" },
      { company: "Monday", tier: "Leader", scale: "$1.47B FY26 guide", move: "AI Work Platform relaunch (May 6); agent signup" },
      { company: "Microsoft", tier: "Challenger", scale: "Cloud $26.8B/qtr", move: "“Dataverse is your agent data platform” (May 5)" },
      { company: "Snowflake", tier: "Challenger", scale: "$1.39B/qtr", move: "Cortex Agents + MCP; acquired Natoma" },
      { company: "Databricks", tier: "Challenger", scale: "$5.4B ARR", move: "Managed MCP + Unity Catalog governance" },
      { company: "Atlassian", tier: "Challenger", scale: "$1.79B/qtr", move: "Rovo MCP Server GA" },
      { company: "ServiceNow", tier: "Challenger", scale: "$3.67B/qtr sub", move: "Now Assist MCP + agent-to-agent" },
      { company: "Intercom / Airtable / Box / Zendesk", tier: "Follower", scale: "varies", move: "Credible MCP surfaces, narrower data" },
      { company: "Pinecone / Weaviate / Mem0 / Letta / Zep", tier: "Primitive", scale: "venture-scale", move: "The old “data layer,” now components" },
    ],
  },
  {
    id: "floor-3",
    num: 3,
    label: "Context Engines",
    heading: "Floor 3: context engines",
    companyHeader: "Player",
    moveHeader: "90-day signal",
    note: "No clear leader; this floor is in its naming phase. Asterisk marks an estimate. Full set in the research report.",
    rows: [
      { company: "Glean", tier: "Leader (by scale)", scale: "$300M ARR; $7.2B val", move: "Enterprise Agent Dev Lifecycle (May 12)" },
      { company: "ServiceNow Context Engine", tier: "Leader (by data depth)", scale: "co. ~$15.7B", move: "Named “Context Engine,” Knowledge 2026 (May 6)" },
      { company: "Salesforce Agentforce Coworker", tier: "Challenger", scale: "co. $41.5B", move: "Context across CRM, Slack, 300+ sources (May 21)" },
      { company: "Google Memory Bank", tier: "Challenger", scale: "Alphabet", move: "Identity-scoped long-term memory (May 19)" },
      { company: "Anthropic Dreaming", tier: "Challenger", scale: "private", move: "Scheduled cross-session consolidation (May 6)" },
      { company: "Redis (Iris)", tier: "Challenger", scale: "$355M raised", move: "Agent Memory + Context Retriever (May 18)" },
      { company: "Pinecone (Nexus)", tier: "Challenger", scale: "~$14M ARR*", move: "Nexus knowledge engine + KnowQL (May 4)" },
      { company: "Mem0 / Zep / Letta", tier: "Pure-play challengers", scale: "venture-scale", move: "Dev reach / benchmarks / memory-first harness" },
      { company: "LlamaIndex / Contextual AI / Cognee", tier: "Follower", scale: "early", move: "“Context engineering” positioning" },
    ],
  },
  {
    id: "floor-4",
    num: 4,
    label: "Agent Management & Orchestration",
    heading: "Floor 4: agent management and orchestration",
    companyHeader: "Company",
    moveHeader: "90-day move",
    note: "Asterisk marks an estimate or unverified figure. Full figures in the research report.",
    rows: [
      { company: "Cursor / Anysphere", tier: "Leader", scale: "$2B ARR; $50B val", move: "Cursor 3 “Glass”: Agents Window (Apr 2)" },
      { company: "OpenAI (Codex + Symphony)", tier: "Leader", scale: "3M+ weekly users", move: "Symphony turns a project board into a control plane (Apr 27)" },
      { company: "Anthropic (Managed Agents)", tier: "Leader", scale: "~$47B run-rate", move: "Dreaming, Outcomes, fleet monitoring (May 6)" },
      { company: "Microsoft", tier: "Leader", scale: "Copilot ~$10B ARR*", move: "Agent audit logs to SIEM, GA (Feb 26)" },
      { company: "Cognition (Devin)", tier: "Challenger", scale: "$26B val", move: "90% of its own code Devin-written" },
      { company: "Sierra", tier: "Challenger", scale: "$150M ARR; $15.8B val", move: "Bret Taylor; vertical expansion" },
      { company: "Replit", tier: "Challenger", scale: "$265M ARR; $9B val", move: "Agent 4 parallel agents" },
      { company: "LangChain (LangGraph)", tier: "Challenger", scale: "~$16M ARR*", move: "De facto open-source runtime" },
      { company: "n8n", tier: "Challenger", scale: "$40M ARR; $5.2B val", move: "SAP investment; Joule Studio" },
      { company: "Braintrust / Arize / Galileo", tier: "Follower", scale: "eval sub-layer", move: "Eval and observability as a standalone moat" },
    ],
  },
  {
    id: "floor-5",
    num: 5,
    label: "Data Providers for Agents",
    heading: "Floor 5: data providers built for agents",
    companyHeader: "Company",
    moveHeader: "Agent-native move",
    note: "Full roster and sources in the research report.",
    rows: [
      { company: "ZoomInfo", group: "Legacy", tier: "Leader", scale: "~$1.24B annualized", move: "GTM.AI context layer; MCP in Claude (Jan 13)" },
      { company: "Apollo", group: "Legacy", tier: "Leader", scale: "~$150M ARR", move: "MCP for Claude (Feb 24); ChatGPT app (Apr 29)" },
      { company: "AlphaSense", group: "Legacy (finance)", tier: "Leader", scale: "$500M ARR", move: "Agent API + MCP; agentic research" },
      { company: "Clay", group: "New", tier: "Leader", scale: "~$100M ARR; $3.1B val", move: "Claygent consumes 100+ provider MCPs" },
      { company: "6sense / Lusha / Demandbase", group: "Legacy", tier: "Challenger", scale: "$100–210M ARR", move: "Data plus a partial agent story" },
      { company: "11x / Artisan / Hebbia", group: "New", tier: "Challenger", scale: "early", move: "Autonomous execution, no proprietary data" },
      { company: "Cognism / Clearbit (HubSpot) / Sales Navigator", group: "Legacy", tier: "Follower", scale: "varies", move: "Real data moats, closed to agents" },
    ],
  },
];
