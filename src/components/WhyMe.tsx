export default function WhyMe() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-2">Why me?</h2>
        <p className="text-xl md:text-2xl font-medium mb-4">
          A product mind grounded in the bottom line.
        </p>
        <p className="text-muted max-w-2xl mx-auto mb-12">
          I lead product end-to-end—and I can sell them, too. My strategies are always
          anchored in generating revenue or saving millions for the organization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { metric: "200+", label: "products, apps, and websites launched" },
            { metric: "$XXM+", label: "in revenue generated" },
            { metric: "XXXM+", label: "users reached" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              <div className="text-3xl font-bold text-foreground mb-1">
                {item.metric}
              </div>
              <div className="text-sm text-muted">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
