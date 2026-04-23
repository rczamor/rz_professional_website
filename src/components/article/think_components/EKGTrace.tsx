"use client";

import { useEffect, useRef } from "react";

interface EKGTraceProps {
  speed?: number;
  color?: string;
}

export default function EKGTrace({ speed = 2, color = "#10b981" }: EKGTraceProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const w = 800;
    const h = 120;
    const mid = h / 2;

    // EKG waveform: flat, P-wave, flat, QRS, flat, T-wave, flat
    function ekgY(x: number): number {
      const cycle = x % 200;
      if (cycle < 40) return mid;
      if (cycle < 55) return mid - Math.sin(((cycle - 40) / 15) * Math.PI) * 8;
      if (cycle < 70) return mid;
      if (cycle < 78) return mid + ((cycle - 70) / 8) * 10;
      if (cycle < 86) return mid - 40 + ((cycle - 78) / 8) * 40;
      if (cycle < 94) return mid + ((94 - cycle) / 8) * 15;
      if (cycle < 110) return mid;
      if (cycle < 135) return mid - Math.sin(((cycle - 110) / 25) * Math.PI) * 12;
      return mid;
    }

    let offset = 0;
    let animId: number;

    function draw() {
      const path = svg?.querySelector(".think-ekg-trace") as SVGPathElement | null;
      if (!path) return;

      let d = "";
      for (let x = 0; x <= w; x += 2) {
        const y = ekgY(x + offset);
        d += x === 0 ? `M0,${y}` : ` L${x},${y}`;
      }
      path.setAttribute("d", d);
      offset += speed;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animId);
  }, [speed]);

  return (
    <div className="think-ekg">
      <svg ref={svgRef} viewBox="0 0 800 120" xmlns="http://www.w3.org/2000/svg">
        {/* Grid */}
        {Array.from({ length: 7 }, (_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={i * 20}
            x2={800}
            y2={i * 20}
            className="think-ekg-grid"
          />
        ))}
        {Array.from({ length: 41 }, (_, i) => (
          <line
            key={`v${i}`}
            x1={i * 20}
            y1={0}
            x2={i * 20}
            y2={120}
            className="think-ekg-grid"
          />
        ))}
        <path className="think-ekg-trace" style={{ stroke: color }} />
      </svg>
    </div>
  );
}
