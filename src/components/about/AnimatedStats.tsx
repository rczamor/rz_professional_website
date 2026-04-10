"use client";

import { useEffect, useRef, useState } from "react";

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
  { end: 1, suffix: " Exit", label: "" },
];

const statsRow2: Stat[] = [
  { end: 2, label: "Kids" },
  { end: 11, label: "Cities Lived In" },
  { end: 4, label: "Careers (Maybe 5)" },
  { end: 1400, suffix: " lb", label: "Powerlifting Total" },
];

function useCountUp(end: number, trigger: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

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
  }, [trigger, end, duration]);

  return count;
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
        {count.toLocaleString()}
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
