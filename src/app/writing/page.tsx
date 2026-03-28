import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { writingContent } from "@/content/writing";

export default function Writing() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
            {writingContent.sectionLabel}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            {writingContent.headline}{" "}
            <span className="text-muted">{writingContent.headlineMuted}</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            {writingContent.description}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
