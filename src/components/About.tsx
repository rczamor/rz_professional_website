export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Diagonal grid background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #999 1px, transparent 1px), linear-gradient(-45deg, #999 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-2">Who am I?</h2>
        <p className="text-xl md:text-2xl font-light text-center text-foreground/80 mb-12">
          Full-Stack Product Builder. 2x Founder. Husband. Father. Activist. Christian. Nerd 🤓
        </p>

        <div className="space-y-6 text-foreground/80 leading-relaxed text-base md:text-lg">
          <p>
            I am a full-stack product executive who builds and scales AI-powered data &amp;
            intelligence platforms across startups and enterprises.
          </p>
          <p>
            My expertise is in persistent Context Layers — RAG systems, agent memory &amp;
            orchestration, hybrid search, evals/guardrails/observability, and long-term context
            management — the stack that makes AI trustworthy at scale.
          </p>
          <p>
            At Suzy (Dec 2025–Present) I serve as VP Product, leading the company-wide pivot
            to a Decision Intelligence Platform and architecting an AI-native operating model
            (human + AI-agent specs, prototype-first development, daily North Star cycles).
          </p>

          <p>Previously:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              Grandstage Co-Founder/Head of Product — shipped three AI products including a
              market-intelligence answer engine (300% growth, $0 CAC).
            </li>
            <li>
              Helm Labs SVP &amp; GM — generated $3.25M pipeline and 105% margin growth.
            </li>
            <li>
              IBM Digital Product &amp; Growth Leader — drove 31% trial conversion lift and 30%
              onboarding improvement.
            </li>
          </ul>

          <p>
            I live in Brooklyn with my wife and two young children. When I&apos;m not shipping
            Context Layers, you&apos;ll find me strength training, photographing street scenes, or
            reading sci-fi.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/richezamorjr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors font-medium"
          >
            Find Me On LinkedIn &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
