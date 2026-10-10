import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { site } from "@/lib/content";
import { CopyEmail } from "./copy-email";

const links = [
  { label: "LinkedIn", href: site.links.linkedin, external: true },
  { label: "GitHub", href: site.links.github, external: true },
  { label: "Résumé (PDF)", href: site.links.resume, external: false },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y snap-start border-t border-line">
      <div className="shell">
        <h2 id="contact-title" className="reveal max-w-[12ch] text-display font-semibold">
          Have something worth building?
        </h2>
        <p className="reveal mt-8 max-w-[44ch] text-lead text-fg-2">
          I&apos;m happy to talk about product engineering, AI features or a system that needs an owner. Email is the
          fastest way to reach me.
        </p>

        <div className="reveal mt-12 flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
          <a
            href={`mailto:${site.email}`}
            className="link-draw self-start text-[clamp(1.125rem,0.7rem+2.2vw,2.25rem)] font-medium tracking-[-0.03em] break-all"
          >
            {site.email}
          </a>
          <CopyEmail email={site.email} />
        </div>

        <ul className="reveal mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group inline-flex items-center gap-1.5 text-lg font-medium"
              >
                <span className="link-draw">{l.label}</span>
                <ArrowUpRight
                  size={16}
                  aria-hidden
                  className="text-accent-ink transition-transform duration-(--dur-fast) group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
                {l.external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
