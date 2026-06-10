const FEATURES = [
  {
    title: "Hand-drawn",
    body: "Every surface is rendered with rough.js, so UI looks sketched — people react to the idea, not the pixels.",
  },
  {
    title: "Monochrome & themeable",
    body: "A single-hue ramp drives the whole system. Flip the provider for instant light or dark.",
  },
  {
    title: "SSR-friendly",
    body: "No runtime CSS-in-JS. Ships a single stylesheet and renders cleanly on the server.",
  },
  {
    title: "Accessible primitives",
    body: "Buttons are real buttons, inputs are real inputs. The sketch is paint over solid semantics.",
  },
  {
    title: "Tokens included",
    body: "Colors, fills, strokes and typography are exported tokens you can build your own components from.",
  },
  {
    title: "~70 components",
    body: "Primitives, composed widgets, charts, layout and e-commerce patterns — not just a button kit.",
  },
];

export function Features() {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border bg-fd-border sm:grid-cols-2 lg:grid-cols-3">
      {FEATURES.map((f) => (
        <div key={f.title} className="bg-fd-background p-6">
          <h3 className="mb-2 font-semibold tracking-tight">{f.title}</h3>
          <p className="text-sm text-fd-muted-foreground">{f.body}</p>
        </div>
      ))}
    </div>
  );
}
