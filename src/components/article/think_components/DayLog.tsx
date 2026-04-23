interface DayLogEntry {
  day: string;
  summary: React.ReactNode;
  detail: React.ReactNode;
}

interface DayLogProps {
  entries: DayLogEntry[];
}

export default function DayLog({ entries }: DayLogProps) {
  return (
    <div>
      {entries.map((entry, i) => (
        <div key={i} className="think-daylog">
          <div>
            <div className="think-daylog-day">{entry.day}</div>
            <div className="think-daylog-prose">{entry.summary}</div>
          </div>
          <div className="think-daylog-prose">{entry.detail}</div>
        </div>
      ))}
    </div>
  );
}
