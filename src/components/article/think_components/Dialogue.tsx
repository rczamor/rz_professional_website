interface DialogueProps {
  speaker: string;
  other?: boolean;
  children: React.ReactNode;
}

export default function Dialogue({ speaker, other = false, children }: DialogueProps) {
  return (
    <div className={`think-dialogue${other ? " other" : ""}`}>
      <div className="think-dialogue-speaker">{speaker}</div>
      {typeof children === "string" ? <p>{children}</p> : children}
    </div>
  );
}
