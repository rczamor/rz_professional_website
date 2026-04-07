import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "@/styles/globals.css";
import ThemeEngine from "@/components/ThemeEngine";
import ScrollReveal from "@/components/ScrollReveal";
import NavScroll from "@/components/NavScroll";
import TopBanner from "@/components/TopBanner";

const bricolage = Bricolage_Grotesque({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Riche Zamor — VP of Product. 2x Founder. Context Architect.",
  description:
    "Riche Zamor is a context architect and VP of Product who designs how organizations structure knowledge for AI-driven decision-making.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="night"
      suppressHydrationWarning={true}
      className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%237B7FE4'/><text x='50' y='68' font-family='system-ui' font-size='55' font-weight='bold' fill='white' text-anchor='middle'>R</text></svg>"
        />
      </head>
      <body
        className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable} has-top-banner`}
      >
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <TopBanner />
        <div className="ambient-bg" />
        <ThemeEngine />
        <ScrollReveal />
        <NavScroll />
        {children}
        <Script
          id="hs-script-loader"
          src="//js-na2.hs-scripts.com/245808914.js"
          strategy="afterInteractive"
        />
      </body>
      <GoogleAnalytics gaId="G-7G0V8D1W2M" />
    </html>
  );
}
