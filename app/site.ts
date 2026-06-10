/** Central place for external URLs so they're not scattered across the site. */

/** Production home of the docs + marketing site. */
export const SITE_URL = "https://blackchalk.design";

export const GITHUB_URL = "https://github.com/free-agent83/blackchalk";

/**
 * Storybook is the component workshop / "full playground", deployed as a second
 * Vercel project (from the library repo) building `npm run build-storybook`.
 */
export const STORYBOOK_URL = "https://storybook.blackchalk.design";

/** Build a link to a component's source file on GitHub. */
export function sourceUrl(path: string) {
  return `${GITHUB_URL}/blob/main/${path}`;
}
