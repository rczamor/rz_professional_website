interface ParallelRow {
  brainLabel: string;
  brainBody: string;
  contextLabel: string;
  contextBody: string;
  contextNums: string[]; // e.g. ["02", "03"] when one brain step maps to two context steps
}

interface BrainLoopComparisonProps {
  rows: ParallelRow[];
  caption?: string;
}

export default function BrainLoopComparison({ rows, caption }: BrainLoopComparisonProps) {
  return (
    <figure className="think-brainloop" aria-label="Side-by-side mapping of brain memory processes to the five-step Context Layer loop">
      <div className="think-brainloop-heads" aria-hidden="true">
        <div className="think-brainloop-head brain">
          <span className="think-brainloop-head-tag">Biological substrate</span>
          <span className="think-brainloop-head-title">Brain memory</span>
        </div>
        <div className="think-brainloop-head context">
          <span className="think-brainloop-head-tag">Engineered substrate</span>
          <span className="think-brainloop-head-title">Context Layer loop</span>
        </div>
      </div>

      <ol className="think-brainloop-rows">
        {rows.map((row, i) => {
          const splits = row.contextNums.length > 1;
          return (
            <li key={i} className={`think-brainloop-row${splits ? " splits" : ""}`}>
              <div className="think-brainloop-side brain">
                <div className="think-brainloop-step-name">{row.brainLabel}</div>
                <p className="think-brainloop-step-body">{row.brainBody}</p>
              </div>

              <div className="think-brainloop-bridge" aria-hidden="true">
                <span className="think-brainloop-bridge-line" />
                {splits && <span className="think-brainloop-bridge-fork" />}
              </div>

              <div className="think-brainloop-side context">
                <div className="think-brainloop-step-nums">
                  {row.contextNums.map((n) => (
                    <span key={n} className="think-brainloop-step-num">{n}</span>
                  ))}
                </div>
                <div className="think-brainloop-step-name">{row.contextLabel}</div>
                <p className="think-brainloop-step-body">{row.contextBody}</p>
              </div>
            </li>
          );
        })}
      </ol>

      {caption && (
        <figcaption className="think-brainloop-caption">{caption}</figcaption>
      )}
    </figure>
  );
}
