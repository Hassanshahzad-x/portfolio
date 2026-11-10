import { site } from "@/lib/content";

// Forest band in both themes; on the homepage it continues the contact section.
export function Footer() {
  return (
    <footer className="band">
      <div className="shell flex flex-col gap-4 border-t border-line py-8 font-mono text-[0.75rem] text-fg-3 md:flex-row md:items-center md:justify-between">
        <p>
          <span className="text-fg">{site.name}</span> · {site.role} · {site.location}
        </p>
        <ul className="flex gap-5">
          <li>
            <a href={`mailto:${site.email}`} className="link-draw hover:text-fg">email</a>
          </li>
          <li>
            <a href={site.links.github} target="_blank" rel="noreferrer" className="link-draw hover:text-fg">github</a>
          </li>
          <li>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="link-draw hover:text-fg">linkedin</a>
          </li>
        </ul>
        <p>set in Fraunces &amp; Geist · static, no trackers</p>
      </div>
    </footer>
  );
}
