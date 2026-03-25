import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Riché Zamor | VP of Product — Building AI-Native Intelligence Platforms",
  description:
    "Riché Zamor is a VP of Product who builds AI-native data & intelligence platforms. Specializing in Context Layers, RAG systems, and decision intelligence.",
  openGraph: {
    title: "Riché Zamor | VP of Product",
    description:
      "Building AI-Native Intelligence Platforms. Context Layers Architect.",
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
