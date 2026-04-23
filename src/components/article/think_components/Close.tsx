interface CloseProps {
  kicker?: string;
  heading: string;
  children: React.ReactNode;
}

export default function Close({ kicker = "The takeaway", heading, children }: CloseProps) {
  return (
    <section className="think-close">
      <div className="think-close-kicker">{kicker}</div>
      <h2>{heading}</h2>
      {typeof children === "string" ? <p>{children}</p> : children}
    </section>
  );
}
