import Link from "next/link";
import { site } from "@/lib/content";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

export const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/work", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <header className="nav-surface sticky top-0 z-40 border-b border-transparent backdrop-blur-md">
      <nav aria-label="Primary" className="shell flex h-(--nav-h) items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5 font-medium tracking-tight">
          <span
            aria-hidden
            className="size-2.5 bg-accent transition-transform duration-(--dur-med) ease-(--ease-out) group-hover:rotate-45"
          />
          {site.name}
        </Link>

        <ul className="hidden items-center gap-8 text-[0.9375rem] md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="link-draw text-fg-2 transition-colors hover:text-fg">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <a
              href={site.links.resume}
              className="press border border-line-strong px-3.5 py-1.5 text-fg hover:border-fg"
            >
              Résumé
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
