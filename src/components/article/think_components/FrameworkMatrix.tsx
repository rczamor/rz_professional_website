interface MatrixRow {
  question: string;
  shortLabel: string;
  cells: string[];
  highlight?: boolean;
}

interface FrameworkMatrixProps {
  layers: string[];
  rows: MatrixRow[];
  caption?: string;
  highlightNote?: string;
}

export default function FrameworkMatrix({
  layers,
  rows,
  caption,
  highlightNote,
}: FrameworkMatrixProps) {
  const columnTemplate = `minmax(220px, 1.4fr) repeat(${layers.length}, minmax(0, 1fr))`;

  return (
    <figure
      className="think-matrix"
      role="img"
      aria-label={caption ?? "Five-question, four-layer composition framework"}
    >
      {caption && <figcaption className="think-matrix-caption">{caption}</figcaption>}

      <div className="think-matrix-grid" style={{ gridTemplateColumns: columnTemplate }}>
        <div className="think-matrix-cell think-matrix-cell-corner" aria-hidden="true">
          <span className="think-matrix-corner-q">Question</span>
          <span className="think-matrix-corner-arrow">/</span>
          <span className="think-matrix-corner-l">Layer</span>
        </div>
        {layers.map((layer, i) => (
          <div key={layer} className="think-matrix-cell think-matrix-head">
            <span className="think-matrix-head-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="think-matrix-head-label">{layer}</span>
          </div>
        ))}

        {rows.map((row, rIdx) => (
          <div
            key={row.shortLabel}
            className={`think-matrix-row${row.highlight ? " is-highlight" : ""}`}
            style={{ gridTemplateColumns: columnTemplate }}
          >
            <div className="think-matrix-cell think-matrix-rowhead">
              <span className="think-matrix-rowhead-num">Q{rIdx + 1}</span>
              <span className="think-matrix-rowhead-q">{row.question}</span>
              <span className="think-matrix-rowhead-short">{row.shortLabel}</span>
            </div>
            {row.cells.map((cell, cIdx) => (
              <div
                key={cIdx}
                className="think-matrix-cell think-matrix-data"
                data-layer={layers[cIdx]}
              >
                <span>{cell}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {highlightNote && (
        <p className="think-matrix-note">
          <span className="think-matrix-note-marker" aria-hidden="true" />
          {highlightNote}
        </p>
      )}
    </figure>
  );
}
