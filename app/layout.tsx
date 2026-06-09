import "./global.css";
import "blackchalk/styles.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_URL } from "@/app/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "blackchalk — hand-drawn React UI components",
  description:
    "A low-fidelity, monochrome React component library built on rough.js. Wireframe-style UI that looks deliberately unfinished.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
