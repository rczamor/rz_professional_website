interface FailureSignatureProps {
  phase: string;
  phaseColor?: string;
  meta?: { label: string; value: string }[];
  children?: React.ReactNode;
}

export default function FailureSignature({
  phase,
  phaseColor = "var(--accent)",
  meta = [],
  children,
}: FailureSignatureProps) {
  return (
    <div className="think-failure-sig">
      <div className="think-failure-sig-header">
        <div className="think-failure-sig-phase" style={{ color: phaseColor }}>
          {phase}
        </div>
        {meta.length > 0 && (
          <dl className="think-failure-sig-meta">
            {meta.map((m, i) => (
              <div key={i}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
      {children}
    </div>
  );
}
