import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { experience } from "@/lib/content";

const host = (url: string) => new URL(url).host.replace(/^www\./, "");

// Newest first. One role per row, logos sit on a vertical rail.
export function Experience() {
  return (
    <section aria-labelledby="exp-title" className="section-y snap-start border-t border-line bg-surface/60">
      <div className="shell">
        <h2 id="exp-title" className="reveal text-h2 font-semibold">
          Experience
        </h2>
        <p className="reveal mt-6 max-w-[48ch] text-fg-2">
          Three years across startups and product teams. Two roles overlapped from Oct 2025, while I contracted as
          Folklore&apos;s founding engineer.
        </p>

        <ol className="mt-16 md:mt-20">
          {experience.map((e, i) => (
            <li key={e.company} className="reveal group/item grid gap-4 lg:grid-cols-12 lg:gap-10">
              <p className="meta lg:col-span-3 lg:pt-3 lg:text-right">
                <span className={i === 0 ? "text-accent-ink" : ""}>{e.period}</span>
                <span className="block">{e.type}</span>
              </p>

              <div className="relative pb-16 pl-16 group-last/item:pb-0 lg:col-span-9">
                {/* Rail: runs from this logo down to the next one. */}
                <span aria-hidden className="absolute top-14 bottom-2 left-6 w-px bg-line group-last/item:hidden" />
                <a
                  href={e.url}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={-1}
                  aria-hidden
                  className={`absolute top-0 left-0 flex size-12 items-center justify-center overflow-hidden border bg-white p-1.5 ${
                    i === 0 ? "border-accent" : "border-line"
                  }`}
                >
                  <Image src={e.logo} alt="" width={36} height={36} className="size-9 object-contain" />
                </a>

                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div>
                    <h3 className="text-h3 font-semibold">{e.company}</h3>
                    <p className="mt-1 text-fg-2">{e.role}</p>
                  </div>
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noreferrer"
                    className="press group/link inline-flex items-center gap-1.5 border border-line-strong px-3.5 py-2 text-[0.875rem] hover:border-fg"
                  >
                    {host(e.url)}
                    <ArrowUpRight
                      size={14}
                      aria-hidden
                      className="text-accent-ink transition-transform duration-(--dur-fast) group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                    <span className="sr-only">: {e.company} website (opens in a new tab)</span>
                  </a>
                </div>

                {e.about && <p className="mt-5 max-w-[68ch] text-fg-2">{e.about}</p>}
                {e.groups.map((g) => (
                  <div key={g.title ?? e.company} className="mt-7">
                    {g.title && (
                      <h4 className="font-semibold tracking-tight">
                        {g.slug ? (
                          <Link href={`/work/${g.slug}`} className="link-draw">
                            {g.title}
                          </Link>
                        ) : (
                          g.title
                        )}
                      </h4>
                    )}
                    <ul className={`space-y-3 ${g.title ? "mt-3" : ""}`}>
                      {g.bullets.map((line) => (
                        <li key={line} className="grid max-w-[72ch] grid-cols-[10px_1fr] gap-3 text-[0.9375rem] text-fg-2">
                          <span aria-hidden className="mt-[0.75em] h-px w-2.5 bg-accent" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
