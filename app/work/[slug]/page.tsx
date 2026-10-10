import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react/ssr";
import { allProjects as projects } from "@/lib/content";
import { ProjectFrame } from "@/components/projects/project-frame";
import { SystemDiagram } from "@/components/projects/system-diagram";

// Only listed projects have case studies; anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  const title = `${p.name}: ${p.kind}`;
  return {
    title,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { title, description: p.summary, url: `/work/${p.slug}`, type: "article" },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="reveal grid gap-6 border-t border-line py-14 md:py-20 lg:grid-cols-12 lg:gap-10">
      <h2 className="text-h3 font-semibold lg:col-span-4">{title}</h2>
      <div className="lg:col-span-8">{children}</div>
    </section>
  );
}

export default async function CaseStudy({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="shell">
      <header className="pt-10 pb-14 md:pt-16 md:pb-20">
        <Link href="/work" className="meta enter group inline-flex items-center gap-1.5 hover:text-fg">
          <ArrowLeft size={13} aria-hidden className="transition-transform group-hover:-translate-x-0.5" />
          All projects
        </Link>
        <h1 className="enter mt-10 text-display font-semibold" style={{ "--i": 1 } as React.CSSProperties}>
          {p.name}
        </h1>
        <p className="enter mt-4 text-h3 font-medium text-fg-3" style={{ "--i": 2 } as React.CSSProperties}>
          {p.kind}
        </p>
        <dl className="enter mt-12 grid gap-6 sm:grid-cols-3" style={{ "--i": 3 } as React.CSSProperties}>
          <div className="border-t border-line pt-4">
            <dt className="meta">Role</dt>
            <dd className="mt-1.5">{p.context}</dd>
          </div>
          {p.period && (
            <div className="border-t border-line pt-4">
              <dt className="meta">Period</dt>
              <dd className="mt-1.5">{p.period}</dd>
            </div>
          )}
          {p.url && (
            <div className="border-t border-line pt-4">
              <dt className="meta">Live</dt>
              <dd className="mt-1.5">
                <a href={p.url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1">
                  <span className="link-draw">{new URL(p.url).host.replace(/^www\./, "")}</span>
                  <ArrowUpRight size={14} aria-hidden className="text-accent-ink" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </dd>
            </div>
          )}
        </dl>
      </header>

      {p.image && (
        <div className="enter" style={{ "--i": 4 } as React.CSSProperties}>
          <ProjectFrame src={p.image} alt={`${p.name} live product screen.`} url={p.url} sizes="(min-width: 1360px) 1300px, 100vw" priority />
        </div>
      )}

      <section aria-label="Overview" className={`reveal pb-16 md:pb-24 ${p.image ? "pt-16 md:pt-24" : "border-t border-line pt-14 md:pt-20"}`}>
        <p className="max-w-[40ch] text-[clamp(1.5rem,1.1rem+1.6vw,2.5rem)] leading-[1.2] font-medium tracking-[-0.03em]">
          {p.summary}
        </p>
        {p.metrics.length > 0 && (
        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {p.metrics.map((m) => (
            <div key={m.label} className="flex flex-col border-t border-line pt-4">
              <dt className="meta order-2 mt-3">{m.label}</dt>
              <dd className="-order-1 font-mono text-[clamp(1.5rem,1.1rem+1.6vw,2.5rem)] leading-none tracking-[-0.04em] tabular-nums">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
        )}
      </section>

      <Block title="Problem">
        <p className="max-w-[60ch] text-lead text-fg-2">{p.problem}</p>
      </Block>

      <Block title="Solution">
        <p className="max-w-[60ch] text-lead text-fg-2">{p.solution}</p>
      </Block>

      <Block title="What I built">
        <ul className="space-y-4">
          {p.contribution.map((c) => (
            <li key={c} className="grid max-w-[64ch] grid-cols-[14px_1fr] gap-4">
              <span aria-hidden className="mt-[0.8em] h-px w-3.5 bg-accent" />
              {c}
            </li>
          ))}
        </ul>
      </Block>

      <section aria-labelledby="system-title" className="reveal border-t border-line py-14 md:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="system-title" className="text-h3 font-semibold">
            System design
          </h2>
          <p className="meta">Snapshot, client to external systems</p>
        </div>
        <figure className="mt-10 border border-line bg-surface p-5 md:p-8">
          <SystemDiagram project={p} />
          {p.systemNote && <figcaption className="meta mt-6 border-t border-line pt-4">{p.systemNote}</figcaption>}
        </figure>
        <p className="meta mt-6">Stack: {p.stack.join(", ")}</p>
      </section>

      {p.challenges.length > 0 && (
      <Block title="Engineering challenges">
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {p.challenges.map((c) => (
            <div key={c.title}>
              <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-3 text-fg-2">{c.body}</p>
            </div>
          ))}
        </div>
      </Block>
      )}

      <Block title="Results">
        <ul className="space-y-4">
          {p.results.map((r) => (
            <li key={r} className="max-w-[60ch] border-b border-line pb-4 text-lead last:border-b-0">
              {r}
            </li>
          ))}
        </ul>
      </Block>

      <nav aria-label="Next project" className="border-t border-line py-16 md:py-24">
        <Link href={`/work/${next.slug}`} className="group block">
          <span className="meta">Next project</span>
          <span className="mt-4 flex items-center justify-between gap-6">
            <span className="text-h2 font-semibold">
              {next.name}
              <span className="block text-fg-3 transition-colors duration-(--dur-med) group-hover:text-fg-2">{next.kind}</span>
            </span>
            <ArrowRight
              size={40}
              aria-hidden
              className="shrink-0 text-accent-ink transition-transform duration-(--dur-med) ease-(--ease-out) group-hover:translate-x-2"
            />
          </span>
        </Link>
      </nav>
    </article>
  );
}
