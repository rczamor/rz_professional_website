import type { CapabilityCard } from "./types";

export const heroStats = [
  { value: "300%", label: "Growth at $0 CAC", org: "Grandstage" },
  { value: "$3.25M", label: "Pipeline pre-product", org: "Helm Labs" },
  { value: "$10M+", label: "Revenue impact", org: "IBM" },
];

export const capabilities: CapabilityCard[] = [
  {
    icon: "hub",
    title: "Strategy",
    description:
      "Customer and market research. Product strategy. Growth strategy. AI architecture decisions that map to business outcomes.",
  },
  {
    icon: "deployed_code",
    title: "Build",
    description:
      "Requirements. Prototyping. Technical architecture. Working directly with engineering and data science to ship products that hold up in production.",
  },
  {
    icon: "trending_up",
    title: "Scale",
    description:
      "Go-to-market execution. Growth experimentation. Analytics and optimization. Building the feedback loops that make products compound.",
  },
];

export const selectWork = [
  {
    company: "Suzy",
    role: "VP Product",
    body: "Led the transformation of a consumer survey platform trusted by 350+ enterprise brands into a Decision Engine \u2014 synthesizing fragmented marketing intelligence into decisions organizations can act on. Built and shipped in six weeks.",
    metricValue: "6 wks",
    metricLabel: "concept \u2192 launch",
  },
  {
    company: "Grandstage",
    role: "Co-Founder & Head of Product",
    body: "Built an answer engine fusing 10,000+ sources into synthesized market intelligence. Designed the hybrid search architecture and hierarchical relevance model that lifted user retention from 50% to 80%.",
    metricValue: "300%",
    metricLabel: "user growth \u00b7 $0 CAC",
  },
  {
    company: "Helm Labs",
    role: "SVP & General Manager",
    body: "Defined product vision for a unified enterprise data platform integrating five acquired products and proprietary datasets covering 200M+ Americans. Built the GTM motion from scratch.",
    metricValue: "$3.25M",
    metricLabel: "pipeline pre-launch",
  },
  {
    company: "IBM",
    role: "Digital Product & Growth",
    body: "Transformed how IBM\u2019s Cloud and AI business acquired, converted, and retained ~1M users globally. Deployed growth stack across 30+ countries with 100% adoption.",
    metricValue: "31%",
    metricLabel: "trial conversion lift",
  },
];

export const whyMeCards = [
  {
    number: "01",
    title: "A career built on transformation.",
    body: "Every major role has been a transformation story \u2014 taking an organization, a team, or a product and fundamentally changing how it operates. I don\u2019t maintain products. I transform businesses through them.",
  },
  {
    number: "02",
    title: "An original thesis backed by real builds.",
    body: "A specific, defensible point of view on turning raw data into decision-ready context \u2014 grounded in cognitive science and information theory, validated by every product I\u2019ve shipped.",
  },
  {
    number: "03",
    title: "The full stack: strategy to revenue.",
    body: "Strategy, architecture, build, go-to-market, and growth \u2014 in one person. I\u2019ve raised venture capital, sold enterprise deals, deployed growth infrastructure globally, and written production AI applications.",
  },
];

export const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Riche Zamor",
  url: "https://richezamor.com",
  jobTitle: "VP of Product",
  description:
    "Building AI products that turn raw data into decision-ready context.",
  sameAs: [
    "https://linkedin.com/in/richezamorjr",
    "https://twitter.com/richezamor",
    "https://github.com/rczamor",
  ],
  knowsAbout: [
    "Product Management",
    "AI Products",
    "Context Architecture",
    "Startup Leadership",
  ],
};
