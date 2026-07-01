import "blackchalk/styles.css";
import "./global.css";
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

const TITLE = "blackchalk — hand-drawn React UI components";
const DESCRIPTION =
  "A low-fidelity, monochrome React component library built on rough.js. Wireframe-style UI that looks deliberately unfinished.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  // og:image / twitter:image are supplied by app/opengraph-image.tsx (file convention).
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "blackchalk",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
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
