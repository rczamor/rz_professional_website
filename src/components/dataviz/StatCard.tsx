"use client";

interface StatCardProps {
  value: string;
  label: string;
  source?: string;
  className?: string;
}

export default function StatCard({ value, label, source, className }: StatCardProps) {
  return (
    <div
      className={className}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "12px",
        padding: "24px",
        textAlign: "center",
        transition: "border-color 0.2s ease",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "2.25rem",
          fontWeight: 700,
          color: "var(--accent)",
          lineHeight: 1.1,
          marginBottom: "8px",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.95rem",
          color: "var(--text-secondary)",
          lineHeight: 1.4,
        }}
      >
        {label}
      </div>
      {source && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--text-tertiary)",
            marginTop: "8px",
          }}
        >
          {source}
        </div>
      )}
    </div>
  );
}
