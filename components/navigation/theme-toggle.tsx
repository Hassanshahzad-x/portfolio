"use client";

import { Moon, Sun } from "@phosphor-icons/react";

// No React state: the theme lives on <html data-theme>, and CSS picks the icon.
function toggle() {
  const root = document.documentElement;
  const current = root.dataset.theme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
}

export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggle}
      className="press flex size-11 items-center justify-center text-fg-2 hover:text-fg md:size-9"
      aria-label="Toggle dark mode"
    >
      <Moon size={19} aria-hidden className="dark:hidden" />
      <Sun size={19} aria-hidden className="hidden dark:block" />
    </button>
  );
}
