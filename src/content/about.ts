import type { TimelineEntry, SpeakingEntry } from "./types";

export const heroSub =
  "I\u2019ve spent twenty years building systems that help people and organizations make better decisions with the information they have. The thread running through my career isn\u2019t a job title. It\u2019s a question: how do you get the right information to the right person at the moment they need to decide?";

export const bioIntro = [
  "That question has taken me from targeted political campaigns across the country to building enterprise AI platforms, and it\u2019s led me to what I work on now: the architecture of context in AI systems \u2014 the five-step process (curate, synthesize, consolidate, prioritize, store) that most AI products skip entirely.",
  "But I didn\u2019t arrive here through AI. I arrived here through behavioral economics, information architecture, and a lot of building.",
];

export const bioSections = [
  {
    label: "The Early Years: Building and Breaking Things (2006\u20132014)",
    paragraphs: [
      "I started in 2006 as a community organizer at Madison Park Development Corporation in Boston, where Celia Grant asked the question that changed my career: \u201cHow could we have used technology to better mobilize voters in Roxbury?\u201d I went to DC to learn political technology, attended the first-ever digital organizing training (New Organizing Institute), and promptly got my teeth kicked in by an industry that didn\u2019t know me and didn\u2019t care to.",
      "So I built my way in. I blogged about behavioral economics and decision architecture starting in 2008 \u2014 years before \u201cnudge theory\u201d became mainstream. I wrote about knowledge systems for an Information Architecture trade publication. I spoke at conferences on these topics. I led digital for two highly targeted U.S. Senate and Congressional races, led digital transformation for some of the top advocacy and charitable organizations in the world, and built prototypes and production products for early stage startups.",
      "But I wasn\u2019t just doing \u201cdigital.\u201d I was building \u2014 websites, database and CRM systems, martech platforms, prototypes, and early products. One startup was essentially Digg for fashion. Another was a fitness social network. I built my first data platform in 2003 \u2014 for Boston Beer Company, using Microsoft Access. Every job involved building applications, which prepared me for the career pivot from digital strategy to product management that came later.",
      "In 2009, I founded Social Contxt, a tech-enabled services company building an omnichannel martech platform for the SMB market, partly funded by Hootsuite. We grew to five people and six figures in revenue in six months. It didn\u2019t become a venture-scale company, but it taught me how to build a product business from zero.",
    ],
  },
  {
    label: "Enterprise Transformation (2011\u20132021)",
    paragraphs: [
      "I joined Hill Holliday in 2011 as a digital strategist, running campaigns and social customer service programs for Bank of America (1M+ Facebook followers, 30% increase in customer perception) and Cigna Healthcare (reduced service SLA from 7 days to 1 day). Then I moved to 4Site Interactive Studios, where I led digital strategy for clients like PBS, Oceana, and the NFL Foundation, before landing at Phase2.",
      "Phase2 is where I made the pivot from digital strategy to product. I launched and led a 10-person consulting practice ($3M revenue in year one) and embedded as product lead within J&J, Northwell Health, Ann Inc., Twitter, Reddit, Memorial Sloan Kettering, Al Jazeera, and Sony Music. Each engagement was a transformation story: taking an organization\u2019s digital infrastructure and fundamentally changing how their teams used technology to engage customers and drive growth.",
      "At IBM (2018\u20132021), the transformation was bigger. I led digital product and growth for the Cloud and AI self-service portfolio, overseeing 48 reports and a $4M budget. I deployed the growth stack globally, built personalization systems into IBM\u2019s DXP, and drove millions in revenue through context-aware nurture and onboarding. But even with two analysts, three data science teams, and a cadre of agencies at my disposal, I constantly felt like I didn\u2019t know what our customers actually needed to drive meaningful adoption and retention. That frustration \u2014 \u201cif this is this hard with all the resources IBM has, how hard is this for small businesses?\u201d \u2014 sparked the idea for Grandstage.",
    ],
  },
  {
    label: "Founder and Builder (2022\u2013Present)",
    paragraphs: [
      "I co-founded Grandstage in 2022. We built an AI research engine for GTM teams, raised $525K, went through Techstars and Antler, shipped three products, and scaled to 90 B2B companies at $0 CAC. After Grandstage, I served as SVP and GM at Helm Labs, generating a $3.25M pipeline for an AI data intelligence platform pre-product launch.",
      "Now I\u2019m VP Product at Suzy, where I led the transformation from a consumer survey platform to a Decision Engine \u2014 an enterprise product that synthesizes fragmented market intelligence into decisions 350+ brands can act on. We launched the Decision Engine on April 2, 2026.",
      "I\u2019m also building Sia \u2014 a personal knowledge system that demonstrates the exact five-step context generation architecture I advocate for. Building it is the proof.",
    ],
  },
  {
    label: "The Throughline",
    paragraphs: [
      "Looking back across twenty years, the thread is clear: from politics to digital strategy to product management to AI context architecture. Each step was about the same problem \u2014 how do you turn raw information into something a person (or a system) can use to make a good decision? I\u2019ve been reading and writing about cognitive psychology, information theory, and decision science since 2008. What\u2019s changed is that AI has made the architecture of context a product problem, not just an academic one. And product problems are what I solve.",
      "I live in Brooklyn with my wife and two young children. When I\u2019m not building, I\u2019m strength training, photographing street scenes, or reading sci-fi.",
    ],
  },
];

