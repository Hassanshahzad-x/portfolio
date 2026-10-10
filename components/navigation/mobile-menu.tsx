"use client";

import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { List, X } from "@phosphor-icons/react";

type Props = { links: readonly { href: string; label: string }[]; resume: string };

// Native <dialog> gives us focus trapping, Escape-to-close and an inert page for free.
export function MobileMenu({ links, resume }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const close = () => ref.current?.close();
  const router = useRouter();

  // Close first, then navigate: while the modal is open the page is inert and the hash scroll is lost.
  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    close();
    router.push(href);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className="press -mr-2 flex size-11 items-center justify-center md:hidden"
        aria-label="Open menu"
        aria-haspopup="dialog"
      >
        <List size={22} weight="regular" />
      </button>

      <dialog
        ref={ref}
        aria-label="Menu"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-bg p-0 text-fg backdrop:bg-transparent open:flex open:flex-col md:hidden"
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <div className="shell flex h-(--nav-h) shrink-0 items-center justify-end">
          <button
            type="button"
            onClick={close}
            className="press -mr-2 flex size-11 items-center justify-center"
            aria-label="Close menu"
            autoFocus
          >
            <X size={22} />
          </button>
        </div>
        <ul className="shell flex flex-1 flex-col justify-center gap-2 pb-[max(3rem,env(safe-area-inset-bottom))]">
          {links.map((l, i) => (
            <li key={l.href} className="enter" style={{ "--i": i } as React.CSSProperties}>
              <Link
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className="block py-2 text-[clamp(2.5rem,12vw,4rem)] leading-none font-medium tracking-[-0.04em]"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="enter mt-8" style={{ "--i": links.length } as React.CSSProperties}>
            <a href={resume} onClick={close} className="meta inline-block border border-line-strong px-4 py-3 text-fg">
              Résumé (PDF)
            </a>
          </li>
        </ul>
      </dialog>
    </>
  );
}
