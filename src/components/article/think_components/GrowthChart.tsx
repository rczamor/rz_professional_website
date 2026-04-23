interface DataPoint {
  label: string;
  value: number;
}

interface Annotation {
  index: number;
  text: string;
}

interface GrowthChartProps {
  title?: string;
  data: DataPoint[];
  annotations?: Annotation[];
  height?: number;
}

export default function GrowthChart({
  title,
  data,
  annotations = [],
  height = 300,
}: GrowthChartProps) {
  const pad = { top: 20, right: 20, bottom: 40, left: 50 };
  const w = 700;
  const h = height;
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;
  const maxVal = Math.max(...data.map((d) => d.value));
  const yMax = Math.ceil(maxVal * 1.15);

  const pts = data.map((d, i) => ({
    x: pad.left + (i / (data.length - 1)) * plotW,
    y: pad.top + plotH - (d.value / yMax) * plotH,
  }));

  const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");

  const gridLines = [0, 0.25, 0.5, 0.75, 1].map((pct) => ({
    y: pad.top + plotH - pct * plotH,
    label: Math.round(pct * yMax).toString(),
  }));

  return (
    <div className="think-growth-chart">
      {title && <h4>{title}</h4>}
      <svg viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg">
        {/* Grid lines */}
        {gridLines.map((g, i) => (
          <g key={i}>
            <line x1={pad.left} y1={g.y} x2={w - pad.right} y2={g.y} className="grid-line" />
            <text x={pad.left - 8} y={g.y + 4} className="axis-label" textAnchor="end">
              {g.label}
            </text>
          </g>
        ))}
        {/* X-axis labels */}
        {data.map((d, i) => (
          <text
            key={i}
            x={pts[i].x}
            y={h - 8}
            className="axis-label"
            textAnchor="middle"
          >
            {d.label}
          </text>
        ))}
        {/* Line */}
        <path d={linePath} className="growth-line" />
        {/* Points */}
        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" fill="var(--accent)" />
        ))}
        {/* Annotations */}
        {annotations.map((a, i) => {
          const pt = pts[a.index];
          if (!pt) return null;
          return (
            <text key={i} x={pt.x} y={pt.y - 16} className="annotation" textAnchor="middle">
              {a.text}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
