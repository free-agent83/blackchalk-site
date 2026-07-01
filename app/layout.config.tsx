import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "@/app/logo";
import { GITHUB_URL, STORYBOOK_URL } from "@/app/site";
import { BLACKCHALK_VERSION } from "@/lib/version";

/**
 * Shared layout options for both the marketing (home) shell and the docs shell.
 * https://fumadocs.dev/docs/ui/navigation/links
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="inline-flex items-baseline gap-2">
        <Logo />
        <a
          href="/changelog"
          className="rounded-full border border-fd-border px-1.5 py-0.5 text-[10px] font-semibold leading-none text-fd-muted-foreground no-underline"
        >
          v{BLACKCHALK_VERSION}
        </a>
      </span>
    ),
  },
  links: [
    { text: "Docs", url: "/docs", active: "nested-url" },
    { text: "Changelog", url: "/changelog" },
    { text: "Storybook", url: STORYBOOK_URL, external: true },
    { text: "GitHub", url: GITHUB_URL, external: true },
  ],
};
