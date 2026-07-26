import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og-card";

export const alt = "About Riché Zamor — Context Architect & VP of Product";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgCard({
    eyebrow: "About",
    title: "Riché Zamor",
    subtitle:
      "VP of Product, 2x founder, context architect. 20 years turning raw data into decision-ready context.",
    path: "/about",
  });
}
