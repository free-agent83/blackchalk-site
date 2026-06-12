"use client";

/**
 * Client boundary for blackchalk in MDX. blackchalk ships no "use client" directive
 * and relies on effects/ResizeObserver, so re-exporting through this "use client"
 * module turns each component into a client reference the (server) MDX renderer can
 * safely embed. Everything usable directly in .mdx is surfaced here.
 */
export {
  SketchAccordion,
  SketchAlert,
  SketchAppShell,
  SketchAvatar,
  SketchBadge,
  SketchBarChart,
  SketchBreadcrumb,
  SketchButton,
  SketchButtonGroup,
  SketchCard,
  SketchCardGrid,
  SketchCartItem,
  SketchCartSummary,
  SketchCheckbox,
  SketchCombobox,
  SketchCompareTable,
  SketchDatePicker,
  SketchDialog,
  SketchDivider,
  SketchDrawer,
  SketchDropdown,
  SketchEmptyState,
  SketchFilterBar,
  SketchForm,
  SketchFormField,
  SketchFormRow,
  SketchFrame,
  SketchGrid,
  SketchIcon,
  SketchIconRadio,
  SketchIconRadioGroup,
  SketchImagePlaceholder,
  SketchInput,
  SketchInventoryBadge,
  SketchLineChart,
  SketchList,
  SketchListItem,
  SketchMetricTile,
  SketchModal,
  SketchNavBar,
  SketchOrderStatus,
  SketchPageContainer,
  SketchPageHeader,
  SketchPageLayout,
  SketchPagination,
  SketchPanel,
  SketchPaper,
  SketchPieChart,
  SketchPriceTag,
  SketchProductCard,
  SketchProductGrid,
  SketchProgress,
  SketchRadioGroup,
  SketchRangeInput,
  SketchRating,
  SketchScrollRow,
  SketchSearchBar,
  SketchSearchInput,
  SketchSection,
  SketchSelect,
  SketchSettingsLayout,
  SketchShape,
  SketchSidebar,
  SketchSkeleton,
  SketchSlider,
  SketchSortSelect,
  SketchSparkline,
  SketchSpinner,
  SketchSplitLayout,
  SketchStackedBarChart,
  SketchStepper,
  SketchTab,
  SketchTabBar,
  SketchTable,
  SketchTabs,
  SketchTextarea,
  SketchThemeToggle,
  SketchToast,
  SketchToggle,
  SketchTooltip,
  SketchVerticalDivider,
} from "blackchalk";

import {
  SketchButton,
  SketchDialog,
  SketchDrawer,
  SketchModal,
  SketchToast,
  SketchIcon,
  SketchInput,
  ICON_NAMES,
} from "blackchalk";
import { useMemo, useState } from "react";

/** Overlay/transient components need open state, so each gets a small demo wrapper
 *  usable directly in .mdx (e.g. `<ModalDemo />`). */

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

export function DrawerDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SketchButton variant="primary" onClick={() => setOpen(true)}>
        Open drawer
      </SketchButton>
      <SketchDrawer open={open} onClose={() => setOpen(false)} title="Filters" side="right" size={300}>
        <p style={{ marginTop: 0 }}>Drawer content slides in from the edge.</p>
      </SketchDrawer>
    </>
  );
}

export function DialogDemo() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <SketchButton variant="secondary" onClick={() => setOpen((v) => !v)}>
        Toggle dialog
      </SketchButton>
      <SketchDialog open={open}>
        <p style={{ margin: 0 }}>A bare dialog surface — bring your own chrome.</p>
      </SketchDialog>
    </>
  );
}

export function ToastDemo() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <SketchButton variant="primary" onClick={() => setVisible(true)}>
        Show toast
      </SketchButton>
      <SketchToast
        message="Saved to your sketchbook."
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </>
  );
}

/** Toggle/checkbox and other inline controls read nicer with a label beside them. */
export function Row({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      {children}
    </div>
  );
}

/** Searchable grid of every baked icon in the library. Reads the runtime
 *  `ICON_NAMES` array so it always reflects the installed blackchalk version —
 *  no manual list to keep in sync. */
export function IconGallery() {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? ICON_NAMES.filter((n) => n.includes(q)) : ICON_NAMES;
  }, [query]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
        <div style={{ maxWidth: 240, width: "100%" }}>
          <SketchInput
            value={query}
            onChange={setQuery}
            placeholder="Search icons…"
          />
        </div>
        <span style={{ fontSize: "0.85rem", opacity: 0.6 }}>
          {matches.length} of {ICON_NAMES.length}
        </span>
      </div>

      {matches.length === 0 ? (
        <p style={{ opacity: 0.6, fontSize: "0.9rem" }}>No icons match “{query}”.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))",
            gap: "0.5rem",
          }}
        >
          {matches.map((name) => (
            <div
              key={name}
              title={name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 0.5rem",
                textAlign: "center",
              }}
            >
              <SketchIcon name={name} size={24} aria-label={name} />
              <code
                style={{
                  fontSize: "0.7rem",
                  opacity: 0.7,
                  wordBreak: "break-word",
                  lineHeight: 1.2,
                }}
              >
                {name}
              </code>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
