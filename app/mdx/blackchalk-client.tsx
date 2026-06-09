"use client";

/**
 * Client boundary for blackchalk in MDX. blackchalk ships no "use client" directive
 * and relies on effects/ResizeObserver, so re-exporting through this "use client"
 * module turns each component into a client reference the (server) MDX renderer can
 * safely embed. Anything we want usable directly in .mdx is surfaced here.
 */
export {
  SketchBadge,
  SketchButton,
  SketchCard,
  SketchCheckbox,
  SketchInput,
  SketchToggle,
} from "blackchalk";

import { SketchButton, SketchModal } from "blackchalk";
import { useState } from "react";

/** Modal needs open/close state, so it gets a small self-contained demo wrapper. */
export function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SketchButton variant="primary" onClick={() => setOpen(true)}>
        Open modal
      </SketchButton>
      <SketchModal open={open} onClose={() => setOpen(false)} title="Delete sketch?">
        <p style={{ marginTop: 0 }}>
          This can’t be undone. The wireframe goes back to the void.
        </p>
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
          <SketchButton variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </SketchButton>
          <SketchButton variant="primary" onClick={() => setOpen(false)}>
            Delete
          </SketchButton>
        </div>
      </SketchModal>
    </>
  );
}

/** Toggle/checkbox read nicer in docs with a label beside them. */
export function Row({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      {children}
    </div>
  );
}
