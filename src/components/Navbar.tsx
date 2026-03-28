"use client";

import { useState, useEffect } from "react";
import { navContent } from "@/content/nav";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-card-border transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          {navContent.brand}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navContent.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-wide text-muted hover:text-foreground transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={navContent.ctaHref}
            className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-colors"
          >
            {navContent.ctaLabel}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-card-border px-6 py-4 space-y-3">
          {navContent.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm tracking-wide text-muted hover:text-foreground transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href={navContent.ctaHref}
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center px-5 py-2 text-sm font-medium border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-colors"
          >
            {navContent.ctaLabel}
          </a>
        </div>
      )}
    </nav>
  );
}
