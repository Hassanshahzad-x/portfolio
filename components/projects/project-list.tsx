import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/ssr";
import type { Project } from "@/lib/content";

export function CaseButton({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="press group/cta inline-flex items-center gap-2 border border-line-strong px-4 py-2.5 text-[0.9375rem] font-medium hover:border-fg"
    >
      Read the case study
      <span className="sr-only">: {project.name}</span>
      <ArrowRight
        size={15}
        aria-hidden
        className="text-accent-ink transition-transform duration-(--dur-fast) group-hover/cta:translate-x-0.5"
      />
    </Link>
  );
}

export function LiveLink({ url, name }: { url: string; name: string }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="group/live inline-flex items-center gap-1 px-1 py-2.5 text-[0.9375rem] text-fg-2 hover:text-fg">
      <span className="link-draw">Live</span>
      <ArrowUpRight size={14} aria-hidden className="text-accent-ink" />
      <span className="sr-only">{name} (opens in a new tab)</span>
    </a>
  );
}

export function ProjectList({ items }: { items: Project[] }) {
  return (
    <ul className="border-t border-line">
      {items.map((p) => (
        <li key={p.slug} className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-4">
            <p className="meta">{p.context}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">
              <Link href={`/work/${p.slug}`} className="link-draw">
                {p.name}
              </Link>
            </h3>
            <p className="text-fg-3">{p.kind}</p>
          </div>
          <div className="md:col-span-5">
            <p className="text-fg-2">{p.summary}</p>
            <p className="meta mt-3">{p.stack.join(", ")}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:col-span-3 md:flex-col md:items-end md:gap-1">
            <CaseButton project={p} />
            {p.url && <LiveLink url={p.url} name={p.name} />}
          </div>
        </li>
      ))}
    </ul>
  );
}
