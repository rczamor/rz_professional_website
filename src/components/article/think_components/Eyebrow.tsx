interface EyebrowProps {
  children: React.ReactNode;
  flash?: string;
}

export default function Eyebrow({ children, flash }: EyebrowProps) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.18em",
        textTransform: "uppercase" as const,
        color: "var(--accent)",
        marginBottom: "32px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {flash && (
        <span
          style={{
            background: "#ef4444",
            color: "#fff",
            padding: "4px 10px",
            borderRadius: "2px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            fontSize: "10px",
          }}
        >
          {flash}
        </span>
      )}
      {children}
    </div>
  );
}
