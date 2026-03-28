"use client";

import { useState } from "react";
import Image from "next/image";
import { heroContent } from "@/content/hero";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left content */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8 animate-[fadeIn_0.4s_ease_0.1s_both]">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
                {heroContent.sectionLabel}
              </span>
              <span className="h-px flex-1 bg-card-border" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8 animate-[fadeUp_0.6s_ease_0.2s_both]">
              {heroContent.headline}{" "}
              <span className="text-accent">{heroContent.highlightedWord}</span>{" "}
              {heroContent.headlineSuffix}
            </h1>

            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-12 animate-[fadeUp_0.6s_ease_0.35s_both]">
              {heroContent.description}
            </p>

            {/* Stats */}
            <div className="flex gap-12 animate-[fadeUp_0.6s_ease_0.5s_both]">
              {heroContent.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted tracking-[0.15em] uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - status card */}
          <div className="hidden lg:block animate-[fadeIn_0.8s_ease_0.4s_both]">
            <div className="bg-card-bg border border-card-border rounded-xl p-1 overflow-hidden">
              {!imgError ? (
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src="/images/headshot.jpg"
                    alt="Riché Zamor"
                    fill
                    className="object-cover object-top rounded-lg"
                    priority
                    onError={() => setImgError(true)}
                  />
                </div>
              ) : (
                <div className="aspect-[4/5] bg-gradient-to-br from-accent/20 to-background rounded-lg flex items-center justify-center">
                  <span className="text-6xl font-bold text-accent/40 tracking-tighter">
                    RZ
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
