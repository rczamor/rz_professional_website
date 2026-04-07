"use client";

import { useEffect } from "react";

const THEME_ICONS: Record<string, string> = {
  night: "\u{1F319}",
  dawn: "\u{1F305}",
  day: "\u2600\uFE0F",
  dusk: "\u{1F306}",
};

const THEME_ORDER = ["night", "dawn", "day", "dusk"];

function getAutoTheme(): string {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const t = h + m / 60;

  if (t >= 20 || t < 5.5) return "night";
  if (t >= 5.5 && t < 8) return "dawn";
  if (t >= 8 && t < 17) return "day";
  return "dusk";
}

function applyTheme(theme: string) {
  document.documentElement.setAttribute("data-theme", theme);

  const toggleBtn = document.getElementById("theme-toggle");
  const phaseLabel = document.getElementById("phase-label");

  if (toggleBtn) toggleBtn.textContent = THEME_ICONS[theme] ?? THEME_ICONS.night;
  if (phaseLabel) phaseLabel.textContent = theme;
}

export default function ThemeEngine() {
  useEffect(() => {
    let manualTheme: string | null = null;

    // Restore persisted theme preference
    try {
      const stored = localStorage.getItem("rz-theme");
      if (stored && THEME_ORDER.includes(stored) && stored !== getAutoTheme()) {
        manualTheme = stored;
      }
    } catch {}

    function tick() {
      const theme = manualTheme ?? getAutoTheme();
      applyTheme(theme);
    }

    tick();
    const interval = setInterval(tick, 60_000);

    function handleToggleClick() {
      const current = document.documentElement.getAttribute("data-theme") ?? getAutoTheme();
      const idx = THEME_ORDER.indexOf(current);
      const next = THEME_ORDER[(idx + 1) % THEME_ORDER.length];

      if (next === getAutoTheme()) {
        manualTheme = null;
        try { localStorage.removeItem("rz-theme"); } catch {}
      } else {
        manualTheme = next;
        try { localStorage.setItem("rz-theme", next); } catch {}
      }

      applyTheme(manualTheme ?? getAutoTheme());
    }

    const toggleBtn = document.getElementById("theme-toggle");
    toggleBtn?.addEventListener("click", handleToggleClick);

    return () => {
      clearInterval(interval);
      toggleBtn?.removeEventListener("click", handleToggleClick);
    };
  }, []);

  return null;
}
