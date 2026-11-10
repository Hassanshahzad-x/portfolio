import type { Kit } from "@/components/iso/draw";
import { sideRing, type Point3 } from "@/components/iso/iso-kit";
import type { Hue } from "@/components/iso/svg-css";

// The 3D objects a flow figure is built from, one per kind of thing in a system. Each is centred on
// (x, y) on the floor. The faces toward the viewer are x-max and y-max, so details go there.
// top = height of the object, hw/hd = half its footprint; the label sits above the far top corner.

type Draw = (k: Kit, x: number, y: number, hue: Hue) => React.ReactNode;
type Shape = { top: number; hw: number; hd: number; draw: Draw };

const B = (k: Kit, cx: number, cy: number, w: number, d: number, z: number, h: number, hue: Hue, o: { r?: number; halo?: boolean } = {}) =>
  k.box(cx - w / 2, cy - d / 2, w, d, z, h, { hue, crease: "none", r: o.r ?? 1.5, halo: o.halo });
const C = (k: Kit, cx: number, cy: number, r: number, z: number, h: number, hue: Hue, o: { halo?: boolean; steps?: number } = {}) =>
  k.cyl(cx, cy, r, z, h, { hue, crease: "none", halo: o.halo, steps: o.steps ?? 28 });
const face = (k: Kit, pts: Point3[], cls: string) => <path className={cls} d={k.path(pts, true)} />;
// A flat rectangle on the y-max face (constant y), from x0..x1 and z0..z1.
const front = (k: Kit, y: number, x0: number, x1: number, z0: number, z1: number, cls: string) =>
  face(k, [[x0, y, z0], [x1, y, z0], [x1, y, z1], [x0, y, z1]], cls);
const ring = (k: Kit, c: Point3, r: number, axis: "x" | "y", cls: string, hue?: Hue) => (
  <path className={cls} data-hue={hue} d={sideRing(c, r, axis, k.P, 24)} />
);

// Torso with rounded shoulders, a neck, and a head built from three slices so it reads as round.
const person: Draw = (k, x, y, hue) => (
  <g>
    {C(k, x, y, 7.5, 0, 13, hue, { halo: true })}
    {C(k, x, y, 6, 13, 2.5, hue, { steps: 24 })}
    {C(k, x, y, 2.2, 15.5, 2, "paper", { steps: 12 })}
    {C(k, x, y, 4, 17.5, 1.5, "paper", { steps: 18 })}
    {C(k, x, y, 5.2, 19, 5, "paper", { steps: 20 })}
    {C(k, x, y, 4, 24, 1.8, "paper", { steps: 18 })}
  </g>
);

