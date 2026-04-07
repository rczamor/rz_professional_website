"use client";

import { useEffect } from "react";

export default function GSAPAnimations() {
  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | null = null;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        /* =========================================================
           1. Five-Step Context Pipeline — sequential scroll reveal
           ========================================================= */
        const flowSteps = gsap.utils.toArray<HTMLElement>(".flow-step");
        if (flowSteps.length) {
          // Reset any CSS-based visibility so GSAP can control
          gsap.set(flowSteps, { opacity: 0, x: -30 });
          gsap.set(".flow-skip", { opacity: 0, y: 20 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".context-flow",
              start: "top 80%",
              once: true,
            },
          });

          flowSteps.forEach((step, i) => {
            tl.to(
              step,
              {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: "power2.out",
              },
              i * 0.15
            );
          });

          tl.to(
            ".flow-skip",
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            flowSteps.length * 0.15 + 0.1
          );
        }

        /* =========================================================
           2. Hero stat cards — staggered entry (50ms offset)
           ========================================================= */
        const statCards = gsap.utils.toArray<HTMLElement>(".hero-stat");
        if (statCards.length) {
          // The parent .hero-stats already has a CSS animation; override it
          gsap.set(".hero-stats", { opacity: 1, animation: "none" });
          gsap.set(statCards, { opacity: 0, y: 30 });

          gsap.to(statCards, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.05,
            delay: 0.6,
          });
        }

        /* =========================================================
           3. Proof logos — cascade animation
           ========================================================= */
        const proofLogos = gsap.utils.toArray<HTMLElement>(".proof-logos img");
        if (proofLogos.length) {
          gsap.set(proofLogos, { opacity: 0, scale: 0.8 });

          gsap.to(proofLogos, {
            opacity: 0.35,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.4)",
            stagger: 0.06,
            scrollTrigger: {
              trigger: ".proof-logos",
              start: "top 85%",
              once: true,
            },
          });
        }

        /* =========================================================
           4. Capability cards — staggered with slight scale
           ========================================================= */
        const capCards = gsap.utils.toArray<HTMLElement>(".capability-card");
        if (capCards.length) {
          gsap.set(capCards, { opacity: 0, y: 40, scale: 0.95 });

          ScrollTrigger.create({
            trigger: ".capabilities-grid",
            start: "top 80%",
            once: true,
            onEnter: () => {
              gsap.to(capCards, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
              });
            },
          });
        }

        /* =========================================================
           5. Work cards — slide-in from alternating sides
           ========================================================= */
        const workCards = gsap.utils.toArray<HTMLElement>(".work-card");
        workCards.forEach((card, i) => {
          const fromX = i % 2 === 0 ? -60 : 60;
          gsap.set(card, { opacity: 0, x: fromX });

          gsap.to(card, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          });
        });

        /* =========================================================
           6. Hero parallax — text layer vs canvas
           ========================================================= */
        const heroContent = document.querySelector<HTMLElement>(".hero-content");
        if (heroContent) {
          gsap.to(heroContent, {
            y: -60,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        }

        const heroCanvas = document.querySelector<HTMLElement>("#hero-canvas");
        if (heroCanvas) {
          gsap.to(heroCanvas, {
            y: 40,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        }

        /* =========================================================
           7. CTA box — subtle zoom-in on scroll entry
           ========================================================= */
        const ctaBox = document.querySelector<HTMLElement>(".cta-box");
        if (ctaBox) {
          gsap.set(ctaBox, { scale: 0.92, opacity: 0 });

          gsap.to(ctaBox, {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaBox,
              start: "top 85%",
              once: true,
            },
          });
        }

        /* =========================================================
           8. Why cards — staggered fade-up
           ========================================================= */
        const whyCards = gsap.utils.toArray<HTMLElement>(".why-card");
        if (whyCards.length) {
          gsap.set(whyCards, { opacity: 0, y: 40 });

          ScrollTrigger.create({
            trigger: ".why-grid",
            start: "top 80%",
            once: true,
            onEnter: () => {
              gsap.to(whyCards, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
              });
            },
          });
        }

        /* =========================================================
           9. Section intros — enhanced reveal (thesis, capabilities, work, why)
           ========================================================= */
        const sectionReveals = gsap.utils.toArray<HTMLElement>(
          ".thesis-grid.reveal, .capabilities-intro.reveal, .work-intro.reveal, .why-intro.reveal, .work-cta.reveal"
        );
        sectionReveals.forEach((el) => {
          // Let GSAP handle these instead of the IntersectionObserver
          gsap.set(el, { opacity: 0, y: 30 });
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              once: true,
            },
          });
        });
      });
    }

    // Only run on the home page
    const isHome =
      typeof window !== "undefined" &&
      (window.location.pathname === "/" ||
        window.location.pathname === "/index.html");
    if (isHome) {
      init();
    }

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return null;
}
