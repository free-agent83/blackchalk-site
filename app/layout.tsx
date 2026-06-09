import "./global.css";
import "blackchalk/styles.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";

export const metadata = {
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
