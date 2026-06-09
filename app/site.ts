/** Central place for external URLs so they're not scattered across the site. */

/** Production home of the docs + marketing site. */
export const SITE_URL = "https://blackchalk.design";

export const GITHUB_URL = "https://github.com/free-agent83/blackchalk";

/**
 * Storybook is the component workshop / "full playground". Target home is the
 * subdomain storybook.blackchalk.design (a second Vercel project building
 * `npm run build-storybook`). Until that's deployed, point at the repo so the link
 * is live, not dead — then flip this one line to `https://storybook.blackchalk.design`.
 */
export const STORYBOOK_URL = GITHUB_URL;

/** Build a link to a component's source file on GitHub. */
export function sourceUrl(path: string) {
  return `${GITHUB_URL}/blob/main/${path}`;
}
