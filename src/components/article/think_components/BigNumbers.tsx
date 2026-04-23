interface BigNumberItem {
  value: string;
  label: string;
}

interface BigNumbersProps {
  items: BigNumberItem[];
}

export default function BigNumbers({ items }: BigNumbersProps) {
  return (
    <div className="think-bignums">
      {items.map((item, i) => (
        <div key={i} className="think-bignum">
          <div className="think-bignum-value">{item.value}</div>
          <div className="think-bignum-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
