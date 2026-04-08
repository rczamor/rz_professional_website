"use client";

import { useRef, useEffect } from "react";
import * as d3 from "d3";

interface BarChartProps {
  data: { label: string; value: number }[];
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export default function BarChart({
  data,
  width = 600,
  height = 320,
  color = "var(--accent)",
  className,
}: BarChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 20, bottom: 40, left: 50 };
    const w = width - margin.left - margin.right;
    const h = height - margin.top - margin.bottom;

    const g = svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, w])
      .padding(0.3);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) ?? 0])
      .nice()
      .range([h, 0]);

    // X axis
    g.append("g")
      .attr("transform", `translate(0,${h})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("fill", "var(--text-secondary)")
      .style("font-size", "12px");

    // Y axis
    g.append("g")
      .call(d3.axisLeft(y).ticks(5))
      .selectAll("text")
      .attr("fill", "var(--text-secondary)")
      .style("font-size", "12px");

    // Grid lines
    g.selectAll(".grid-line")
      .data(y.ticks(5))
      .join("line")
      .attr("class", "grid-line")
      .attr("x1", 0)
      .attr("x2", w)
      .attr("y1", (d) => y(d))
      .attr("y2", (d) => y(d))
      .attr("stroke", "var(--border-subtle)")
      .attr("stroke-dasharray", "3,3");

    // Bars
    g.selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.label) ?? 0)
      .attr("y", h)
      .attr("width", x.bandwidth())
      .attr("height", 0)
      .attr("rx", 4)
      .attr("fill", color)
      .attr("opacity", 0.85)
      .transition()
      .duration(600)
      .delay((_, i) => i * 80)
      .attr("y", (d) => y(d.value))
      .attr("height", (d) => h - y(d.value));

    // Style axis lines
    svg.selectAll(".domain, .tick line").attr("stroke", "var(--border-subtle)");
  }, [data, width, height, color]);

  return (
    <div className={className} style={{ width: "100%", maxWidth: width }}>
      <svg ref={svgRef} style={{ width: "100%", height: "auto" }} />
    </div>
  );
}
