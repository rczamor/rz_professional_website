"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    function observeAll() {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
        // Mark as ready so CSS can apply initial hidden state
        el.classList.add("io-ready");
        io.observe(el);
      });
    }

    observeAll();

    // Watch for dynamically added .reveal elements — scope to main content container only.
    // Using a targeted container (never document.body) with debounce to avoid excessive firing.
    let debounceTimer: ReturnType<typeof setTimeout>;
    const mo = new MutationObserver(() => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(observeAll, 200);
    });
    const mainEl = document.querySelector("main");
    if (mainEl) {
      mo.observe(mainEl, { childList: true, subtree: true });
    }

    // Safety net: if any .reveal elements are still hidden after 3s, force them visible
    const safetyTimeout = setTimeout(() => {
      document.querySelectorAll(".reveal.io-ready:not(.visible)").forEach((el) => {
        el.classList.add("visible");
      });
    }, 3000);

    return () => {
      io.disconnect();
      mo.disconnect();
      clearTimeout(debounceTimer);
      clearTimeout(safetyTimeout);
    };
  }, []);

  return null;
}
