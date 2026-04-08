"use client";

import { useEffect } from "react";
import { glossaryTerms } from "@/content/glossary";
import { caseStudies } from "@/content/work";
import { projects } from "@/content/projects";
import { speakingEntries, timelineEntries, socialLinks } from "@/content/about";
import { thesisSteps } from "@/content/thesis";

interface ModelContext {
  registerTool(tool: {
    name: string;
    description: string;
    parameters?: Record<string, unknown>;
    handler: (params: Record<string, string>) => unknown;
  }): void;
}

declare global {
  interface Navigator {
    modelContext?: ModelContext;
  }
}

export default function WebMcpProvider() {
  useEffect(() => {
    const mc = navigator.modelContext;
    if (!mc) return;

    // Content retrieval tools
    mc.registerTool({
      name: "get_professional_profile",
      description: "Get Riche Zamor's structured professional profile including bio, current role, social links, and expertise areas",
      handler: () => ({
        name: "Riche Zamor",
        title: "VP of Product",
        tagline: "2x Founder. Context Architect.",
        expertise: ["Product Management", "AI Products", "Context Architecture", "Startup Leadership"],
        social: socialLinks,
        website: "https://richezamor.com",
      }),
    });

    mc.registerTool({
      name: "get_thesis_summary",
      description: "Get the Context Architecture thesis summary — the five-step framework for turning raw data into decision-ready context",
      parameters: {
        type: "object",
        properties: {
          detail_level: { type: "string", enum: ["brief", "full"], description: "Level of detail" },
        },
      },
      handler: (params) => {
        const brief = {
          title: "Data Is Not Context",
          core_argument: "Most AI systems skip four of the five steps that turn data into context. The architecture most teams skip — curation, synthesis, consolidation, prioritization, and intelligent storage — is what determines whether AI products are mediocre or exceptional.",
          steps: thesisSteps.map((s) => s.title),
        };
        if (params.detail_level === "full") {
          return { ...brief, steps: thesisSteps };
        }
        return brief;
      },
    });

    mc.registerTool({
      name: "get_case_studies",
      description: "Get Riche Zamor's professional case studies from Suzy, Grandstage, Helm Labs, IBM, and Phase2",
      parameters: {
        type: "object",
        properties: {
          company: { type: "string", enum: ["all", "suzy", "grandstage", "helm-labs", "ibm", "phase2"], description: "Filter by company" },
        },
      },
      handler: (params) => {
        if (params.company && params.company !== "all") {
          const name = params.company.replace(/-/g, " ");
          return caseStudies.filter((cs) => cs.company.toLowerCase().includes(name));
        }
        return caseStudies;
      },
    });

    mc.registerTool({
      name: "get_articles",
      description: "Get article metadata from Riche Zamor's Thinking in Public blog. Navigate to /thinking to see all articles.",
      parameters: {
        type: "object",
        properties: {
          category: { type: "string", enum: ["all", "context-intelligence", "product-management", "leadership"], description: "Filter by pillar" },
        },
      },
      handler: (params) => {
        // Articles are loaded server-side; direct agent to the thinking page
        void params;
        return { message: "Navigate to /thinking to browse articles by pillar", url: "https://richezamor.com/thinking" };
      },
    });

    mc.registerTool({
      name: "lookup_glossary_term",
      description: "Look up context architecture glossary terms and definitions",
      parameters: {
        type: "object",
        properties: {
          term: { type: "string", description: "Term to look up, or 'all' for all terms" },
        },
      },
      handler: (params) => {
        if (!params.term || params.term === "all") return glossaryTerms;
        const q = params.term.toLowerCase();
        return glossaryTerms.filter((t) => t.term.toLowerCase().includes(q));
      },
    });

    mc.registerTool({
      name: "get_projects",
      description: "Get Riche Zamor's side projects and prototypes",
      parameters: {
        type: "object",
        properties: {
          status: { type: "string", enum: ["all", "live", "in-development", "prototype"], description: "Filter by status" },
        },
      },
      handler: (params) => {
        if (params.status && params.status !== "all") {
          const s = params.status.replace(/-/g, " ");
          return projects.filter((p) => p.status.toLowerCase().includes(s));
        }
        return projects;
      },
    });

    mc.registerTool({
      name: "get_speaking_topics",
      description: "Get Riche Zamor's speaking topics and talk descriptions",
      handler: () => speakingEntries,
    });

    mc.registerTool({
      name: "get_career_timeline",
      description: "Get Riche Zamor's career timeline from 2006 to present",
      handler: () => timelineEntries,
    });

    // Action tools
    mc.registerTool({
      name: "submit_contact_inquiry",
      description: "Submit a contact inquiry to Riche Zamor for advisory, board, speaking, or networking",
      parameters: {
        type: "object",
        properties: {
          firstname: { type: "string", description: "First name" },
          lastname: { type: "string", description: "Last name" },
          email: { type: "string", description: "Email address" },
          inquiry_type: { type: "string", enum: ["Advisory Engagement", "Board Position", "Speaking / Podcast", "Networking", "Other"], description: "Type of inquiry" },
          message: { type: "string", description: "Message content" },
        },
        required: ["firstname", "lastname", "email", "inquiry_type", "message"],
      },
      handler: async (params) => {
        const res = await fetch(
          "https://api.hsforms.com/submissions/v3/integration/submit/245808914/6203eb7b-c491-4906-949f-3927c68fed0d",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fields: [
                { name: "firstname", value: params.firstname },
                { name: "lastname", value: params.lastname },
                { name: "email", value: params.email },
                { name: "inquiry_type", value: params.inquiry_type },
                { name: "message", value: params.message },
              ],
              context: { pageUri: "https://richezamor.com/contact", pageName: "Contact — Riché Zamor" },
            }),
          }
        );
        return { success: res.ok };
      },
    });

    mc.registerTool({
      name: "subscribe_newsletter",
      description: "Subscribe to The Context Layer newsletter by Riche Zamor",
      parameters: {
        type: "object",
        properties: {
          email: { type: "string", description: "Email address" },
        },
        required: ["email"],
      },
      handler: async (params) => {
        const res = await fetch(
          "https://api.hsforms.com/submissions/v3/integration/submit/245808914/2530a9e8-5fad-4e04-a99f-36f0b152d43e",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fields: [{ name: "email", value: params.email }],
              context: { pageUri: "https://richezamor.com", pageName: "Riche Zamor" },
            }),
          }
        );
        return { success: res.ok };
      },
    });

    mc.registerTool({
      name: "navigate_to_page",
      description: "Navigate to a page on richezamor.com",
      parameters: {
        type: "object",
        properties: {
          page: { type: "string", enum: ["home", "thesis", "work", "about", "thinking", "projects", "glossary", "contact"], description: "Page to navigate to" },
        },
        required: ["page"],
      },
      handler: (params) => {
        const routes: Record<string, string> = {
          home: "/", thesis: "/thesis", work: "/work", about: "/about",
          thinking: "/thinking", projects: "/projects", glossary: "/glossary", contact: "/contact",
        };
        window.location.href = routes[params.page] || "/";
        return { navigated: params.page };
      },
    });

    mc.registerTool({
      name: "set_theme",
      description: "Change the website color theme",
      parameters: {
        type: "object",
        properties: {
          theme: { type: "string", enum: ["night", "dawn", "day", "dusk"], description: "Theme to apply" },
        },
        required: ["theme"],
      },
      handler: (params) => {
        document.documentElement.setAttribute("data-theme", params.theme);
        localStorage.setItem("rz-theme", params.theme);
        return { theme: params.theme };
      },
    });
  }, []);

  return null;
}
