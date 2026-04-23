interface TimelineEvent {
  label: string;
  title: string;
  body?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="think-timeline">
      {events.map((event, i) => (
        <div key={i} className="think-timeline-item">
          <div className="think-timeline-label">{event.label}</div>
          <div className="think-timeline-title">{event.title}</div>
          {event.body && <div className="think-timeline-body">{event.body}</div>}
        </div>
      ))}
    </div>
  );
}
