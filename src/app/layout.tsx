import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riché Zamor | VP of Product — Building AI-Native Data & Intelligence Platforms",
  description:
    "Riché Zamor is a VP of Product and AI Context Layers Architect who builds AI-native data & intelligence platforms across startups and enterprises.",
  openGraph: {
    title: "Riché Zamor | VP of Product",
    description:
      "Building AI-Native Data & Intelligence Platforms. AI Context Layers Architect.",
    type: "website",
    url: "https://richezamor.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
