import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout options for both the marketing (home) shell and the docs shell.
 * https://fumadocs.dev/docs/ui/navigation/links
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
        blackchalk
      </span>
    ),
  },
  links: [
    { text: "Docs", url: "/docs", active: "nested-url" },
    { text: "GitHub", url: "https://github.com/chrislearey/blackchalk" },
  ],
};
