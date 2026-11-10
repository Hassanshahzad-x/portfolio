import { site } from "@/lib/content";
import { Kicker, Thread } from "@/components/trace/thread";

const facts = [
  { k: "base", v: site.location },
  { k: "works", v: "Remote with teams worldwide, or on-site in Lahore" },
  { k: "currently", v: "Forward Deployed Engineer at Softpers" },
  { k: "education", v: "B.S. Computer Science, FAST National University, 2019 - 2023" },
  { k: "email", v: site.email, href: `mailto:${site.email}` },
  { k: "handles", v: "github / linkedin", href: site.links.github },
  { k: "résumé", v: "hassan-shahzad-resume.pdf", href: site.links.resume },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" data-stop={2} data-label="who" className="relative section-y">
      <Thread />
      <div className="shell relative">
        <Kicker n={2} label="who" />
        <div className="mt-8 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <h2 id="about-title" className="reveal font-display text-h2 font-[430]">
              Who<span className="text-accent">.</span>
            </h2>
            <p className="reveal mt-8 font-display text-[clamp(1.375rem,1.05rem+1.2vw,2rem)] leading-[1.25] tracking-[-0.01em]">
              I&apos;m Hassan. I like the parts of a product that have to be right: the retrieval that keeps an AI
              grounded, the billing that has to reconcile, the integration with someone else&apos;s API.
            </p>
            <p className="reveal mt-6 max-w-[60ch] text-lead text-fg-2">
              Most of my recent work has been in founding and forward-deployed roles, where I own a product from the
              schema to the deploy. Before that I wrote React and Node.js courses at Educative, which taught me to
              write code for the next person who has to read it.
            </p>
          </div>

          <figure className="reveal lg:col-span-6 lg:pl-6">
            <dl className="plate divide-y divide-line px-6 py-2 sm:px-7">
              {facts.map((f) => (
                <div key={f.k} className="grid gap-1 py-3.5 sm:grid-cols-[7rem_1fr] sm:gap-4">
                  <dt className="font-mono text-[0.75rem] text-fg-3 sm:pt-0.5">{f.k}</dt>
                  <dd className="text-[0.9375rem]">
                    {f.href ? (
                      <a href={f.href} className="link-draw" {...(f.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
                        {f.v}
                      </a>
                    ) : (
                      f.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <figcaption className="kicker mt-4">
              fig. <b>02</b> · the record
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
