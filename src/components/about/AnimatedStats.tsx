"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * False while server-rendering and through the hydration pass, true afterwards.
 *
 * This is what lets the markup carry the real stat values while the browser
 * still gets the count-up animation: `useSyncExternalStore` is allowed to
 * return a different value on the server than on the client without tripping a
 * hydration mismatch, and it flips without a setState-in-effect cascade.
 */
function useHydrated(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
}

/** Live `prefers-reduced-motion` subscription — a genuine external store. */
function usePrefersReducedMotion(): boolean {
  const subscribe = useCallback((onChange: () => void) => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

interface Stat {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
}

const statsRow1: Stat[] = [
  { end: 20, suffix: "+", label: "Years Building" },
  { end: 200, suffix: "+", label: "Apps Built" },
  { end: 4, label: "Companies Started" },
  { end: 1, label: "Exit" },
];

const statsRow2: Stat[] = [
  { end: 11, label: "Cities Lived In" },
  { end: 4, label: "Careers (Maybe 5)" },
  { end: 2, label: "Kids" },
  { end: 1400, suffix: " lb", label: "Powerlifting Total" },
];

/**
 * Renders the true value in the server HTML and animates only in the browser.
 *
 * The stats are the page's credibility proof points, and crawlers that don't
 * execute JS (GPTBot, PerplexityBot) read the markup as-is — so a counter that
 * starts life at `0` publishes actively wrong numbers rather than merely
 * missing ones. The count-up is layered on top as progressive enhancement.
 */
function useCountUp(end: number, trigger: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  const hydrated = useHydrated();
  const reducedMotion = usePrefersReducedMotion();
  const animates = hydrated && !reducedMotion;

  useEffect(() => {
    if (!animates || !trigger) return;

    let current = 0;
    const increment = end / (duration / 16);
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [animates, trigger, end, duration]);

  // Until the animation owns the number, show the real one.
  return animates && trigger ? count : end;
}

function StatItem({
  stat,
  trigger,
}: {
  stat: Stat;
  trigger: boolean;
}) {
  const count = useCountUp(stat.end, trigger, stat.duration);

  return (
    <div>
      <div className="about-stat-number">
        {stat.prefix}
        {/* Pinned locale: the server formats with Node's locale and the client
            with the visitor's. Now that the pre-animation value is the real
            number rather than 0, an unpinned toLocaleString ("1,400" vs
            "1.400") would desync hydration. */}
        {count.toLocaleString("en-US")}
        {stat.suffix}
      </div>
      <div className="about-stat-label">{stat.label}</div>
    </div>
  );
}

export function AnimatedStats() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const [row1Visible, setRow1Visible] = useState(false);
  const [row2Visible, setRow2Visible] = useState(false);

  // No fallback needed when IntersectionObserver is unavailable: `useCountUp`
  // renders the real value until the animation actually takes over, so a
  // trigger that never fires degrades to the correct numbers.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === row1Ref.current) setRow1Visible(true);
            if (entry.target === row2Ref.current) setRow2Visible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (row1Ref.current) observer.observe(row1Ref.current);
    if (row2Ref.current) observer.observe(row2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="about-stats-grid" ref={row1Ref}>
        {statsRow1.map((stat) => (
          <StatItem key={stat.label} stat={stat} trigger={row1Visible} />
        ))}
      </div>
      <div className="about-stats-grid" style={{ marginTop: 48 }} ref={row2Ref}>
        {statsRow2.map((stat) => (
          <StatItem key={stat.label} stat={stat} trigger={row2Visible} />
        ))}
      </div>
    </div>
  );
}
