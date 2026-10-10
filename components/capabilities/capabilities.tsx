import { capabilities } from "@/lib/content";

export function Capabilities() {
  return (
    <section aria-labelledby="cap-title" className="section-y snap-start border-t border-line">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)]">
            <h2 id="cap-title" className="reveal text-h2 font-semibold">
              How I build
            </h2>
            <p className="reveal mt-6 max-w-[32ch] text-fg-2">
              Five areas I own on a team, each with the opinion that shapes how I work in it.
            </p>
          </div>
        </div>

        <ol className="lg:col-span-8">
          {capabilities.map((c) => (
            <li key={c.name} className="reveal grid gap-4 border-t border-line py-10 first:border-t-0 first:pt-0 md:grid-cols-8 md:gap-8 lg:first:pt-2">
              <h3 className="meta pt-1.5 text-fg md:col-span-2">{c.name}</h3>
              <div className="md:col-span-6">
                <p className="text-[clamp(1.25rem,1.05rem+0.8vw,1.75rem)] leading-snug font-medium tracking-[-0.02em]">
                  {c.thesis}
                </p>
                <p className="mt-4 max-w-[58ch] text-fg-2">{c.proof}</p>
                <p className="meta mt-4">{c.tools.join("  /  ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
