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

  const theme = mounted && resolvedTheme === "dark" ? darkTheme : defaultTheme;

  return (
    <SketchThemeProvider theme={theme} paper={paper}>
      {children}
    </SketchThemeProvider>
  );
}
