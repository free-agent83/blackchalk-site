"use client";

import {
  SketchBadge,
  SketchButton,
  SketchCard,
  SketchCheckbox,
  SketchProgress,
  SketchSearchInput,
  SketchSelect,
  SketchSparkline,
  SketchToggle,
} from "blackchalk";
import { useState } from "react";
import { SketchTheme } from "@/app/components/sketch-theme";

const title: React.CSSProperties = {
  fontFamily: "var(--sketch-font)",
  fontSize: "1.1rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  opacity: 0.65,
  marginBottom: 22,
};

const caption: React.CSSProperties = {
  fontFamily: "var(--sketch-font)",
  fontSize: "0.95rem",
  opacity: 0.4,
  marginTop: 22,
};

export function Showcase() {
  const [notifications, setNotifications] = useState(true);
  const [remember, setRemember] = useState(true);
  const [variant, setVariant] = useState("primary");

  return (
    <SketchTheme>
      <SketchCard block padding={28}>
        <div style={title}>Live component preview</div>

        {/* Control row */}
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 18 }}>
          <SketchButton variant="primary">Primary action</SketchButton>
          <SketchButton variant="secondary">Secondary</SketchButton>
          <SketchBadge variant="muted">In progress</SketchBadge>
          <SketchToggle checked={notifications} onChange={setNotifications} aria-label="Notifications" />
          <SketchCheckbox checked={remember} onChange={setRemember} />
          <div style={{ width: 200 }}>
            <SketchProgress value={68} max={100} percentage />
          </div>
        </div>

        {/* Sparkline */}
        <div style={{ width: 200, marginTop: 22 }}>
          <SketchSparkline data={[8, 14, 11, 22, 18, 28, 24, 34]} width={200} height={42} />
        </div>

        {/* Input row */}
        <div style={{ display: "flex", gap: 18, marginTop: 22 }}>
          <SketchSearchInput placeholder="Search components…" style={{ flex: 1 }} />
          <SketchSelect
            selected={variant}
            onChange={setVariant}
            options={[
              { value: "primary", label: "Primary" },
              { value: "secondary", label: "Secondary" },
              { value: "tertiary", label: "Tertiary" },
            ]}
            style={{ flex: 1 }}
          />
        </div>

        <div style={caption}>
          Every component above is real React — rough edges included.
        </div>
      </SketchCard>
    </SketchTheme>
  );
}
