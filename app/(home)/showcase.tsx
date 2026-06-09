"use client";

import {
  SketchBadge,
  SketchButton,
  SketchCard,
  SketchThemeProvider,
  defaultTheme,
} from "blackchalk";

/**
 * Live blackchalk components, rendered behind a client boundary because the
 * library uses ResizeObserver + effects to draw its rough.js strokes.
 * This is the whole pitch: the marketing surface is built from the library.
 */
export function Showcase() {
  return (
    <SketchThemeProvider theme={defaultTheme}>
      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        <SketchCard>
          <div style={{ display: "grid", gap: "0.75rem", padding: "0.25rem" }}>
            <SketchBadge>primitive</SketchBadge>
            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>Buttons</h3>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <SketchButton variant="primary">Primary</SketchButton>
              <SketchButton variant="secondary">Secondary</SketchButton>
            </div>
          </div>
        </SketchCard>

        <SketchCard inverted>
          <div style={{ display: "grid", gap: "0.75rem", padding: "0.25rem" }}>
            <SketchBadge variant="muted">themeable</SketchBadge>
            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>Inverted surface</h3>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              Tokens flip automatically — author once, invert for free.
            </p>
          </div>
        </SketchCard>
      </div>
    </SketchThemeProvider>
  );
}
