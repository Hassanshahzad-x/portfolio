import Link from "next/link";
import { allProjects, type Project } from "@/lib/content";
import { ProjectFrame } from "./project-frame";
import { CaseButton, LiveLink } from "./project-list";
import { SystemDiagram } from "./system-diagram";

const pad = (n: number) => String(n).padStart(2, "0");

function Metrics({ items }: { items: Project["metrics"] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-6">
      {items.map((m) => (
        <div key={m.label} className="flex flex-col border-t border-line pt-3">
          <dt className="meta order-2 mt-2">{m.label}</dt>
          {/* Word values ("Multi-tenant") get a smaller size so they never break mid-word. */}
          <dd
            className={`-order-1 font-mono leading-none tracking-[-0.04em] whitespace-nowrap tabular-nums ${m.value.length > 7 ? "text-[clamp(1.25rem,1rem+0.6vw,1.625rem)]" : "text-[clamp(1.5rem,1.1rem+1.4vw,2.5rem)]"}`}
          >
            {m.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

// Projects without a screenshot show their system design in the same frame.
function SystemFrame({ project }: { project: Project }) {
  return (
    <figure className="border border-line bg-surface">
      <figcaption className="meta flex h-8 items-center border-b border-line px-3">{project.name}: system design</figcaption>
      <div className="flex p-4 sm:aspect-[16/10] sm:items-center sm:p-6">
        <div className="w-full">
          <SystemDiagram project={project} compact />
        </div>
      </div>
    </figure>
  );
}

// One project per screen. Scroll snapping (globals.css) moves a whole slide per scroll.
function Slide({ project: p, index, total }: { project: Project; index: number; total: number }) {
  const flip = index % 2 === 1;
  return (
    <article
      aria-labelledby={`p-${p.slug}`}
      className="snap-start border-t border-line py-14 lg:flex lg:min-h-[calc(100dvh-var(--nav-h))] lg:items-center lg:py-10"
    >
      <div className="shell grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className={`reveal lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
          {p.image ? (
            <Link href={`/work/${p.slug}`} className="group block" aria-label={`${p.name} case study`}>
              <ProjectFrame
                src={p.image}
                alt={`${p.name} live product screen.`}
                url={p.url}
                sizes="(min-width: 1024px) 58vw, 100vw"
                priority={index === 0}
              />
            </Link>
          ) : (
            <SystemFrame project={p} />
          )}
        </div>

        <div className="reveal lg:col-span-5">
          <p className="meta flex items-center gap-3">
            <span className="text-accent-ink tabular-nums">
              {pad(index + 1)} / {pad(total)}
            </span>
            <span aria-hidden className="h-px w-6 bg-line-strong" />
            {p.context}
          </p>
          <h3 id={`p-${p.slug}`} className="mt-4 text-h3 font-semibold">
            {p.name}
            <span className="block text-fg-3">{p.kind}</span>
          </h3>
          <p className="mt-5 max-w-[46ch] text-fg-2">{p.summary}</p>
          <div className="mt-8">
            {p.metrics.length > 0 ? <Metrics items={p.metrics} /> : <p className="meta border-t border-line pt-3">{p.stack.join(", ")}</p>}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CaseButton project={p} />
            {p.url && <LiveLink url={p.url} name={p.name} />}
          </div>
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
        <Slide key={p.slug} project={p} index={i} total={allProjects.length} />
      ))}
    </section>
  );
}
