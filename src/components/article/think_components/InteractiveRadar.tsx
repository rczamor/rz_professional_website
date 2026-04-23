"use client";

import { useState } from "react";

interface RadarPreset {
  label: string;
  values: number[]; // 0-1 per axis
}

interface InteractiveRadarProps {
  axes: string[];
  presets: RadarPreset[];
}

function polarToCart(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function InteractiveRadar({ axes, presets }: InteractiveRadarProps) {
  const [active, setActive] = useState(0);
  const cx = 250, cy = 250, maxR = 200;
  const step = 360 / axes.length;
  const rings = [0.25, 0.5, 0.75, 1];
  const values = presets[active]?.values ?? axes.map(() => 0);

  const points = values
    .map((v, i) => polarToCart(cx, cy, maxR * v, step * i))
    .map((p) => `${p.x},${p.y}`)
    .join(" ");

  return (
    <div className="think-radar">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        {/* Grid rings */}
        {rings.map((r) => (
          <polygon
            key={r}
            points={axes
              .map((_, i) => {
                const p = polarToCart(cx, cy, maxR * r, step * i);
                return `${p.x},${p.y}`;
              })
              .join(" ")}
            fill="none"
            stroke="var(--border-subtle)"
            strokeWidth="1"
          />
        ))}
        {/* Axis lines */}
        {axes.map((_, i) => {
          const p = polarToCart(cx, cy, maxR, step * i);
          return (
            <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="var(--border-subtle)" strokeWidth="1" />
          );
        })}
        {/* Axis labels */}
        {axes.map((label, i) => {
          const p = polarToCart(cx, cy, maxR + 28, step * i);
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--text-tertiary)"
              fontFamily="var(--font-mono)"
              fontSize="11"
            >
              {label}
            </text>
          );
        })}
        {/* Data polygon */}
        <polygon
          points={points}
          fill="var(--accent-dim)"
          stroke="var(--accent)"
          strokeWidth="2"
          style={{ transition: "all 0.4s ease" }}
        />
        {/* Data points */}
        {values.map((v, i) => {
          const p = polarToCart(cx, cy, maxR * v, step * i);
          return (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="4"
              fill="var(--accent)"
              style={{ transition: "all 0.4s ease" }}
            />
          );
        })}
      </svg>
      <div className="think-radar-presets">
        {presets.map((preset, i) => (
          <button
            key={i}
            className={`think-radar-btn${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
}
