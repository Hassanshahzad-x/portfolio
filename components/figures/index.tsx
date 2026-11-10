import * as folklore from "./folklore";
import * as outersuite from "./outersuite";
import * as voyajur from "./voyajur";
import * as vynsite from "./vynsite";
import * as hiloAtos from "./hilo-atos";
import * as wordley from "./wordley";
import * as recaller from "./recaller";
import * as safelinks from "./safelinks";
import * as respoon from "./respoon";

import type { Icon } from "@phosphor-icons/react";
import {
  AirplaneTilt, BowlFood, CalendarDots, Car, ChartBar, ChatCircleDots, Cpu, CreditCard, Database, EnvelopeSimple, Files,
  HardDrives, Hourglass, House, LinkSimple, LockKey, MapPin, Microphone, Monitor, Queue, SpeakerHigh, User, Users,
} from "@phosphor-icons/react/ssr";
import { H, W } from "@/components/iso/draw";
import { hues, type Hue } from "@/components/iso/svg-css";
import type { FlowStep } from "./flow";
import type { Kind } from "./shapes";

type Fig = { Art: () => React.ReactNode; label: string; steps: (FlowStep & { kind: Kind; hue: Hue })[] };

export const figures: Record<string, Fig> = {
  folklore,
  outersuite,
  voyajur,
  vynsite,
  "hilo-atos": hiloAtos,
  wordley,
  recaller,
  safelinks,
  respoon,
};

// The flat 2D twin of each 3D object, shown beside its step.
const icons: Record<Kind, Icon> = {
  person: User, people: Users, db: Database, chip: Cpu, mic: Microphone, speaker: SpeakerHigh, docs: Files,
  chart: ChartBar, screen: Monitor, queue: Queue, calendar: CalendarDots, card: CreditCard, house: House, lock: LockKey,
  server: HardDrives, car: Car, plane: AirplaneTilt, mail: EnvelopeSimple, hourglass: Hourglass, link: LinkSimple,
  chat: ChatCircleDots, map: MapPin, bowl: BowlFood,
};

// A project's "how it works" plate: numbered steps in plain words beside a colored model of the system,
// on the page's 12-column rhythm (steps under the title column, drawing under the summary column).
export function ProjectFigure({ slug, n }: { slug: string; n: number }) {
  const f = figures[slug];
  if (!f) return null;
  return (
    <figure className="plate @container overflow-hidden">
      <div className="grid @3xl:grid-cols-12">
        <div className="@3xl:order-2 @3xl:col-span-7">
          <figcaption className="flex items-baseline justify-between gap-4 px-5 pt-4 font-mono text-[0.75rem] text-fg-3 sm:px-6">
            <span>
              fig. <b className="font-medium text-accent-ink">{String(n).padStart(2, "0")}</b> · how it works
            </span>
            <span aria-hidden>{f.steps.length} steps</span>
          </figcaption>
          <div className="px-2 pb-2 sm:px-4">
            {/* Prerendered per theme by app/figures/[file]/route.tsx; the hidden one is never fetched (lazy). */}
            {(["dark", "light"] as const).map((t) => (
              // eslint-disable-next-line @next/next/no-img-element -- static SVG, nothing to optimize
              <img
                key={t}
                src={`/figures/${slug}-${t}.svg`}
                alt={t === "dark" ? f.label : ""}
                aria-hidden={t === "light" || undefined}
                width={W}
                height={H}
                loading="lazy"
                decoding="async"
                className={`block h-auto w-full ${t === "dark" ? "hidden dark:block" : "dark:hidden"}`}
              />
            ))}
          </div>
        </div>
        <ol className="divide-y divide-line border-t border-line @3xl:order-1 @3xl:col-span-5 @3xl:border-t-0 @3xl:border-r">
          {f.steps.map((s, i) => {
            const Glyph = icons[s.kind];
            const c = hues[s.hue];
            return (
              <li key={s.title} className="flex gap-4 px-5 py-5 sm:px-6">
                <span
                  aria-hidden
                  className="relative grid size-14 shrink-0 place-items-center rounded-xl border"
                  style={{ color: c, background: `color-mix(in srgb, ${c} 14%, transparent)`, borderColor: `color-mix(in srgb, ${c} 40%, transparent)` }}
                >
                  <Glyph size={30} weight="duotone" />
                  <span className="absolute -right-1.5 -bottom-1.5 grid size-5 place-items-center rounded-full bg-accent font-mono text-[0.6875rem] font-semibold text-white dark:text-black">
                    {i + 1}
                  </span>
                </span>
                <div>
                  <p className="font-display text-[1.25rem] leading-tight">{s.title}</p>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-fg-2">{s.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </figure>
  );
}
