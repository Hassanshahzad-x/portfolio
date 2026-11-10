import { capabilities } from "@/lib/content";
import { Kicker, Thread } from "@/components/trace/thread";

export function Capabilities({ stop }: { stop: number }) {
  return (
    <section aria-labelledby="cap-title" data-stop={stop} data-label="how I build" className="relative section-y">
      <Thread />
      <div className="shell relative">
        <Kicker n={stop} label="how I build" />
        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)]">
              <h2 id="cap-title" className="reveal font-display text-h2 font-[430]">
                How I build<span className="text-accent">.</span>
              </h2>
              <p className="reveal mt-6 max-w-[32ch] text-fg-2">
                Five areas I own on a team, each with the opinion that shapes how I work in it.
              </p>
            </div>
          </div>

          <ol className="lg:col-span-8">
            {capabilities.map((c, i) => (
              <li key={c.name} className="reveal grid gap-4 border-t border-line py-10 first:border-t-0 first:pt-0 md:grid-cols-8 md:gap-8 lg:first:pt-2">
                <h3 className="kicker pt-2 md:col-span-2">
                  <b>{String(i + 1).padStart(2, "0")}</b> · {c.name.toLowerCase()}
                </h3>
                <div className="md:col-span-6">
                  <p className="font-display text-[clamp(1.375rem,1.1rem+0.9vw,2rem)] leading-[1.2] tracking-[-0.01em]">{c.thesis}</p>
                  <p className="mt-4 max-w-[58ch] text-fg-2">{c.proof}</p>
                  <p className="mt-4 font-mono text-[0.75rem] text-fg-3">{c.tools.join(" · ")}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
