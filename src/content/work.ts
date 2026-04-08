import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    company: "Suzy",
    role: "VP Product",
    period: "Dec 2025 – Present",
    type: "Decision Engine",
    metrics: [
      { value: "6 wks", label: "concept → launch" },
      { value: "350+", label: "enterprise brands" },
    ],
    challenge:
      "Suzy had spent nine years as a market research platform trusted by 350+ enterprises — Microsoft, Google, PepsiCo, Netflix, P&G. But the product was a survey tool in a market being rapidly disrupted by AI. Enterprise marketing teams were drowning in fragmented intelligence across 20+ tools with no system that synthesized it all into action.",
    whatIBuilt:
      "Led product strategy for transformation to Decision Engine — structured around Intelligence, Insights, and Impact. Architected retrieval using Databricks vector DB with Qwen3-Embedding-8B. Designed AI evaluation framework. Drove inference cost optimization through model tiering (Opus/Sonnet/Haiku routing). Led GTM strategy. Reorganized product org from two pods into six triads shipping on daily cycles.",
    contextConnection:
      "Suzy's three capabilities map directly to the five-step context generation framework: Intelligence is curation, Insights is synthesis and consolidation, Impact is prioritization and intelligent storage. The thesis showed up in the product before I named it.",
  },
  {
    company: "Grandstage / Spade AI",
    role: "Co-Founder & Head of Product",
    period: "2022 – 2024",
    type: "AI Market Intelligence",
    metrics: [
      { value: "300%", label: "user growth" },
      { value: "$0", label: "CAC" },
      { value: "80%", label: "retention" },
    ],
    challenge:
      "GTM teams at B2B companies were spending weeks compiling market insights from fragmented sources — analyst reports, news feeds, competitor data, social signals. The process was manual, expensive, and produced results that were stale by the time they reached a decision-maker.",
    whatIBuilt:
      "Led zero-to-one product development for a venture-backed platform ($525K raised). Managed ten across PM, UX, data science, and engineering. Shipped three AI products. Built hybrid search architecture: PostgreSQL + PGVector for dense retrieval, HNSW-indexed keyword search for sparse. Designed hierarchical relevance model using K-Means clustering. Custom evaluation and observability tooling increased precision over 40%.",
    contextConnection:
      "This product worked because it consolidated raw market data into synthesized, goal-aware context — not because of the model. The architecture validated the five-step approach before I had the language for it.",
  },
  {
    company: "Helm Labs",
    role: "SVP & General Manager",
    period: "2024",
    type: "AI Data Intelligence",
    metrics: [
      { value: "$3.25M", label: "pipeline pre-launch" },
      { value: "14x", label: "partner ACV growth" },
    ],
    challenge:
      "Helm Labs (subsidiary of Murmuration, funded by Bloomberg LP) had acquired five separate products serving political and public affairs professionals. They needed a unified platform strategy, a coherent product roadmap, and a go-to-market motion built from scratch — for a product that didn't exist yet.",
    whatIBuilt:
      "Defined enterprise data platform vision integrating proprietary datasets and custom ML models covering 200+ behavioral and demographic data points on ~200M Americans. Built GTM strategy selling platform access with research services. Led search interface redesign reducing response time 50%+. Achieved 105% gross margin growth through pricing optimization.",
    contextConnection:
      "The value I sold was context architecture — how information about ~200 million Americans would be prioritized and presented to decision-makers. The pipeline was built on the strength of the vision and the services layer, not a shipping product.",
  },
  {
    company: "IBM",
    role: "Digital Product & Growth Leader",
    period: "2018 – 2021",
    type: "Growth — Cloud & Watson",
    metrics: [
      { value: "31%", label: "trial conversion lift" },
      { value: "$2.4M", label: "e-nurture revenue" },
      { value: "8 fig", label: "pipeline" },
    ],
    challenge:
      "IBM's Cloud and AI business needed to fundamentally transform how it acquired, converted, and retained approximately one million trial users globally. The digital experience was generic — same content and journey for every user regardless of product interest, stage, or behavior.",
    whatIBuilt:
      "Oversaw 48 reports and $4M budget. Built content authoring features for IBM's DXP cutting time-to-market 50%+ and doubling organic traffic. Launched IBM's first personalization pilot. Developed predictive dashboards and automated personalized onboarding. Deployed growth stack (Braze, Segment, Amplitude) across 30+ countries with 100% adoption.",
    contextConnection:
      "Personalization at scale is a context problem: what does this specific customer need to see, right now, to make a decision? The systems I built at IBM were early context-aware architectures applied to growth.",
  },
  {
    company: "Phase2",
    role: "Director, Product & Digital Strategy",
    period: "2014 – 2017",
    type: "Enterprise Transformation",
    metrics: [
      { value: "$3M", label: "practice revenue yr 1" },
      { value: "500%", label: "J&J revenue growth" },
    ],
    challenge:
      "Launched and led a 10-person digital and product strategy consulting practice. Embedded as product lead within major enterprise clients, each time transforming how the organization used digital platforms and intelligent tools.",
    whatIBuilt:
      "Launched and led a 10-person digital and product strategy consulting practice. Embedded as product lead within major enterprise clients, each time transforming how the organization used digital platforms and intelligent tools.",
    contextConnection:
      "",
    subEntries: [
      {
        role: "Johnson & Johnson",
        period: "",
        description:
          "Overhauled CMS powering 1,000+ product websites. Cut time-to-market from months to under four weeks. Grew engagement revenue 500%+.",
      },
      {
        role: "Northwell Health",
        period: "",
        description:
          "Designed editorial platform transforming patient engagement. Led CMS enhancements and decoupled React frontend. Reactivated tens of thousands of dormant patients.",
      },
      {
        role: "Ann Inc. (Ann Taylor)",
        period: "",
        description:
          "Managed design and build of digital workspace for retail employees across brands.",
      },
      {
        role: "Other Platforms",
        period: "",
        description:
          "Twitter international SEO tools. Memorial Sloan Kettering CMS. Reddit digital support center. Al Jazeera omnichannel CMS. Sony Music collaboration system.",
      },
    ],
  },
];
