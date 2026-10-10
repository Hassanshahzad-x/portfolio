"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowClockwise, ArrowUpRight } from "@phosphor-icons/react";

// The real request path of a Folklore voice conversation. Metrics are from the resume, nothing else.
const stages = [
  { name: "Listen", tech: "Speech-to-text", detail: "The family member asks out loud. Audio is transcribed before anything else runs." },
  { name: "Retrieve", tech: "SentenceTransformers, Qdrant", metric: "<120ms", detail: "The question is embedded and matched against the person's own interview chunks." },
  { name: "Re-rank", tech: "Cosine similarity, MMR", detail: "Maximum marginal relevance keeps context relevant without repeating the same story." },
  { name: "Generate", tech: "Gemini, persona-aware prompt", metric: "−40% TTFT", detail: "The answer is grounded in retrieved memories and streamed back token by token." },
  { name: "Speak", tech: "ElevenLabs, AES-256-GCM cache", metric: "−65% latency", detail: "Their configured voice reads the answer. Cached audio is encrypted and never synthesized twice." },
] as const;

const STEP_MS = 520;

export function SignalTrace() {
  const [lit, setLit] = useState<number>(stages.length); // stages lit so far; full by default (SSR, no-JS, reduced motion)
  const [active, setActive] = useState(1);
  const timer = useRef<ReturnType<typeof setInterval>>(undefined);

  const run = useCallback(() => {
    clearInterval(timer.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLit(stages.length);
      return;
    }
    setLit(0);
    let n = 0;
    timer.current = setInterval(() => {
      n += 1;
      setLit(n);
      setActive(n - 1);
      if (n >= stages.length) {
        clearInterval(timer.current);
        setActive(1);
      }
    }, STEP_MS);
  }, []);

  // Start once the panel has faded in (hero stagger), so the first stage is not missed.
  useEffect(() => {
    const t = setTimeout(run, 450);
    return () => {
      clearTimeout(t);
      clearInterval(timer.current);
    };
  }, [run]);

  const fill = lit === 0 ? 0 : (lit - 1) / (stages.length - 1);

  return (
    <figure className="border border-line bg-raised" aria-labelledby="trace-caption">
      <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5">
        <figcaption id="trace-caption" className="meta">
          Folklore: one spoken question, end to end
        </figcaption>
        <button
          type="button"
          onClick={run}
          className="press meta -mr-1.5 flex items-center gap-1.5 px-1.5 py-1 hover:text-fg"
        >
          <ArrowClockwise size={14} aria-hidden />
          Replay
        </button>
      </div>

      <div className="relative px-4 py-3 sm:px-5">
        {/* Rail: grey track with an accent fill that follows the request. */}
        <div aria-hidden className="absolute top-[34px] bottom-[34px] left-[calc(1rem+5px)] w-px bg-line sm:left-[calc(1.25rem+5px)]">
          <div className="trace-rail-fill absolute inset-0 bg-accent" style={{ transform: `scaleY(${fill})` }} />
        </div>

        <ol className="relative">
          {stages.map((s, i) => (
            <li key={s.name}>
              <button
                type="button"
                className="trace-stage group grid w-full grid-cols-[11px_1fr_auto] items-center gap-x-4 py-2.5 text-left"
                data-lit={i < lit}
                data-active={i === active}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span aria-hidden className="trace-node size-[11px] border border-line-strong bg-raised" />
                <span className="min-w-0">
                  <span className="block font-medium tracking-tight group-data-[active=true]:text-fg text-fg-2">
                    {s.name}
                  </span>
                  <span className="meta block sm:truncate">{s.tech}</span>
                </span>
                {"metric" in s ? (
                  <span className="font-mono text-sm text-accent-ink tabular-nums">{s.metric}</span>
                ) : (
                  <span />
                )}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="border-t border-line px-4 py-4 sm:px-5">
        <p aria-live="polite" className="min-h-[3.2em] text-[0.9375rem] leading-relaxed text-fg-2">
          {stages[active].detail}
        </p>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <p className="meta">
            <span className="text-fg">−70%</span> hallucinations vs general-purpose AI
          </p>
          <Link href="/work/folklore" className="meta group flex items-center gap-1 text-fg">
            <span className="link-draw">Case study</span>
            <ArrowUpRight size={13} aria-hidden className="transition-transform duration-(--dur-fast) group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </figure>
  );
}
