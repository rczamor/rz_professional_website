interface CardItem {
  num?: string;
  title: string;
  body: string;
}

interface CardGridProps {
  cards: CardItem[];
}

export default function CardGrid({ cards }: CardGridProps) {
  return (
    <div className="think-cards">
      {cards.map((card, i) => (
        <div key={i} className="think-card">
          {card.num && <div className="think-card-num">{card.num}</div>}
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </div>
      ))}
    </div>
  );
}
