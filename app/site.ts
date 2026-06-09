/** Central place for external URLs so they're not scattered across the site. */

export const GITHUB_URL = "https://github.com/free-agent83/blackchalk";

/**
 * Storybook is the component workshop / "full playground". It isn't deployed yet —
 * this points at the repo for now so the link is live, not dead. Swap to the real
 * Storybook URL (e.g. storybook.blackchalk.dev) once it's hosted.
 */
export const STORYBOOK_URL = GITHUB_URL;

/** Build a link to a component's source file on GitHub. */
export function sourceUrl(path: string) {
  return `${GITHUB_URL}/blob/main/${path}`;
}
