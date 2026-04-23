interface ComparisonGridProps {
  beforeLabel?: string;
  afterLabel?: string;
  before: string[];
  after: string[];
}

export default function ComparisonGrid({
  beforeLabel = "Before",
  afterLabel = "After",
  before,
  after,
}: ComparisonGridProps) {
  return (
    <div className="think-comparison">
      <div className="think-comparison-col before">
        <h3>{beforeLabel}</h3>
        {before.map((item, i) => (
          <div key={i} className="think-comparison-item">{item}</div>
        ))}
      </div>
      <div className="think-comparison-col after">
        <h3>{afterLabel}</h3>
        {after.map((item, i) => (
          <div key={i} className="think-comparison-item">{item}</div>
        ))}
      </div>
    </div>
  );
}
