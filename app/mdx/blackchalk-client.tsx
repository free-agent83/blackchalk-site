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
} from "blackchalk";
import { useState } from "react";

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
