import Link from "next/link";
import { ArrowDown } from "@phosphor-icons/react/ssr";
import { site } from "@/lib/content";
import { SignalTrace } from "./signal-trace";

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="shell grid snap-start items-center gap-12 pt-12 pb-20 md:pt-20 lg:min-h-[calc(100dvh-var(--nav-h))] lg:grid-cols-12 lg:gap-10 lg:py-16"
    >
      <div className="lg:col-span-7">
        <p className="meta enter" style={i(0)}>
          {site.name} <span className="text-line-strong">/</span> {site.role}
        </p>
        <h1 id="hero-title" className="mt-6 max-w-[11ch] text-display font-semibold">
          AI products, shipped end to end.
        </h1>
        <p className="enter mt-8 max-w-[34rem] text-lead text-fg-2" style={i(2)}>
          Founding and forward-deployed engineer. I build RAG and voice systems, payments and integrations, then run
          them in production.
        </p>
        <div className="enter mt-10 flex flex-wrap items-center gap-3" style={i(3)}>
          <Link
            href="#work"
            className="press group inline-flex items-center gap-2 bg-fg px-5 py-3 font-medium text-bg hover:bg-accent hover:text-[#0d0e10]"
          >
            Selected work
            <ArrowDown size={16} aria-hidden className="transition-transform duration-(--dur-fast) group-hover:translate-y-0.5" />
          </Link>
          <Link href="#contact" className="press inline-flex items-center border border-line-strong px-5 py-3 font-medium hover:border-fg">
            Contact
          </Link>
        </div>
      </div>

      <div className="enter lg:col-span-5" style={i(4)}>
        <SignalTrace />
      </div>
    </section>
  );
}
