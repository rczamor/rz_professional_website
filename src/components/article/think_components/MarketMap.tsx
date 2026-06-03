"use client";

import { useMemo, useState } from "react";
import { FLOORS, tierVariant } from "@/content/articles/ai-software-market-map/floors";

type FloorFilter = "all" | string;

const FILTERS: { id: FloorFilter; label: string }[] = [
  { id: "all", label: "All floors" },
  ...FLOORS.map((f) => ({ id: f.id, label: `${f.num} · ${f.label}` })),
];

/**
 * Interactive consolidation of all five floor rosters into one table: filter by
 * floor, search across companies and moves, tier shown as a colored chip. The
 * static per-floor FloorTables below remain the no-JS fallback and content
 * source — this is progressive enhancement layered on top.
 */
export default function MarketMap() {
  const [floor, setFloor] = useState<FloorFilter>("all");
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FLOORS.flatMap((f) =>
      f.rows
        .filter(() => floor === "all" || floor === f.id)
        .map((r) => ({ ...r, floorNum: f.num, floorLabel: f.label }))
    ).filter((r) => {
      if (!q) return true;
      return [r.company, r.group, r.tier, r.scale, r.move, r.floorLabel]
        .filter(Boolean)
        .some((v) => (v as string).toLowerCase().includes(q));
    });
  }, [floor, query]);

  return (
    <figure className="think-marketmap" aria-label="Interactive AI software market map">
      <div className="think-marketmap-controls">
        <div className="think-marketmap-tabs" role="tablist" aria-label="Filter by floor">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={floor === f.id}
              className={`think-marketmap-tab${floor === f.id ? " is-active" : ""}`}
              onClick={() => setFloor(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="think-marketmap-search">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search companies, tiers, moves…"
            aria-label="Search the market map"
          />
        </div>
      </div>

      <div className="think-marketmap-scroll">
        <table className="think-marketmap-table">
          <thead>
            <tr>
              <th scope="col">Floor</th>
              <th scope="col">Company</th>
              <th scope="col">Tier</th>
              <th scope="col">Scale</th>
              <th scope="col">90-day move</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={`${r.floorNum}-${r.company}`}>
                <td className="think-marketmap-floorcell">
                  <span className="think-marketmap-floornum">{r.floorNum}</span>
                  <span className="think-marketmap-floorlabel">{r.floorLabel}</span>
                </td>
                <th scope="row" className="think-marketmap-company">
                  {r.company}
                  {r.group && <span className="think-marketmap-tag">{r.group}</span>}
                </th>
                <td>
                  <span className="think-tier-chip" data-tier={tierVariant(r.tier)}>
                    {r.tier}
                  </span>
                </td>
                <td className="think-marketmap-scale">{r.scale}</td>
                <td className="think-marketmap-move">{r.move}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="think-marketmap-empty">
                  No companies match that search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <figcaption className="think-marketmap-note">
        Point-in-time as of early June 2026. An asterisk marks an estimate or
        unverified figure. Tier reflects market position, scale, and momentum —
        not a judgment of any company&rsquo;s architecture. The per-floor tables
        below are the full content source.
      </figcaption>
    </figure>
  );
}
