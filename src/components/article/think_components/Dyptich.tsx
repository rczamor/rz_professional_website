interface DyptichSide {
  label: string;
  content: React.ReactNode;
}

interface DyptichProps {
  left: DyptichSide;
  right: DyptichSide;
}

export default function Dyptich({ left, right }: DyptichProps) {
  return (
    <div className="think-dyptich">
      <div className="think-dyptich-side left">
        <h4>{left.label}</h4>
        {typeof left.content === "string" ? <p>{left.content}</p> : left.content}
      </div>
      <div className="think-dyptich-side right">
        <h4>{right.label}</h4>
        {typeof right.content === "string" ? <p>{right.content}</p> : right.content}
      </div>
    </div>
  );
}
