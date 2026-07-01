import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The installed blackchalk version, read from node_modules at build time so the
 * docs badge always matches the dependency the site is actually built against.
 * Server-only (uses fs) — import only into server components.
 */
export const BLACKCHALK_VERSION: string = JSON.parse(
  readFileSync(join(process.cwd(), "node_modules/blackchalk/package.json"), "utf8"),
).version as string;
