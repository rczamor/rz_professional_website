"use client";

interface TerminalProps {
  title?: string;
  children: React.ReactNode;
}

export default function Terminal({ title = "terminal", children }: TerminalProps) {
  return (
    <div className="think-terminal">
      <div className="think-terminal-bar">
        <span className="think-terminal-dot r" />
        <span className="think-terminal-dot y" />
        <span className="think-terminal-dot g" />
        <span className="think-terminal-title">{title}</span>
      </div>
      <pre>{children}</pre>
    </div>
  );
}
