export interface ArticleMetadata {
  title: string;
  slug: string;
  excerpt: string;
  pillar: "context-intelligence" | "product-management" | "leadership";
  date: string;
  readTime: string;
  badge: string;
  badgeVariant?: "product" | "leadership";
  featured?: boolean;
  comingSoon?: boolean;
}

export interface CaseStudy {
  company: string;
  role: string;
  period: string;
  type: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  whatIBuilt: string;
  contextConnection: string;
  subEntries?: { role: string; period: string; description: string }[];
}

export interface ProjectCard {
  title: string;
  status: "Live" | "In Development" | "Prototype" | "Coming Soon";
  description: string;
  link?: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface TimelineEntry {
  years: string;
  title: string;
  company: string;
  description: string;
}

export interface SpeakingEntry {
  title: string;
  description: string;
}

export interface CapabilityCard {
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialSlide {
  company: string;
  metricValue: string;
  metricLabel: string;
  quote: string;
  author: string;
  authorRole: string;
}

export interface EngagementCard {
  icon: string;
  title: string;
  description: string;
}

export interface ThesisStep {
  number: number;
  title: string;
  description: string;
}

export interface StatCard {
  value: string;
  label: string;
  source?: string;
}

export interface LogoEntry {
  name: string;
  description: string;
  svgFile: string;
  sizeClass?: "sq" | "w" | "full";
}
