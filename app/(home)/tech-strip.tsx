/**
 * "Built with" strip — hand-drawn tech marks that echo blackchalk's rough.js look.
 * Static SVGs (no hooks), drawn with `currentColor` so they invert with the theme.
 * These are deliberately sketchy approximations, not pixel-accurate brand logos.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ReactMark() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
      <circle cx="24" cy="24" r="3.2" fill="currentColor" />
      {[0, 60, 120].map((deg) => (
        <ellipse
          key={deg}
          cx="24"
          cy="24"
          rx="21"
          ry="8"
          transform={`rotate(${deg} 24 24)`}
          {...stroke}
        />
      ))}
    </svg>
  );
}

function NextMark() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
      <circle cx="24" cy="24" r="20.5" {...stroke} />
      {/* stylized N */}
      <path d="M17.5 33 L17.5 15.5 L31 33.5" {...stroke} />
      <path d="M30.5 15.5 L30.5 30" {...stroke} />
    </svg>
  );
}

function RoughMark() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
      {/* a scribble — rough.js drawing itself */}
      <path
        d="M5 28 q 5 -16 10 -2 t 9 -1 q 5 -15 10 -1 t 9 0"
        {...stroke}
      />
      <path
        d="M6 31 q 5 -15 10 -1 t 9 -1 q 5 -14 10 0 t 8 1"
        {...stroke}
        strokeWidth={1.2}
        opacity={0.6}
      />
    </svg>
  );
}

function TsMark() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
      <rect x="6.5" y="6.5" width="35" height="35" rx="6" {...stroke} />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontSize="17"
        fontWeight="700"
        fill="currentColor"
        fontFamily="ui-monospace, monospace"
      >
        TS
      </text>
    </svg>
  );
}

const TECH = [
  { mark: <ReactMark />, label: "React" },
  { mark: <NextMark />, label: "Next.js" },
  { mark: <RoughMark />, label: "rough.js" },
  { mark: <TsMark />, label: "TypeScript" },
];

export function TechStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-fd-muted-foreground">
      {TECH.map((t) => (
        <div key={t.label} className="flex items-center gap-2.5">
          {t.mark}
          <span className="text-sm font-medium">{t.label}</span>
        </div>
      ))}
    </div>
  );
}