export const shapes = {
  person: { top: 26, hw: 7, hd: 7, draw: person },
  people: {
    top: 26, hw: 12, hd: 12,
    draw: (k, x, y, hue) => (
      <g>
        {person(k, x - 7, y - 7, hue)}
        {person(k, x + 7, y + 7, hue)}
      </g>
    ),
  },
  db: {
    top: 25, hw: 15, hd: 15,
    draw: (k, x, y, hue) => (
      <g>
        {[0, 9, 18].map((z) => (
          <g key={z}>{C(k, x, y, 15, z, 7, hue, { halo: z === 0 })}</g>
        ))}
      </g>
    ),
  },
  // AI / processing: a chip with pins and a raised core.
  chip: {
    top: 8, hw: 15, hd: 15,
    draw: (k, x, y, hue) => (
      <g>
        {B(k, x, y, 30, 30, 0, 5, hue, { r: 2, halo: true })}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            {B(k, x - 10.5 + i * 7, y + 16.5, 3, 4, 0.5, 2, "grey", { r: 0.5 })}
            {B(k, x + 16.5, y - 10.5 + i * 7, 4, 3, 0.5, 2, "grey", { r: 0.5 })}
          </g>
        ))}
        {B(k, x, y, 16, 16, 5, 3, "grey", { r: 1.5 })}
        {face(k, [[x - 5, y - 5, 8.1], [x + 5, y - 5, 8.1], [x + 5, y + 5, 8.1], [x - 5, y + 5, 8.1]], "fl-core")}
      </g>
    ),
  },
  mic: {
    top: 26, hw: 9, hd: 9,
    draw: (k, x, y, hue) => (
      <g>
        {C(k, x, y, 9, 0, 2.5, "grey", { halo: true })}
        {C(k, x, y, 1.6, 2.5, 11, "grey", { steps: 12 })}
        {C(k, x, y, 5.5, 13, 13, hue, { steps: 24 })}
      </g>
    ),
  },
  speaker: {
    top: 30, hw: 12, hd: 9,
    draw: (k, x, y, hue) => (
      <g>
        {B(k, x, y, 24, 18, 0, 30, hue, { r: 2, halo: true })}
        {ring(k, [x, y + 9.1, 10], 6.5, "y", "fl-cone")}
        {ring(k, [x, y + 9.1, 10], 2.5, "y", "fl-dome")}
        {ring(k, [x, y + 9.1, 23], 3, "y", "fl-cone")}
      </g>
    ),
  },
  docs: {
    top: 8, hw: 12, hd: 15,
    draw: (k, x, y, hue) => (
      <g>
        {B(k, x - 3, y - 3, 24, 30, 0, 1.6, hue, { r: 1, halo: true })}
        {B(k, x - 1.5, y - 1.5, 24, 30, 3, 1.6, hue, { r: 1 })}
        {B(k, x, y, 24, 30, 6, 1.6, "paper", { r: 1 })}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>{k.line([[x - 8, y - 10 + i * 5, 7.7], [x + (i === 4 ? 0 : 8), y - 10 + i * 5, 7.7]], "faint", { className: "fl-detail" })}</g>
        ))}
      </g>
    ),
  },
  chart: {
    top: 20, hw: 18, hd: 10,
    draw: (k, x, y, hue) => (
      <g>
        {B(k, x, y, 36, 20, 0, 3, "grey", { r: 1.5, halo: true })}
        {[9, 17, 13].map((h, i) => (
          <g key={i}>{B(k, x - 11 + i * 11, y, 7, 8, 3, h, hue, { r: 0.8 })}</g>
        ))}
      </g>
    ),
  },
  screen: {
    top: 32, hw: 18, hd: 2,
    draw: (k, x, y, hue) => (
      <g>
        {B(k, x, y, 14, 10, 0, 2, "grey", { r: 1, halo: true })}
        {B(k, x, y, 3, 3, 2, 9, "grey", { r: 0.5 })}
        {B(k, x, y, 36, 4, 10, 22, hue, { r: 1 })}
        {front(k, y + 2.05, x - 16, x + 16, 12, 30, "fl-glass")}
        {k.line([[x - 12, y + 2.1, 26], [x + 4, y + 2.1, 26]], "faint", { className: "fl-glyph" })}
        {k.line([[x - 12, y + 2.1, 22], [x + 10, y + 2.1, 22]], "faint", { className: "fl-glyph fl-dim" })}
        {k.line([[x - 12, y + 2.1, 18], [x + 6, y + 2.1, 18]], "faint", { className: "fl-glyph fl-dim" })}
      </g>
    ),
  },
  queue: {
    top: 10, hw: 26, hd: 5,
    draw: (k, x, y, hue) => (
      <g>
        {B(k, x, y, 54, 12, 0, 2, "grey", { r: 1, halo: true })}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>{B(k, x - 19.5 + i * 13, y, 9, 9, 2, 9, hue, { r: 1 })}</g>
        ))}
      </g>
    ),
  },
  calendar: {
    top: 33, hw: 15, hd: 3,
    draw: (k, x, y, hue) => (
      <g>
        {B(k, x, y, 30, 5, 0, 30, hue, { r: 1.5, halo: true })}
        {front(k, y + 2.55, x - 13, x + 13, 2, 23, "fl-paper")}
        {[8, 14].map((z) => (
          <g key={z}>{k.line([[x - 13, y + 2.6, z], [x + 13, y + 2.6, z]], "faint", { className: "fl-detail" })}</g>
        ))}
        {[-4.3, 4.3].map((dx) => (
          <g key={dx}>{k.line([[x + dx, y + 2.6, 2], [x + dx, y + 2.6, 20]], "faint", { className: "fl-detail" })}</g>
        ))}
        {front(k, y + 2.6, x + 4.8, x + 12.5, 2.5, 7.5, "fl-mark")}
        {C(k, x - 8, y, 1.6, 29, 4, "grey", { steps: 10 })}
        {C(k, x + 8, y, 1.6, 29, 4, "grey", { steps: 10 })}
      </g>
    ),
  },
  card: {
    top: 3, hw: 17, hd: 11,
    draw: (k, x, y, hue) => (
      <g>
        {B(k, x, y, 34, 22, 0, 2.5, hue, { r: 3, halo: true })}
        {face(k, [[x - 17, y - 7, 2.6], [x + 17, y - 7, 2.6], [x + 17, y - 3, 2.6], [x - 17, y - 3, 2.6]], "fl-band")}
        {B(k, x - 9, y + 4, 7, 5, 2.5, 0.8, "yellow", { r: 1 })}
      </g>
    ),
  },
  house: {
    top: 28, hw: 15, hd: 13,
    draw: (k, x, y, hue) => (
      <g>
        {B(k, x, y, 28, 24, 0, 16, hue, { r: 1, halo: true })}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>{B(k, x, y, 32 - i * 8, 28 - i * 8, 16 + i * 3, 3, "grey", { r: 0.5 })}</g>
        ))}
        {front(k, y + 12.05, x - 3, x + 3, 0, 9, "fl-door")}
        {face(k, [[x + 14.05, y - 7, 7], [x + 14.05, y + 1, 7], [x + 14.05, y + 1, 12], [x + 14.05, y - 7, 12]], "fl-glass")}
      </g>
    ),
  },
  lock: {
    top: 25, hw: 12, hd: 6,
    draw: (k, x, y, hue) => (
      <g>
        {ring(k, [x, y, 18], 7, "y", "fl-ink fl-shackle")}
        {B(k, x, y, 24, 12, 0, 18, hue, { r: 2, halo: true })}
        {ring(k, [x, y + 6.1, 11], 2.2, "y", "fl-hole")}
        {front(k, y + 6.1, x - 0.9, x + 0.9, 5, 10, "fl-hole")}
      </g>
    ),
  },
  server: {
    top: 23, hw: 15, hd: 12,
    draw: (k, x, y, hue) => (
      <g>
        {[0, 8, 16].map((z) => (
          <g key={z}>
            {B(k, x, y, 30, 24, z, 7, hue, { r: 1.5, halo: z === 0 })}
            {k.line([[x - 12, y + 12.1, z + 3.5], [x + 2, y + 12.1, z + 3.5]], "faint", { className: "fl-detail" })}
            {k.line([[x + 7, y + 12.1, z + 3.5], [x + 11, y + 12.1, z + 3.5]], "faint", { className: "fl-led" })}
          </g>
        ))}
      </g>
    ),
  },
  car: {
    top: 18, hw: 21, hd: 10,
    draw: (k, x, y, hue) => (
      <g>
        {ring(k, [x - 12, y - 10, 4.5], 4.5, "y", "fl-tire")}
        {ring(k, [x + 12, y - 10, 4.5], 4.5, "y", "fl-tire")}
        {B(k, x, y, 42, 20, 2, 9, hue, { r: 3, halo: true })}
        {B(k, x - 2, y, 22, 17, 11, 7, hue, { r: 3 })}
        {front(k, y + 8.55, x - 11, x + 7, 12, 17, "fl-glass")}
        {face(k, [[x + 9.05, y - 6, 12], [x + 9.05, y + 6, 12], [x + 9.05, y + 6, 17], [x + 9.05, y - 6, 17]], "fl-glass")}
        {ring(k, [x - 12, y + 10.2, 4.5], 4.5, "y", "fl-tire")}
        {ring(k, [x + 12, y + 10.2, 4.5], 4.5, "y", "fl-tire")}
      </g>
    ),
  },
  plane: {
    top: 25, hw: 23, hd: 4,
    draw: (k, x, y, hue) => (
      <g>
        {C(k, x, y, 7, 0, 1.5, "grey", { halo: true })}
        {C(k, x, y, 1, 1.5, 6.5, "grey", { steps: 10 })}
        {B(k, x - 2, y - 12, 12, 22, 11, 1.6, hue, { r: 2 })}
        {B(k, x - 19, y - 5, 6, 8, 14, 1.4, hue, { r: 1 })}
        {B(k, x, y, 46, 8, 8, 8, hue, { r: 4 })}
        {B(k, x - 19, y, 7, 1.6, 16, 9, hue, { r: 0.6 })}
        {B(k, x - 19, y + 5, 6, 8, 14, 1.4, hue, { r: 1 })}
        {B(k, x - 2, y + 12, 12, 22, 11, 1.6, hue, { r: 2 })}
        {front(k, y + 4.05, x + 12, x + 18, 12.5, 14.5, "fl-glass")}
      </g>
    ),
  },
  mail: {
    top: 6, hw: 16, hd: 11,
    draw: (k, x, y, hue) => (
      <g>
        {B(k, x - 2, y - 2, 32, 22, 0, 2.5, "paper", { r: 1, halo: true })}
        {B(k, x, y, 32, 22, 3, 3, hue, { r: 1 })}
        {k.line([[x - 16, y - 11, 6.1], [x, y + 2, 6.1], [x + 16, y - 11, 6.1]], "faint", { className: "fl-detail" })}
      </g>
    ),
  },
  hourglass: {
    top: 24, hw: 10, hd: 10,
    draw: (k, x, y, hue) => (
      <g>
        {C(k, x, y, 10, 0, 2.5, "grey", { halo: true })}
        {C(k, x, y, 6.5, 2.5, 8, hue)}
        {C(k, x, y, 2, 10.5, 3, hue, { steps: 12 })}
        {C(k, x, y, 6.5, 13.5, 8, "paper")}
        {C(k, x, y, 10, 21.5, 2.5, "grey")}
      </g>
    ),
  },
  link: {
    top: 20, hw: 10, hd: 8,
    draw: (k, x, y, hue) => (
      <g>
        {C(k, x, y, 12, 0, 1.5, "grey", { halo: true })}
        {ring(k, [x - 6, y, 12], 7, "x", "fl-ink fl-chain", hue)}
        {ring(k, [x + 6, y, 12], 7, "y", "fl-ink fl-chain", hue)}
      </g>
    ),
  },
  chat: {
    top: 20, hw: 17, hd: 11,
    draw: (k, x, y, hue) => (
      <g>
        {B(k, x - 10, y + 6, 7, 7, 2, 7, hue, { r: 2, halo: true })}
        {B(k, x, y, 34, 22, 8, 12, hue, { r: 8 })}
        {[-7, 0, 7].map((dx) => (
          <g key={dx}>{ring(k, [x + dx, y + 11.1, 14], 1.8, "y", "fl-bead")}</g>
        ))}
      </g>
    ),
  },
  map: {
    top: 17, hw: 19, hd: 15,
    draw: (k, x, y, hue) => (
      <g>
        {B(k, x, y, 38, 30, 0, 2, hue, { r: 1, halo: true })}
        {[-6.3, 6.3].map((dx) => (
          <g key={dx}>{k.line([[x + dx, y - 15, 2.1], [x + dx, y + 15, 2.1]], "faint", { className: "fl-detail" })}</g>
        ))}
        {k.line([[x - 15, y + 9, 2.1], [x - 4, y + 2, 2.1], [x + 4, y - 2, 2.1]], "faint", { className: "fl-route" })}
        {C(k, x + 4, y - 2, 1, 2, 9, "grey", { steps: 10 })}
        {C(k, x + 4, y - 2, 5, 11, 6, "pink", { steps: 22 })}
      </g>
    ),
  },
  bowl: {
    top: 15, hw: 14, hd: 14,
    draw: (k, x, y, hue) => (
      <g>
        {C(k, x, y, 7, 0, 2, hue, { halo: true })}
        {C(k, x, y, 14, 2, 8, hue)}
        {C(k, x, y, 10, 10, 2.5, "yellow")}
        {C(k, x - 2, y - 1, 5, 12.5, 2.5, "green", { steps: 16 })}
      </g>
    ),
  },
} satisfies Record<string, Shape>;

export type Kind = keyof typeof shapes;
