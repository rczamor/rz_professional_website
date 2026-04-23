interface PullquoteProps {
  quote: string;
  cite?: string;
}

export default function Pullquote({ quote, cite }: PullquoteProps) {
  return (
    <section className="think-pullquote">
      <blockquote>{quote}</blockquote>
      {cite && <cite>{cite}</cite>}
    </section>
  );
}
