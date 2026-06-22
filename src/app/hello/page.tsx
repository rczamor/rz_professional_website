import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello World — Riché Zamor",
  robots: { index: false, follow: false },
};

export default function HelloPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="hero hero-centered">
          <div className="container">
            <h1>Hello World</h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
