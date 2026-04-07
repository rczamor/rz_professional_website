"use client";

import { useEffect } from "react";

export default function NavScroll() {
  useEffect(() => {
    function onScroll() {
      const nav = document.querySelector("nav");
      if (!nav) return;

      if (window.scrollY > 80) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
