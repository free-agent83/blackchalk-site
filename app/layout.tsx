import "./global.css";
import "blackchalk/styles.css";
import localFont from "next/font/local";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_URL } from "@/app/site";

// Caveat is blackchalk's default handwriting face. Self-hosted (variable 400–700)
// with size-adjust: 175% so it sits at the same optical size as the library's own
// `blackchalk/fonts.css` — Caveat draws small, and this keeps the site and
// Storybook in lockstep. Feeds blackchalk's single `--sketch-font` knob via
// `--font-sketch` (mapped in global.css).
const caveat = localFont({
  src: "./fonts/caveat-latin.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-sketch",
  declarations: [{ prop: "size-adjust", value: "175%" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "blackchalk — hand-drawn React UI components",
  description:
    "A low-fidelity, monochrome React component library built on rough.js. Wireframe-style UI that looks deliberately unfinished.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={caveat.variable}>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
