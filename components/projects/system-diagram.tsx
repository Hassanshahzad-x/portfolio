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
            <li aria-hidden className={`flex flex-col items-center text-fg-3 ${compact ? "sm:w-3" : "lg:w-5"}`}>
              {/* Header-high spacer, so the arrow centres on the tiles, not on header + tiles. */}
              <span className={`meta invisible mb-2 hidden ${compact ? "sm:block" : "lg:block"}`}>0</span>
              <span className="flex flex-1 items-center">
                <ArrowRight size={compact ? 12 : 16} className={compact ? "rotate-90 sm:rotate-0" : "rotate-90 lg:rotate-0"} />
              </span>
            </li>
          )}
          <li className="flex min-w-0 flex-1 flex-col">
            <p className="meta mb-2 flex items-baseline gap-2">
              <span className="text-accent-ink tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              {t.tier}
            </p>
            {/* Side by side, a short tier (under 5 nodes) centres against the tallest one instead of hugging the top. */}
            <ul className={`flex flex-1 flex-col gap-1.5 ${t.nodes.length < 5 ? "justify-center" : ""}`}>
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
