"use client";

import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { type ReactNode, useEffect, useState } from "react";
import { SketchTheme } from "./sketch-theme";

/**
 * Live demos are interactive and some blackchalk components touch `document` during
 * render (e.g. the modal's portal), which can't be server-prerendered. Mounting the
 * demo client-side only sidesteps SSR entirely while keeping a stable placeholder.
 */
function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <>{children}</>;
}

/**
 * The core exhibit primitive for the docs: renders a REAL blackchalk component in a
 * framed stage (Preview tab) alongside its source (Code tab). The stage follows the
 * global theme switch via <SketchTheme>, so toggling light/dark flips the live demo.
 */
export function ComponentPreview({
  children,
  code,
  lang = "tsx",
  paper = true,
}: {
  children: ReactNode;
  /** Source shown in the Code tab. Omit to render a preview-only stage. */
  code?: string;
  lang?: string;
  /** Draw blackchalk's paper texture behind the demo. */
  paper?: boolean;
}) {
  const stage = (
    <SketchTheme paper={paper}>
      <div className="flex min-h-[180px] flex-wrap items-center justify-center gap-4 p-10">
        <ClientOnly>{children}</ClientOnly>
      </div>
    </SketchTheme>
  );

  if (!code) {
    return (
      <div className="my-6 overflow-hidden rounded-xl border bg-fd-card">{stage}</div>
    );
  }

  return (
    <Tabs items={["Preview", "Code"]} className="my-6">
      <Tab value="Preview" className="p-0">
        <div className="overflow-hidden rounded-lg">{stage}</div>
      </Tab>
      <Tab value="Code" className="p-0">
        <DynamicCodeBlock lang={lang} code={code.trim()} />
      </Tab>
    </Tabs>
  );
}
