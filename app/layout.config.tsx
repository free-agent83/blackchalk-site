import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "@/app/logo";
import { GITHUB_URL, STORYBOOK_URL } from "@/app/site";

/**
 * Shared layout options for both the marketing (home) shell and the docs shell.
 * https://fumadocs.dev/docs/ui/navigation/links
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <Logo />,
  },
  links: [
    { text: "Docs", url: "/docs", active: "nested-url" },
    { text: "Changelog", url: "/changelog" },
    { text: "Storybook", url: STORYBOOK_URL, external: true },
    { text: "GitHub", url: GITHUB_URL, external: true },
  ],
};
