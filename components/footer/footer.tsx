import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="snap-end border-t border-line">
      <div className="shell meta flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="text-fg">{site.name}</span>, {site.role} in {site.location}
        </p>
        <ul className="flex gap-6">
          <li>
            <a href={`mailto:${site.email}`} className="link-draw hover:text-fg">Email</a>
          </li>
          <li>
            <a href={site.links.github} target="_blank" rel="noreferrer" className="link-draw hover:text-fg">GitHub</a>
          </li>
          <li>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="link-draw hover:text-fg">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
