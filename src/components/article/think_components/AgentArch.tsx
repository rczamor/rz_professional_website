interface AgentNode {
  name: string;
  role?: string;
}

interface LayerDef {
  label: string;
  sublabel?: string;
  lead?: AgentNode;
  agents: AgentNode[];
  infra?: string[];
}

interface AgentArchProps {
  strategic: LayerDef;
  execution: LayerDef;
  bridge?: string;
}

export default function AgentArch({ strategic, execution, bridge }: AgentArchProps) {
  return (
    <div className="think-arch" role="img" aria-label="Two-layer agent architecture diagram">
      <div className="think-arch-layer strategic">
        <div className="think-arch-head">
          <div className="think-arch-label">{strategic.label}</div>
          {strategic.sublabel && (
            <div className="think-arch-sub">{strategic.sublabel}</div>
          )}
        </div>
        <div className="think-arch-grid">
          {strategic.agents.map((a) => (
            <div key={a.name} className="think-arch-cell">
              <div className="think-arch-cell-name">{a.name}</div>
              {a.role && <div className="think-arch-cell-role">{a.role}</div>}
            </div>
          ))}
        </div>
      </div>

      {bridge && (
        <div className="think-arch-bridge" aria-hidden="true">
          <span className="think-arch-bridge-line" />
          <span className="think-arch-bridge-text">{bridge}</span>
          <span className="think-arch-bridge-line" />
        </div>
      )}

      <div className="think-arch-layer execution">
        <div className="think-arch-head">
          <div className="think-arch-label">{execution.label}</div>
          {execution.sublabel && (
            <div className="think-arch-sub">{execution.sublabel}</div>
          )}
        </div>
        {execution.lead && (
          <div className="think-arch-lead">
            <div className="think-arch-lead-tag">Orchestrator</div>
            <div className="think-arch-lead-name">{execution.lead.name}</div>
            {execution.lead.role && (
              <div className="think-arch-lead-role">{execution.lead.role}</div>
            )}
          </div>
        )}
        <div className="think-arch-grid nine">
          {execution.agents.map((a) => (
            <div key={a.name} className="think-arch-cell">
              <div className="think-arch-cell-name">{a.name}</div>
              {a.role && <div className="think-arch-cell-role">{a.role}</div>}
            </div>
          ))}
        </div>
        {execution.infra && execution.infra.length > 0 && (
          <div className="think-arch-infra">
            <span className="think-arch-infra-label">Shared infra</span>
            <ul>
              {execution.infra.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
