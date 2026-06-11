"use client";

import {
  SketchAvatar,
  SketchBadge,
  SketchBarChart,
  SketchButton,
  SketchCheckbox,
  SketchLineChart,
  SketchProgress,
  SketchRadioGroup,
  SketchRating,
  SketchSearchInput,
  SketchSelect,
  SketchSlider,
  SketchStepper,
  SketchToggle,
} from "blackchalk";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { SketchTheme } from "@/app/components/sketch-theme";

// Generous vertical rhythm so the live components aren't cramped.
const ROW_GAP = 36;

// Every control runs UNCONTROLLED (no shared React state): each manages its own
// internal state, so interacting with one doesn't re-render the whole showcase and
// re-randomize every other component's rough.js outline.
export function Showcase() {
  return (
    <>
      {/* Reuse the docs' ComponentPreview shell: bordered container + tabbed header
          (single "Live Components Preview" label) + dotted paper stage. The header
          is clean fumadocs chrome; only the components inside are hand-drawn. */}
      <Tabs items={["Live Components Preview"]}>
        <Tab value="Live Components Preview" className="p-0">
          <div className="overflow-hidden rounded-lg">
            <SketchTheme paper>
              <div style={{ padding: 40, display: "flex", flexDirection: "column", gap: ROW_GAP }}>
                {/* Control row */}
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
                  <SketchButton variant="primary">Primary action</SketchButton>
                  <SketchButton variant="secondary">Secondary</SketchButton>
                  <SketchBadge variant="muted">In progress</SketchBadge>
                  <SketchToggle checked aria-label="Notifications" />
                  <SketchCheckbox checked />
                  <div style={{ width: 200 }}>
                    <SketchProgress value={68} max={100} percentage />
                  </div>
                </div>

                {/* Input row — kept high so the Select's dropdown (rendered inline at
                    z-index 50, not portaled) opens into the frame instead of being
                    clipped by the overflow-hidden stage. */}
                <div style={{ display: "flex", gap: 24 }}>
                  <SketchSearchInput placeholder="Search components…" style={{ flex: 1 }} />
                  <SketchSelect
                    selected="primary"
                    options={[
                      { value: "primary", label: "Primary" },
                      { value: "secondary", label: "Secondary" },
                      { value: "tertiary", label: "Tertiary" },
                    ]}
                    style={{ flex: 1 }}
                  />
                </div>

                {/* Core UI row */}
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 40 }}>
                  <SketchRadioGroup
                    name="size"
                    orientation="horizontal"
                    value="m"
                    options={[
                      { value: "s", label: "Small" },
                      { value: "m", label: "Medium" },
                      { value: "l", label: "Large" },
                    ]}
                  />
                  <div style={{ width: 160 }}>
                    <SketchSlider value={40} min={0} max={100} />
                  </div>
                  <SketchRating rating={4} size={22} />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {["AL", "BK", "CJ", "+2"].map((i, idx) => (
                      <div key={i} style={{ marginLeft: idx ? -8 : 0, zIndex: 10 - idx }}>
                        <SketchAvatar initials={i} size={32} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Charts (fluid — fill their flex columns) */}
                <div style={{ display: "flex", gap: 40 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <SketchLineChart
                      data={[
                        { label: "Mon", value: 8 },
                        { label: "Tue", value: 14 },
                        { label: "Wed", value: 11 },
                        { label: "Thu", value: 22 },
                        { label: "Fri", value: 18 },
                        { label: "Sat", value: 28 },
                        { label: "Sun", value: 34 },
                      ]}
                      height={170}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <SketchBarChart
                      data={[
                        { label: "Q1", value: 32 },
                        { label: "Q2", value: 48 },
                        { label: "Q3", value: 41 },
                        { label: "Q4", value: 60 },
                      ]}
                      height={170}
                    />
                  </div>
                </div>

                {/* Stepper */}
                <SketchStepper
                  steps={[
                    { label: "Install" },
                    { label: "Import" },
                    { label: "Theme" },
                    { label: "Ship" },
                  ]}
                  currentStep={2}
                  orientation="horizontal"
                  nodeContent="number"
                />
              </div>
            </SketchTheme>
          </div>
        </Tab>
      </Tabs>

      <p className="mt-4 text-center text-sm text-fd-muted-foreground">
        Every component above is real React — rough edges included.
      </p>
    </>
  );
}
