import Link from "next/link";
import { site } from "@/lib/content";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";
import { TraceReadout } from "./trace-readout";

export const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/work", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <header className="nav-surface sticky top-0 z-40 border-b border-transparent backdrop-blur-md">
      <nav aria-label="Primary" className="shell flex h-(--nav-h) items-center justify-between gap-6">
        <Link href="/" className="font-display text-[1.125rem] font-semibold tracking-[-0.01em]">
          Hassan<span className="text-accent">·</span>Shahzad
          <span className="sr-only">, home</span>
        </Link>

        <div className="mr-auto lg:mx-auto">
          <TraceReadout />
        </div>

        <ul className="hidden items-center gap-6 font-mono text-[0.8125rem] md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="link-draw text-fg-2 transition-colors hover:text-fg">
                {l.label.toLowerCase()}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <a
              href={site.links.resume}
              className="press rounded-full border border-line-strong px-3.5 py-1.5 text-fg hover:border-fg"
            >
              résumé
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <MobileMenu links={navLinks} resume={site.links.resume} />
        </div>
      </nav>
    </header>
  );
}
