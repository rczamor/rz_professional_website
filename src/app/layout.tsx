import type { Metadata } from "next";
import "./globals.css";
import { metaContent } from "@/content/meta";

export const metadata: Metadata = {
  title: metaContent.title,
  description: metaContent.description,
  openGraph: {
    title: metaContent.ogTitle,
    description: metaContent.ogDescription,
    type: "website",
    url: metaContent.siteUrl,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metaContent.jsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
