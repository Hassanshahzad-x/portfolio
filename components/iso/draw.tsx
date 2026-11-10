// Server-safe drawing helpers for the isometric figures, adapted from the anatomy kit's react/draw.tsx.
// Geometry runs at build time; the page receives finished SVG paths and no JS.
import {
  cylinder,
  fitProjection,
  iso,
  pathOf,
  slabOf,
  boxCorners,
  type Plan,
  type Point3,
  type Projection,
  type SolidPaths,
  type Tone,
  type LineTone,
} from "./iso-kit";
import type { Hue } from "./svg-css";

export const W = 600;
export const H = 340;

type SolidOpts = { tone?: Tone; crease?: Tone | "none"; lit?: boolean; halo?: boolean; hue?: Hue; inner?: React.ReactNode; className?: string };

export function Solid({ paths, tone = "hi", crease = "faint", lit, halo, hue, inner, className }: SolidOpts & { paths: SolidPaths }) {
  return (
    <g className={className ? `iso-solid ${className}` : "iso-solid"} data-lit={lit ? "" : undefined} data-hue={hue}>
      {halo && <path className="iso-halo" d={paths.fill} />}
      <path className="iso-fill" d={paths.fill} />
      {paths.shades.map((d, i) => (d ? <path key={i} className="iso-shade" data-shade={i} d={d} /> : null))}
      <path className="iso-top" d={paths.top} />
      {crease !== "none" && paths.crease && <path className="iso-line" data-tone={crease} d={paths.crease} />}
      {crease !== "none" && paths.bevel && <path className="iso-line" data-tone={crease} d={paths.bevel} />}
      {inner}
      <path className="iso-line iso-edge" data-tone={tone} d={paths.outline} />
    </g>
  );
}

// Everything a figure needs, bound to one camera. Units are world px: x, y on the floor, z up.
export function kit(plan: Plan, top: number, { azimuth = 45, elevation = 30, pad = 14 } = {}) {
  const P: Projection = fitProjection(boxCorners(plan, -4, top), W, H, { pad, azimuth, elevation });
  const at = (p: Point3) => iso(p, P);
  const path = (pts: Point3[], closed = false) => pathOf(pts.map(at), closed);

  return {
    P,
    at,
    path,
    box: (x: number, y: number, w: number, d: number, z: number, h: number, o: SolidOpts & { r?: number; steps?: number; bevel?: number } = {}) => (
      <Solid paths={slabOf({ x, y, w, d, r: o.r ?? 1.5 }, z, h, P, o.steps ?? 3, o.bevel ?? 0.6)} {...o} />
    ),
    cyl: (cx: number, cy: number, r: number, z: number, h: number, o: SolidOpts & { steps?: number } = {}) => (
      <Solid paths={cylinder(cx, cy, r, z, h, P, o.steps ?? 28, 0)} {...o} />
    ),
    line: (pts: Point3[], tone: LineTone = "lo", o: { flow?: boolean; closed?: boolean; className?: string } = {}) => (
      <path className={`iso-line ${o.className ?? ""}`} data-tone={tone} data-flow={o.flow ? "" : undefined} d={path(pts, o.closed)} />
    ),
    dots: (pts: Point3[], size = 0.6, tone: Tone = "mid") => (
      <g className="iso-dots" data-tone={tone}>
        {pts.map((p, i) => {
          const [x, y] = at(p);
          return <circle key={i} cx={x.toFixed(1)} cy={y.toFixed(1)} r={size} />;
        })}
      </g>
    ),
  };
}

export type Kit = ReturnType<typeof kit>;

export function Figure({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label}>
      {children}
    </svg>
  );
}