export const speakingEntries: SpeakingEntry[] = [
  {
    title: "The Five Steps Most AI Systems Skip",
    description:
      "Why most AI products treat data as context and what happens when you build the generation layer they\u2019re missing. The five-step architecture (curate, synthesize, consolidate, prioritize, store), grounded in cognitive science and demonstrated in production.",
  },
  {
    title: "RAG Is Not Enough",
    description:
      "RAG is a retrieval pattern, not a context strategy. What the next generation of AI products needs beyond chunking and embedding \u2014 and how to think about it differently.",
  },
  {
    title: "From Zero to Revenue: Building AI Products Without Writing Code",
    description:
      "The practical guide to building production SaaS products using AI coding tools. Architecture decisions, the mistakes that cost weeks, and the workflows that actually scale.",
  },
  {
    title: "The Product Leader\u2019s Guide to AI Architecture Decisions",
    description:
      "When to build vs. buy. How to evaluate context systems. Whether your product actually needs a context layer. A decision framework from someone who\u2019s made these calls.",
  },
];

export const timelineEntries: TimelineEntry[] = [
  {
    years: "2025\u2013Present",
    title: "VP Product",
    company: "Suzy",
    description: "Led transformation to Decision Engine; launched April 2, 2026",
  },
  {
    years: "2024",
    title: "SVP & General Manager",
    company: "Helm Labs",
    description: "AI data intelligence platform; $3.25M pipeline pre-launch",
  },
  {
    years: "2022\u20132024",
    title: "Co-Founder & Head of Product",
    company: "Grandstage / Spade AI",
    description: "AI market intelligence; 300% growth, $0 CAC, Techstars + Antler",
  },
  {
    years: "2018\u20132021",
    title: "Digital Product & Growth Leader",
    company: "IBM",
    description: "Cloud & AI portfolio; $4M budget, 48 reports, millions in revenue impact",
  },
  {
    years: "2014\u20132017",
    title: "Director, Product & Digital Strategy",
    company: "Phase2",
    description: "Consulting practice; $3M revenue, J&J, Northwell, Ann Inc., Twitter",
  },
  {
    years: "2012\u20132014",
    title: "Director, Strategy",
    company: "4Site Interactive Studios",
    description: "PBS, nonprofits, digital strategy work",
  },
  {
    years: "2011\u20132012",
    title: "Digital Strategist",
    company: "Hill Holliday",
    description: "Bank of America, Cigna Healthcare",
  },
  {
    years: "2009\u20132011",
    title: "Founder",
    company: "Social Contxt",
    description: "Martech platform for SMBs, funded by Hootsuite",
  },
  {
    years: "2006\u20132009",
    title: "Digital Director & Product Manager",
    company: "Freelance",
    description: "Political campaigns, Mozilla, Jane Goodall Institute, U.S. Senate races",
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/richezamorjr/" },
  { label: "X / Twitter", href: "https://x.com/richezamor" },
  { label: "GitHub", href: "https://github.com/rczamor" },
];
