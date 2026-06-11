import Link from "next/link";
import { GITHUB_URL } from "@/app/site";
import { Cta } from "./cta";
import { Features } from "./features";
import { InstallCommand } from "./install-command";
import { Showcase } from "./showcase";
import { TechStrip } from "./tech-strip";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 pt-24 pb-24 text-center">
        <span className="rounded-full border px-3 py-1 text-xs text-fd-muted-foreground">
          Built on rough.js · MIT
        </span>
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
          Hand-drawn React UI,
          <br />
          deliberately{" "}
          <span
            className="font-normal tracking-normal"
            style={{ fontFamily: "var(--sketch-font)" }}
          >
            unfinished.
          </span>
        </h1>
        <p className="max-w-2xl text-balance text-lg text-fd-muted-foreground">
          blackchalk is a low-fidelity, monochrome component library. Wireframe-style
          UI that looks sketched, so people react to the idea instead of the pixels.
          Themeable, SSR-friendly, no runtime CSS-in-JS.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
          >
            Read the docs
          </Link>
          <Link
            href={GITHUB_URL}
            className="rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            View on GitHub
          </Link>
        </div>
        <InstallCommand />
      </section>

      {/* Built with */}
      <section className="mx-auto w-full max-w-3xl px-4 pb-32">
        <p className="mb-6 text-center text-xs uppercase tracking-widest text-fd-muted-foreground">
          Built with
        </p>
        <TechStrip />
      </section>

      {/* Live showcase — built from the library itself */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-40">
        <Showcase />
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-40">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">
          A whole sketchbook, not just a button
        </h2>
        <Features />
      </section>

      {/* CTA */}
      <section className="mx-auto mb-48 w-full max-w-3xl px-4">
        <Cta />
      </section>
    </main>
  );
}
