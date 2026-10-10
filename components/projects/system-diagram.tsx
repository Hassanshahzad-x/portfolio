import { Fragment } from "react";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import type { Project } from "@/lib/content";

// Tiers flow left to right on wide screens, top to bottom on narrow ones. Plain HTML, so it reflows and themes for free.
export function SystemDiagram({ project, compact = false }: { project: Project; compact?: boolean }) {
  const node = compact ? "px-2.5 py-1.5 text-[0.8125rem]" : "px-3 py-2 text-[0.875rem]";
  return (
    <ol className={`flex flex-col items-stretch ${compact ? "gap-2 sm:flex-row" : "gap-3 lg:flex-row"}`}>
      {project.system.map((t, i) => (
        <Fragment key={t.tier}>
          {i > 0 && (
            <li aria-hidden className={`flex items-center justify-center text-fg-3 ${compact ? "sm:w-3" : "lg:w-5"}`}>
              <ArrowRight size={compact ? 12 : 16} className={compact ? "rotate-90 sm:rotate-0" : "rotate-90 lg:rotate-0"} />
            </li>
          )}
          <li className="min-w-0 flex-1">
            <p className="meta mb-2 flex items-baseline gap-2">
              <span className="text-accent-ink tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              {t.tier}
            </p>
            <ul className="space-y-1.5">
              {t.nodes.map((n, j) => (
                <li
                  key={n}
                  className={`border bg-raised leading-snug ${node} ${i === 0 && j === 0 ? "border-accent" : "border-line"}`}
                >
                  {n}
                </li>
              ))}
            </ul>
          </li>
        </Fragment>
      ))}
    </ol>
  );
}
