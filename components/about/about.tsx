import { site } from "@/lib/content";

const facts = [
  { k: "Based in", v: site.location },
  { k: "Works", v: "Remote with teams worldwide, or on-site in Lahore" },
  { k: "Currently", v: "Forward Deployed Engineer at Softpers" },
  { k: "Education", v: "B.S. Computer Science, FAST National University, 2019 - 2023" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y snap-start border-t border-line">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
        <h2 id="about-title" className="reveal text-h2 font-semibold lg:col-span-4">
          About
        </h2>
        <div className="lg:col-span-8">
          <p className="reveal text-[clamp(1.5rem,1.1rem+1.6vw,2.5rem)] leading-[1.2] font-medium tracking-[-0.03em]">
            I&apos;m Hassan. I like the parts of a product that have to be right: the retrieval that keeps an AI
            grounded, the billing that has to reconcile, the integration with someone else&apos;s API.
          </p>
          <p className="reveal mt-8 max-w-[60ch] text-lead text-fg-2">
            Most of my recent work has been in founding and forward-deployed roles, where I own a product from the
            schema to the deploy. Before that I wrote React and Node.js courses at Educative, which taught me to
            write code for the next person who has to read it.
          </p>

          <dl className="reveal mt-14 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.k} className="border-t border-line pt-4">
                <dt className="meta">{f.k}</dt>
                <dd className="mt-1.5">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
