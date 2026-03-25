import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riche Zamor: Product & Growth Leader | I Build Intelligent GTM & CX Platforms",
  description:
    "Riche Zamor is a seasoned product leader who builds AI-powered GTM, CX, and Growth systems to empower marketing, sales, and customer success teams.",
  openGraph: {
    title: "Riche Zamor: Product & Growth Leader",
    description:
      "I build AI-powered GTM, CX, and Growth systems to empower marketing, sales, and customer success teams.",
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
