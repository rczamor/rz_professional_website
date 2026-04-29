interface LayerItem {
  num: string;
  title: string;
  description: string;
  tag?: string;
  highlight?: boolean;
}

interface LayerStackProps {
  /**
   * Layers ordered foundation-up (e.g. Data, Retrieval, Context, Inference).
   * They render top-down so the apex sits at the top of the stack.
   */
  layers: LayerItem[];
  caption?: string;
}

export default function LayerStack({ layers, caption }: LayerStackProps) {
  const stack = [...layers].reverse();
  return (
    <div className="think-layerstack">
      {caption && <div className="think-layerstack-caption">{caption}</div>}
      <div className="think-layerstack-stack" role="list">
        {stack.map((layer, i) => (
          <div
            key={i}
            role="listitem"
            className={`think-layerstack-layer${layer.highlight ? " is-highlight" : ""}`}
          >
            <div className="think-layerstack-num" aria-hidden="true">
              {layer.num}
            </div>
            <div className="think-layerstack-body">
              <h3 className="think-layerstack-title">{layer.title}</h3>
              <p className="think-layerstack-desc">{layer.description}</p>
            </div>
            {layer.tag && (
              <div className="think-layerstack-tag">{layer.tag}</div>
            )}
          </div>
        ))}
        <div className="think-layerstack-base" aria-hidden="true" />
      </div>
    </div>
  );
}
