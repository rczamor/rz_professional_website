interface ActNumberProps {
  num: number | string;
}

export default function ActNumber({ num }: ActNumberProps) {
  const display = typeof num === "number" ? `ACT ${String(num).padStart(2, "0")}` : num;
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        letterSpacing: "0.2em",
        color: "var(--accent)",
        marginBottom: "16px",
      }}
    >
      {display}
    </div>
  );
}
