import { GITHUB_URL } from "@/app/site";

export const metadata = {
  title: "Changelog — blackchalk",
  description: "Release notes for the blackchalk component library.",
};

type Release = {
  version: string;
  date: string;
  summary: string;
  changes: string[];
};

/**
 * Hand-maintained for now. Once releases are tagged on GitHub this could read from
 * the Releases API at build time instead.
 */
const RELEASES: Release[] = [
  {
    version: "0.1.1",
    date: "2026",
    summary: "Visual and responsive polish from the first design review.",
    changes: [
      "Hand-drawn close icon for cart item remove + modal close",
      "Killed the native search clear button and a serif leak in portalled surfaces",
      "Responsive + visual fixes across components",
    ],
  },
  {
    version: "0.1.0",
    date: "2026",
    summary: "First public extraction from the production design system.",
    changes: [
      "~70 hand-drawn components built on rough.js",
      "Single-hue theming with light/dark modes",
      "SSR-friendly, single stylesheet, no runtime CSS-in-JS",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-20">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
        <p className="mt-2 text-fd-muted-foreground">
          What's new in blackchalk. See full history on{" "}
          <a href={GITHUB_URL} className="underline">
            GitHub
          </a>
          .
        </p>
      </header>

      <ol className="relative border-l pl-8">
        {RELEASES.map((r) => (
          <li key={r.version} className="mb-12 last:mb-0">
            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-fd-background bg-fd-foreground" />
            <div className="flex items-baseline gap-3">
              <h2 className="text-xl font-semibold tracking-tight">
                v{r.version}
              </h2>
              <span className="text-sm text-fd-muted-foreground">{r.date}</span>
            </div>
            <p className="mt-1 text-fd-muted-foreground">{r.summary}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {r.changes.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </main>
  );
}
