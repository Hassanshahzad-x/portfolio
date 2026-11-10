import { allProjects, type Project } from "@/lib/content";
import { ProjectFigure } from "@/components/figures";
import { Kicker, Thread } from "@/components/trace/thread";
import { CaseButton, LiveLink } from "./project-list";

// Homepage stops 03 to 11: one project each, the pitch on top and its full-width "how it works" figure below.
export const FIRST_STOP = 3;

function Stop({ project: p, index, total }: { project: Project; index: number; total: number }) {
  const n = FIRST_STOP + index;
  return (
    <article aria-labelledby={`p-${p.slug}`} data-stop={n} data-label={p.name.toLowerCase()} className="relative py-16 lg:py-24">
      <Thread />
      <div className="shell relative">
        <Kicker n={n} label={`project ${index + 1} of ${total}`} extra={p.context} />
        <div className="reveal mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h3 id={`p-${p.slug}`} className="font-display text-h2 font-[430]">
              {p.name}
              <span className="text-accent">.</span>
            </h3>
            <p className="mt-3 font-display text-[1.25rem] text-fg-2 italic">{p.kind}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CaseButton project={p} />
              {p.url && <LiveLink url={p.url} name={p.name} />}
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="max-w-[56ch] text-lead text-fg-2">{p.summary}</p>
            {p.metrics.length > 0 ? (
              <dl className="mt-8 grid gap-x-8 border-t border-line sm:grid-cols-2">
                {p.metrics.map((m) => (
                  <div key={m.label} className="grid grid-cols-[minmax(5.5rem,auto)_1fr] items-baseline gap-4 border-b border-line py-3">
                    <dd className="font-display text-[1.5rem] leading-none text-accent-ink tabular-nums">{m.value}</dd>
                    <dt className="text-[0.875rem] text-fg-2">{m.label}</dt>
                  </div>
                ))}
              </dl>
            ) : null}
            <p className="mt-6 font-mono text-[0.75rem] text-fg-3">{p.stack.join(" · ")}</p>
          </div>
        </div>

        <div className="reveal mt-12">
          <ProjectFigure slug={p.slug} n={n} />
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title">
      <h2 id="work-title" className="sr-only">
        Products I architected and shipped
      </h2>
      {allProjects.map((p, i) => (
        <Stop key={p.slug} project={p} index={i} total={allProjects.length} />
      ))}
    </section>
  );
}
