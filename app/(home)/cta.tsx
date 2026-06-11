import Link from "next/link";

export function Cta() {
  return (
    <div className="rounded-2xl border px-6 py-12 text-center">
      <h2 className="text-2xl font-bold tracking-tight">Sketch your next idea</h2>
      <p className="mx-auto mt-2 max-w-md text-fd-muted-foreground">
        Install the package, import the stylesheet, and start wireframing in real React.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/docs/installation"
          className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
        >
          Get started
        </Link>
        <Link
          href="/docs/components/button"
          className="rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          Browse components
        </Link>
      </div>
    </div>
  );
}
