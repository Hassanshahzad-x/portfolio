"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Stop = { path: string; n: string; label: string; total: number };

// Header readout: which stop of the homepage trace sits in the middle of the screen. Decorative.
export function TraceReadout() {
  const path = usePathname();
  const [stop, setStop] = useState<Stop | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-stop]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const el = e.target as HTMLElement;
          if (e.isIntersecting)
            setStop({ path, n: el.dataset.stop!.padStart(2, "0"), label: el.dataset.label ?? "", total: els.length });
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  const live = stop?.path === path ? stop : null;
  const slug = path.match(/^\/work\/([^/]+)/)?.[1];
  const label = live?.label ?? (slug ? `case file · ${slug}` : path.startsWith("/work") ? "the index" : "off the trace");

  return (
    <div aria-hidden className="flex items-center gap-4 font-mono text-[0.6875rem] tracking-[0.04em] text-fg-3">
      <p className="hidden overflow-hidden whitespace-nowrap lg:block">
        trace · {live && <span key={live.n} className="roll inline-block text-accent-ink">{live.n}</span>}
        {live && " · "}
        <span key={label} className="roll inline-block">{label}</span>
      </p>
      {live && (
        <p className="overflow-hidden rounded-[3px] border border-line px-2 py-1 whitespace-nowrap">
          stop <span key={live.n} className="roll inline-block text-fg">{live.n}</span> / {live.total}
        </p>
      )}
    </div>
  );
}
