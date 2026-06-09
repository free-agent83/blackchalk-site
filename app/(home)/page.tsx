import Link from "next/link";
import { Showcase } from "./showcase";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 pt-24 pb-16 text-center">
        <span className="rounded-full border px-3 py-1 text-xs text-fd-muted-foreground">
          Built on rough.js · MIT
        </span>
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
          Hand-drawn React UI,
          <br />
          deliberately unfinished.
        </h1>
        <p className="max-w-2xl text-balance text-lg text-fd-muted-foreground">
          blackchalk is a low-fidelity, monochrome component library. Wireframe-style
          UI that looks sketched, so people react to the idea instead of the pixels.
          Themeable, SSR-friendly, no runtime CSS-in-JS.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground"
          >
            Read the docs
          </Link>
          <Link
            href="https://github.com/chrislearey/blackchalk"
            className="rounded-lg border px-5 py-2.5 text-sm font-medium"
          >
            View on GitHub
          </Link>
        </div>
        <code className="mt-2 rounded-md border bg-fd-muted px-3 py-1.5 text-sm">
          npm install blackchalk
        </code>
      </section>

      {/* Live showcase — built from the library itself */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-24">
        <p className="mb-8 text-center text-sm uppercase tracking-widest text-fd-muted-foreground">
          Everything below is a real blackchalk component
        </p>
        <Showcase />
      </section>
    </main>
  );
}
