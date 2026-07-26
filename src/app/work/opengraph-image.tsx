import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og-card";

export const alt = "Work — Riché Zamor";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgCard({
    eyebrow: "Selected Work",
    title: "Context architecture, shipped",
    subtitle:
      "Case studies from Suzy, Grandstage, Helm Labs, and IBM — what got built and what it moved.",
    path: "/work",
  });
}
