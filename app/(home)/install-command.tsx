"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

const CMD = "npm install blackchalk";

export function InstallCommand() {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(CMD).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div className="mt-2 inline-flex items-center gap-2 rounded-md border bg-fd-muted py-1.5 pr-1.5 pl-3 text-sm">
      <code>{CMD}</code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy install command"}
        className="rounded p-1 text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-foreground"
      >
        {copied ? <Check className="size-3.5 text-fd-success" /> : <Copy className="size-3.5" />}
      </button>
    </div>
  );
}
