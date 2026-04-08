"use client";

import { useRef, useEffect } from "react";
import * as d3 from "d3";

interface FlowStep {
  label: string;
  description?: string;
}

interface FlowDiagramProps {
  steps: FlowStep[];
  highlightIndex?: number;
  className?: string;
}

export default function FlowDiagram({
  steps,
  highlightIndex,
  className,
}: FlowDiagramProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || steps.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const nodeW = 160;
    const nodeH = 56;
    const gap = 60;
    const totalW = steps.length * nodeW + (steps.length - 1) * gap;
    const height = 120;

    svg.attr("viewBox", `0 0 ${totalW} ${height}`);

    const g = svg.append("g").attr("transform", `translate(0, ${(height - nodeH) / 2})`);

    steps.forEach((step, i) => {
      const x = i * (nodeW + gap);
      const isHighlight = highlightIndex === i;

      // Connector arrow
      if (i > 0) {
        const prevX = (i - 1) * (nodeW + gap) + nodeW;
        g.append("line")
          .attr("x1", prevX + 4)
          .attr("y1", nodeH / 2)
          .attr("x2", x - 4)
          .attr("y2", nodeH / 2)
          .attr("stroke", "var(--accent)")
          .attr("stroke-width", 2)
          .attr("marker-end", "url(#arrow)");
      }

      // Node
      g.append("rect")
        .attr("x", x)
        .attr("y", 0)
        .attr("width", nodeW)
        .attr("height", nodeH)
        .attr("rx", 10)
        .attr("fill", isHighlight ? "var(--accent)" : "var(--bg-card)")
        .attr("stroke", isHighlight ? "var(--accent)" : "var(--border-subtle)")
        .attr("stroke-width", 1.5);

      g.append("text")
        .attr("x", x + nodeW / 2)
        .attr("y", nodeH / 2)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "central")
        .attr("fill", isHighlight ? "#fff" : "var(--text-primary)")
        .style("font-size", "13px")
        .style("font-weight", "600")
        .style("font-family", "var(--font-sans)")
        .text(step.label);
    });

    // Arrow marker
    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrow")
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 10)
      .attr("refY", 5)
      .attr("markerWidth", 8)
      .attr("markerHeight", 8)
      .attr("orient", "auto-start-reverse")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .attr("fill", "var(--accent)");
  }, [steps, highlightIndex]);

  return (
    <div className={className} style={{ width: "100%", overflowX: "auto" }}>
      <svg ref={svgRef} style={{ width: "100%", height: "auto", minWidth: 400 }} />
    </div>
  );
}
