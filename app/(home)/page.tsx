import Link from "next/link";
import { GITHUB_URL } from "@/app/site";
import { Features } from "./features";
import { Showcase } from "./showcase";
import { TechStrip } from "./tech-strip";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 pt-24 pb-12 text-center">
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
            href={GITHUB_URL}
            className="rounded-lg border px-5 py-2.5 text-sm font-medium"
          >
            View on GitHub
          </Link>
        </div>
        <code className="mt-2 rounded-md border bg-fd-muted px-3 py-1.5 text-sm">
          npm install blackchalk
        </code>
      </section>

      {/* Built with */}
      <section className="mx-auto w-full max-w-3xl px-4 pb-16">
        <p className="mb-6 text-center text-xs uppercase tracking-widest text-fd-muted-foreground">
          Built with
        </p>
        <TechStrip />
      </section>

      {/* Live showcase — built from the library itself */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-20">
        <p className="mb-8 text-center text-sm uppercase tracking-widest text-fd-muted-foreground">
          Everything below is a real blackchalk component
        </p>
        <Showcase />
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-20">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">
          A whole sketchbook, not just a button
        </h2>
        <Features />
      </section>

      {/* CTA */}
      <section className="mx-auto mb-24 w-full max-w-3xl px-4 text-center">
        <div className="rounded-2xl border px-6 py-12">
          <h2 className="text-2xl font-bold tracking-tight">Sketch your next idea</h2>
          <p className="mx-auto mt-2 max-w-md text-fd-muted-foreground">
            Install the package, import the stylesheet, and start wireframing in real
            React.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs/installation"
              className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground"
            >
              Get started
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border px-5 py-2.5 text-sm font-medium"
            >
              Browse components
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
