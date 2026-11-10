import { WorkflowDiagram } from "@/components/workflow/workflow-diagram";
import { workflows } from "@/components/workflow/workflows";

// A project's "how it works" plate: an interactive workflow diagram, then the three plain-words steps.
export function ProjectFigure({ slug, n }: { slug: string; n: number }) {
  const wf = workflows[slug];
  if (!wf) return null;
  return (
    <figure className="plate wf-plate">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 pt-4 font-mono text-[0.75rem] text-fg-3 sm:px-6">
        <span>
          fig. <b className="font-medium text-accent-ink">{String(n).padStart(2, "0")}</b> · how it works
        </span>
        <span aria-hidden>hover or tap a stage for details</span>
      </figcaption>
      <div className="px-4 py-6 sm:px-6 sm:py-8">
        <WorkflowDiagram wf={wf} />
      </div>
      <ol className="grid gap-x-6 gap-y-4 border-t border-line px-5 py-5 sm:grid-cols-3 sm:px-6">
        {wf.steps.map((s, i) => (
          <li key={s.title} className="flex gap-3">
            <span
              aria-hidden
              className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent font-mono text-[0.6875rem] font-semibold text-white dark:text-black"
            >
              {i + 1}
            </span>
            <p className="text-[0.875rem] leading-relaxed text-fg-2">
              <span className="font-semibold text-fg">{s.title}.</span> {s.text}
            </p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
