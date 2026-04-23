interface StoryBlockProps {
  children: React.ReactNode;
  dropcap?: boolean;
}

export default function StoryBlock({ children, dropcap = false }: StoryBlockProps) {
  return (
    <div className="think-story">
      <div className={dropcap ? "think-story-dropcap" : undefined}>
        {children}
      </div>
    </div>
  );
}
