import Link from "next/link";
import { ArrowDown } from "@phosphor-icons/react/ssr";
import { site } from "@/lib/content";
import { Kicker, Thread } from "@/components/trace/thread";
import { ResumeCard } from "./resume-card";

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

export function Hero() {
  return (
    <section aria-labelledby="hero-title" data-stop={1} data-label="the start" className="relative">
      <Thread />
      <div className="shell relative grid items-center gap-16 pt-10 pb-24 md:pt-16 lg:min-h-[calc(100dvh-var(--nav-h))] lg:grid-cols-12 lg:gap-10 lg:py-16">
        <div className="lg:col-span-7">
          {/* No .enter here: its transform would become the station's containing block. */}
          <Kicker n={1} label="the start" extra={site.location} />
          <h1
            id="hero-title"
            className="enter nameplate mt-6 font-display text-name font-semibold"
            style={i(1)}
          >
            Hassan<span className="text-accent">·</span>
            <br />
            Shahzad
          </h1>
          <p className="enter mt-8 max-w-[22ch] font-display text-h3 font-normal" style={i(2)}>
            Software engineer: AI products, shipped <em>end to end.</em>
          </p>
          <p className="enter mt-6 max-w-[34rem] text-lead text-fg-2" style={i(3)}>
            Founding and forward-deployed engineer. I build RAG and voice systems, payments and integrations, then run
            them in production.
          </p>
          <div className="enter mt-10 flex flex-wrap items-center gap-5" style={i(4)}>
            <Link
              href="#work"
              className="press group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 font-medium text-bg hover:bg-accent-ink"
            >
              Selected work
              <ArrowDown size={16} aria-hidden className="transition-transform duration-(--dur-fast) group-hover:translate-y-0.5" />
            </Link>
            <Link href="#contact" className="link-draw font-medium">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="enter lg:col-span-5" style={i(5)}>
          <ResumeCard />
        </div>
      </div>
    </section>
  );
}
