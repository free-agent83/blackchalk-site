/**
 * Wordmark for the nav. The text stays clean and readable; the single "wink" is a
 * hand-drawn curved underline that echoes blackchalk's rough.js aesthetic.
 *
 * The underline is a static, hand-authored SVG (two slightly offset wobbly strokes,
 * the way rough.js double-passes a line) rather than the live blackchalk renderer —
 * a logo should be deterministic and render instantly with no layout-shift flash.
 * It uses `currentColor`, so it inverts with the fumadocs light/dark theme for free.
 */
export function Logo() {
  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        fontSize: "1.05rem",
        lineHeight: 1.1,
        paddingBottom: "0.35em",
      }}
    >
      blackchalk
      <svg
        aria-hidden="true"
        viewBox="0 0 122 10"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "0.42em",
          overflow: "visible",
          color: "currentColor",
        }}
      >
        {/* two overlapping passes — the rough.js double-stroke signature */}
        <path
          d="M2 5.5 Q 24 2, 46 4.2 T 90 3.6 Q 106 3.2, 120 5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 7 Q 28 4.4, 52 6 T 96 5.2 Q 109 5, 119 6.6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.3}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.75}
        />
      </svg>
    </span>
  );
}
