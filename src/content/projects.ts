import type { ProjectCard } from "./types";

export const featuredProject = {
  title: "Sia",
  status: "In Development" as const,
  description:
    "A personal knowledge system demonstrating the five-step context generation architecture I advocate for. Curates from Feedly and other sources, synthesizes at ingest time, runs consolidation agents every six hours, prioritizes by goal-awareness, and stores with intelligent indexing. Built with FastAPI, Neon Postgres + pgvector, Ollama, and Langfuse. This is the proof of the thesis.",
  link: "/thesis",
  linkText: "Read the thesis",
};

export const projects: ProjectCard[] = [
  {
    title: "Ascend",
    status: "Live",
    description:
      "A career growth SaaS product built entirely with AI coding tools. No hand-written code. Total cost: <$500 vs. ~$200K per product in the Grandstage era.",
    link: "https://ascend.careers",
  },
  {
    title: "Blocade",
    status: "Live",
    description:
      "A political fundraising system for local campaigns. Streamlined tools for grassroots campaign finance and donor management.",
    link: "https://blocade.app",
  },
  {
    title: "AI Topic Trend Analyzer",
    status: "Prototype",
    description:
      "Analyzes trending topics and patterns in AI discourse. Real-time tracking of emerging themes, terminology, and community focus areas.",
    link: "https://ai-topic-analyzer.replit.app",
  },
  {
    title: "Hubspot AI Dashboard",
    status: "Prototype",
    description:
      "AI-powered onboarding and analytics dashboard for HubSpot. Demonstrates intelligent context generation for customer success.",
    link: "https://hubspot-ai-onboarding.replit.app",
  },
  {
    title: "AI Onboarding Assistant",
    status: "Prototype",
    description:
      "Intelligent onboarding system that adapts to user context and behavior. Demonstrates personalized context generation at scale.",
  },
  {
    title: "Ploppy",
    status: "Coming Soon",
    description:
      "Analyze NYC political contribution data. Tools for understanding political finance patterns and contributor networks in New York City.",
  },
  {
    title: "Recipe Remix",
    status: "Live",
    description:
      "Because sometimes you just want to build something fun. A creative cooking tool that remixes and reimagines recipes.",
    link: "https://recipe-remix.app",
  },
];
