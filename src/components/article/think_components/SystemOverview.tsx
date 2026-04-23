"use client";

import { useEffect, useRef, useState } from "react";

export default function SystemOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure
      ref={ref}
      className={`think-sysmap${inView ? " in-view" : ""}`}
      role="img"
      aria-labelledby="sysmap-title"
    >
      <figcaption id="sysmap-title" className="think-sysmap-caption">
        <span className="think-sysmap-caption-eyebrow">The System</span>
        <span className="think-sysmap-caption-title">
          How a ticket moves through the 14-agent team
        </span>
      </figcaption>

      <ol className="think-sysmap-flow">
        <li
          className="think-sysmap-node human"
          style={{ ["--d" as string]: "0ms" }}
        >
          <span className="think-sysmap-step">01</span>
          <div className="think-sysmap-body">
            <span className="think-sysmap-kicker">Human entry</span>
            <span className="think-sysmap-title">Riché</span>
            <span className="think-sysmap-meta">Sets Linear ticket status</span>
          </div>
        </li>

        <li
          className="think-sysmap-node linear"
          style={{ ["--d" as string]: "80ms" }}
        >
          <span className="think-sysmap-step">02</span>
          <div className="think-sysmap-body">
            <span className="think-sysmap-kicker">Roadmap + planning</span>
            <span className="think-sysmap-title">Linear</span>
            <div className="think-sysmap-badges">
              <span className="think-sysmap-badge">Ready for Claude routines</span>
              <span className="think-sysmap-badge">Ready for agent build</span>
            </div>
            <span className="think-sysmap-meta">
              Per-app projects · <code>type:*</code> labels
            </span>
          </div>
        </li>

        <li
          className="think-sysmap-node router"
          style={{ ["--d" as string]: "160ms" }}
        >
          <span className="think-sysmap-step">03</span>
          <div className="think-sysmap-body">
            <span className="think-sysmap-kicker">Integration glue</span>
            <span className="think-sysmap-title">n8n webhook router</span>
            <span className="think-sysmap-meta">
              Branches on Linear status value
            </span>
          </div>
        </li>

        <li
          className="think-sysmap-fork"
          style={{ ["--d" as string]: "240ms" }}
        >
          <div className="think-sysmap-arm strategic">
            <span className="think-sysmap-arm-step">04a</span>
            <div className="think-sysmap-arm-head">
              <span className="think-sysmap-kicker">Strategic layer</span>
              <span className="think-sysmap-title">4 Claude Code Routines</span>
              <span className="think-sysmap-meta">
                Anthropic cloud · Opus 4.7 · 15 runs/day cap
              </span>
            </div>
            <ul className="think-sysmap-pills">
              <li>Technical Architect</li>
              <li>Analyst</li>
              <li>User Researcher</li>
              <li>AI Researcher</li>
            </ul>
            <span className="think-sysmap-arm-trigger">
              <span className="think-sysmap-arm-trigger-label">Trigger</span>
              <code>POST /routines/{"{id}"}/fire</code>
            </span>
          </div>

          <div className="think-sysmap-arm execution">
            <span className="think-sysmap-arm-step">04b</span>
            <div className="think-sysmap-arm-head">
              <span className="think-sysmap-kicker">Execution layer</span>
              <span className="think-sysmap-title">
                10 OpenClaw agents on VPS
              </span>
              <span className="think-sysmap-meta">
                Hostinger VPS · Kimi K2.6 end-to-end
              </span>
            </div>
            <ul className="think-sysmap-pills">
              <li className="lead">Conductor</li>
              <li>AI Engineer</li>
              <li>PM-lite</li>
              <li>Designer</li>
              <li>Backend</li>
              <li>Data</li>
              <li>UI</li>
              <li>QA</li>
              <li>DevOps</li>
              <li>Tech Writer</li>
            </ul>
            <span className="think-sysmap-arm-trigger">
              <span className="think-sysmap-arm-trigger-label">Trigger</span>
              Paperclip task, Conductor picks it up
            </span>
          </div>
        </li>

        <li
          className="think-sysmap-shared"
          style={{ ["--d" as string]: "360ms" }}
        >
          <span className="think-sysmap-step">05</span>
          <div className="think-sysmap-body">
            <span className="think-sysmap-kicker">Shared infrastructure</span>
            <span className="think-sysmap-title">
              Memory, comms, experiments
            </span>
            <ul className="think-sysmap-infra">
              <li>
                <span className="think-sysmap-infra-name">Postgres</span>
                <span className="think-sysmap-infra-desc">
                  agent_memory, per-app
                </span>
              </li>
              <li>
                <span className="think-sysmap-infra-name">Slack</span>
                <span className="think-sysmap-infra-desc">
                  Per-app agent channels
                </span>
              </li>
              <li>
                <span className="think-sysmap-infra-name">GrowthBook</span>
                <span className="think-sysmap-infra-desc">
                  Experimentation, flags
                </span>
              </li>
            </ul>
          </div>
        </li>

        <li
          className="think-sysmap-row-group deliverables"
          style={{ ["--d" as string]: "440ms" }}
        >
          <span className="think-sysmap-step">06</span>
          <div className="think-sysmap-body">
            <span className="think-sysmap-kicker">Deliverables</span>
            <ul className="think-sysmap-tiles">
              <li className="think-sysmap-tile delivery">
                <span className="think-sysmap-tile-name">Notion</span>
                <span className="think-sysmap-tile-desc">
                  Research, architecture, design specs
                </span>
              </li>
              <li className="think-sysmap-tile delivery">
                <span className="think-sysmap-tile-name">GitHub</span>
                <span className="think-sysmap-tile-desc">
                  PR on <code>claude/*</code> · AI Engineer only
                </span>
              </li>
              <li className="think-sysmap-tile delivery">
                <span className="think-sysmap-tile-name">Linear comment</span>
                <span className="think-sysmap-tile-desc">
                  Summary · trace URL · artifact links
                </span>
              </li>
            </ul>
          </div>
        </li>

        <li
          className="think-sysmap-row-group observability"
          style={{ ["--d" as string]: "520ms" }}
        >
          <span className="think-sysmap-step">07</span>
          <div className="think-sysmap-body">
            <span className="think-sysmap-kicker">Observability</span>
            <ul className="think-sysmap-tiles">
              <li className="think-sysmap-tile obs">
                <span className="think-sysmap-tile-name">Langfuse</span>
                <span className="think-sysmap-tile-desc">
                  LLM traces · both layers · cost, latency
                </span>
              </li>
              <li className="think-sysmap-tile obs">
                <span className="think-sysmap-tile-name">Paperclip audit</span>
                <span className="think-sysmap-tile-desc">
                  Agent tasks, handoffs · execution layer only
                </span>
              </li>
            </ul>
          </div>
        </li>

        <li
          className="think-sysmap-node close"
          style={{ ["--d" as string]: "600ms" }}
        >
          <span className="think-sysmap-step">08</span>
          <div className="think-sysmap-body">
            <span className="think-sysmap-kicker">Loop closed</span>
            <span className="think-sysmap-title">
              Linear ticket updated or closed
            </span>
            <span className="think-sysmap-meta">
              Conductor or routine posts the summary comment; Riché reviews
            </span>
          </div>
        </li>
      </ol>

      <aside
        className="think-sysmap-escalation"
        style={{ ["--d" as string]: "680ms" }}
      >
        <span className="think-sysmap-escalation-kicker">Side path</span>
        <span className="think-sysmap-escalation-title">
          Strategic decisions escalate back to Riché
        </span>
        <span className="think-sysmap-escalation-body">
          When a running routine hits a product tradeoff or missing context, it
          creates a new Linear ticket tagged <code>type:strategy-decision</code>,
          assigned to Riché. Work pauses until Riché flips the status.
        </span>
      </aside>
    </figure>
  );
}
