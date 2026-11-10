import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { site } from "@/lib/content";

// Words from the hero lead, typed and erased in turn by CSS (.tw-word). No JS.
const words = ["RAG systems", "voice systems", "payments", "integrations"];
const stack = ["FastAPI", "Next.js", "Qdrant", "PostgreSQL", "Stripe", "Claude"];
const rows = [
  { k: "email", v: site.email, href: `mailto:${site.email}` },
  { k: "github", v: site.links.github.replace("https://", ""), href: site.links.github },
  { k: "linkedin", v: "in/hassanshahzad-x", href: site.links.linkedin },
  { k: "base", v: site.location },
];

export function ResumeCard() {
  return (
    <div className="group relative mx-auto w-full max-w-[26rem] lg:mr-0">
      <article
        aria-label="Résumé card"
        className="plate relative -rotate-2 p-6 transition-transform duration-(--dur-slow) ease-(--ease-out) group-focus-within:rotate-0 group-hover:rotate-0 sm:p-7"
      >
        {/* Paperclip */}
        <svg
          aria-hidden
          viewBox="0 0 24 64"
          className="absolute -top-6 right-10 h-16 w-6 rotate-6 text-fg-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <path d="M8 22V10a4 4 0 0 1 8 0v36a7 7 0 0 1-14 0V16" />
        </svg>

        <p className="flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.06em] text-fg-3 uppercase">
          <span className="pulse relative size-2 rounded-full bg-success" />
          currently · Softpers
        </p>

        <p className="mt-5 font-display text-[2rem] leading-[1.05] font-medium tracking-[-0.015em]">
          Forward-deployed <em>engineer.</em>
        </p>

        <p className="mt-4 font-mono text-[0.8125rem] text-fg-2" aria-label={`I build ${words.join(", ")}`}>
          <span aria-hidden>
            <span className="text-accent-ink">&gt;</span> I build{" "}
            {words.map((w, k) => (
              <span key={w}>
                <span className="tw-word text-fg" style={{ "--n": w.length, "--k": k } as React.CSSProperties}>
                  {w}
                </span>
                {k < words.length - 1 && <span className="tw-sep"> · </span>}
              </span>
            ))}
            <span className="caret ml-0.5 text-accent" />
          </span>
        </p>

        <dl className="mt-6 grid grid-cols-[4.5rem_1fr] gap-y-2 border-t border-line pt-5 font-mono text-[0.75rem]">
          {rows.map((r) => (
            <div key={r.k} className="contents">
              <dt className="text-fg-3">{r.k}</dt>
              <dd className="truncate">
                {r.href ? (
                  <a href={r.href} className="link-draw" {...(r.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
                    {r.v}
                  </a>
                ) : (
                  r.v
                )}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Stack">
          {stack.map((s) => (
            <li key={s} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.6875rem] text-fg-2">
              {s}
            </li>
          ))}
        </ul>

        <a
          href={site.links.resume}
          className="group/r mt-6 flex items-center justify-between border-t border-line pt-4 font-mono text-[0.75rem] text-fg-2 hover:text-fg"
        >
          résumé · PDF
          <ArrowUpRight size={14} aria-hidden className="text-accent-ink transition-transform group-hover/r:translate-x-0.5 group-hover/r:-translate-y-0.5" />
        </a>
      </article>
    </div>
  );
}
