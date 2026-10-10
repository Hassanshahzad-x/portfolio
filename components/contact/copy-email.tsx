"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed"); // clipboard blocked (insecure context, permissions): the mailto link still works
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2000);
  };

  const copied = state === "copied";
  return (
    <button
      type="button"
      onClick={copy}
      className="press inline-flex min-w-[9.5rem] items-center justify-center gap-2 border border-line-strong px-5 py-3 font-medium hover:border-fg data-[state=copied]:border-success data-[state=copied]:text-success"
      data-state={state}
    >
      {copied ? <Check size={16} weight="bold" aria-hidden /> : <Copy size={16} aria-hidden />}
      <span aria-live="polite">{copied ? "Copied" : state === "failed" ? "Copy failed" : "Copy email"}</span>
    </button>
  );
}
