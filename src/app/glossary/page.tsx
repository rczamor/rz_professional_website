import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { glossaryTerms } from "@/content/glossary";

export const metadata: Metadata = {
  title: "Glossary — Context Architecture Terms | Riche Zamor",
  description:
    "Definitions of key terms in context architecture by Riche Zamor: context mapping, knowledge flow design, curation, synthesis, consolidation, and more.",
  openGraph: {
    title: "Glossary — Context Architecture Terms | Riche Zamor",
    description:
      "Definitions of key terms in context architecture by Riche Zamor.",
    url: "https://richezamor.com/glossary",
    type: "website",
    images: ["https://richezamor.com/og-image.png"],
    siteName: "Riche Zamor",
  },
  twitter: {
    card: "summary_large_image",
    site: "@richezamor",
    title: "Glossary — Context Architecture Terms | Riche Zamor",
    description:
      "Definitions of key terms in context architecture by Riche Zamor.",
    images: ["https://richezamor.com/og-image.png"],
  },
  alternates: { canonical: "https://richezamor.com/glossary" },
};

export default function GlossaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Context Architecture Glossary",
    description:
      "Key terms and definitions from the field of context architecture, as defined by Riche Zamor.",
    url: "https://richezamor.com/glossary",
    hasDefinedTerm: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
    })),
  };

  return (
    <>
      <Nav activePage="thinking" />

      <main id="main-content">
        <section className="hero hero-centered">
          <div className="container">
            <h1>
              Context Architecture <span className="highlight">Glossary</span>
            </h1>
            <p className="hero-sub">
              Key terms and definitions from the field of context architecture.
            </p>
          </div>
        </section>

        <section style={{ padding: "0 0 80px" }}>
          <div className="container">
            <article>
              <dl className="glossary-list">
                {glossaryTerms.map((t) => (
                  <div
                    key={t.term}
                    className="glossary-entry reveal"
                    id={t.term
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/-$/, "")}
                  >
                    <dt>{t.term}</dt>
                    <dd>{t.definition}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
