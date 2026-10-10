import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell section-y">
      <p className="meta">404</p>
      <h1 className="mt-6 max-w-[14ch] text-h2 font-semibold">This page isn&apos;t here.</h1>
      <Link href="/" className="press mt-10 inline-flex bg-fg px-5 py-3 font-medium text-bg">
        Back to the homepage
      </Link>
    </section>
  );
}
