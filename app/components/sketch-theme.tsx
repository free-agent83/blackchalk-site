"use client";

import { SketchThemeProvider, darkTheme, defaultTheme } from "blackchalk";
import { useTheme } from "next-themes";
import { type ReactNode, useEffect, useState } from "react";

/**
 * Bridges the site's global theme (Fumadocs drives next-themes) into blackchalk's
 * own token system, so the one theme switch in the nav flips every exhibited
 * component between light and dark. Wrap any surface that renders live blackchalk.
 *
 * Before mount, next-themes can't know the resolved theme, so we render the light
 * theme on the server and first client paint to avoid a hydration mismatch, then
 * swap once mounted.
 */
export function SketchTheme({
  children,
  paper = false,
}: {
  children: ReactNode;
  paper?: boolean;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const base = mounted && resolvedTheme === "dark" ? darkTheme : defaultTheme;

  // Strip the theme's hardcoded `font` so it doesn't write `--sketch-font` inline
  // and shadow the host's value (the site loads Caveat via `--sketch-font`). The
  // published themes still pin a font; once blackchalk ships font-less themes this
  // becomes a harmless no-op.
  const { font: _font, ...theme } = base;

  return (
    <SketchThemeProvider theme={theme} paper={paper} style={{ fontFamily: "var(--sketch-font)" }}>
      {children}
    </SketchThemeProvider>
  );
}
