import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og-card";

export const alt = "Contact Riché Zamor";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgCard({
    eyebrow: "Get in touch",
    title: "Let's talk context",
    subtitle:
      "Advisory, board work, speaking, and AI product strategy engagements.",
    path: "/contact",
  });
}
