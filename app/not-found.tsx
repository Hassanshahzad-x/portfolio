import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell section-y">
      <p className="kicker">
        ¶ <b>404</b> · off the trace
      </p>
      <h1 className="mt-6 max-w-[14ch] font-display text-display font-[430]">
        This page <em>isn&apos;t here.</em>
      </h1>
      <Link href="/" className="press mt-10 inline-flex rounded-full bg-fg px-6 py-3 font-medium text-bg hover:bg-accent-ink">
        Back to the start
      </Link>
    </section>
  );
}
