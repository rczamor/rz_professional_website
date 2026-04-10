import type { SpeakingEntry, TimelineEntry } from "./types";

export const heroSub =
  "I\u2019ve spent twenty years building systems that help people and organizations make better decisions with the information they have. The thread running through my career isn\u2019t a job title. It\u2019s a question: how do you get the right information to the right person at the moment they need to decide?";

export const introText = [
  "That question has taken me from targeted political campaigns across the country to building enterprise AI platforms, and it\u2019s led me to what I work on now: the architecture of context in AI systems \u2014 the five-step process (curate, synthesize, consolidate, prioritize, store) that most AI products skip entirely.",
  "But I didn\u2019t arrive here through AI. I arrived here through behavioral economics, information architecture, growing up around community organizers and educators, reading Western literature in elementary school, and a lot of building.",
];

export const throughlineQuote =
  "How do you turn raw information into something a person \u2014 or a system \u2014 can use to make a good decision";

export const throughlineBody =
  "From politics to digital strategy to product management to AI context architecture. Each step was about the same problem. AI has made the architecture of context a product problem, not just an academic one. And product problems are what I solve.";

export const personalText =
  "I live in Brooklyn with my wife and two young children. When I\u2019m not building, I\u2019m strength training, photographing street scenes, or reading sci-fi.";

export const speakingEntries: SpeakingEntry[] = [
  {
    title: "The Five Steps Most AI Systems Skip",
    description:
      "Why most AI products treat data as context and what happens when you build the generation layer they\u2019re missing. The five-step architecture grounded in cognitive science and demonstrated in production.",
  },
  {
    title: "RAG Is Not Enough",
    description:
      "RAG is a retrieval pattern, not a context strategy. What the next generation of AI products needs beyond chunking and embedding \u2014 and how to think about it differently.",
  },
  {
    title: "From Zero to Revenue: AI Products Without Code",
    description:
      "The practical guide to building production SaaS using AI coding tools. Architecture decisions, costly mistakes, and workflows that actually scale.",
  },
  {
    title: "The Product Leader\u2019s Guide to AI Architecture",
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

export interface AboutPhoto {
  src: string;
  alt: string;
  aspect: string;
}

export const photos = {
  headshot: { src: "/images/about/headshot.jpg", alt: "Riché Zamor portrait", aspect: "4/5" },
  speaking: { src: "/images/about/speaking.jpg", alt: "Riché presenting on AEO and search optimization", aspect: "16/9" },
  building: { src: "/images/about/building.jpg", alt: "Riché coding from the kitchen", aspect: "16/9" },
  nycSkyline: { src: "/images/about/nyc-skyline.jpg", alt: "Lower Manhattan skyline at golden hour", aspect: "16/9" },
  family: { src: "/images/about/family.jpg", alt: "Riché and wife at their wedding", aspect: "3/2" },
  deadlift: { src: "/images/about/deadlift.jpg", alt: "Riché deadlifting at the gym", aspect: "3/2" },
  scifiReads: { src: "/images/about/scifi-reads.jpg", alt: "Reading Alchemised by SenLinYu", aspect: "1/1" },
  brooklynStreet: { src: "/images/about/brooklyn-street.jpg", alt: "Magnolias blooming on a Brooklyn brownstone block", aspect: "1/1" },
} as const;
