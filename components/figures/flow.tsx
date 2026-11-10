import { Figure, kit, type Kit } from "@/components/iso/draw";
import type { Point3 } from "@/components/iso/iso-kit";
import type { Hue } from "@/components/iso/svg-css";
import { shapes, type Kind } from "./shapes";

// A project's system as a little isometric model anyone can read: each part drawn as the thing it is
// (a person, a database, a chip for the AI, a calendar, a card), joined by lines with dots travelling
// along them, each named in plain words. Positions are given on a 330 x 170 grid (x runs right,
// y runs down-left); x and y are scaled by SPREAD and SQUASH
// to tune spacing against object size.

export type FlowNode = { id: string; x: number; y: number; kind: Kind; hue: Hue; label: string };
// Lines run along the floor, x first then y; "yx" turns the corner the other way round.
export type FlowLink = [from: string, to: string, turn?: "yx"];
export type FlowStep = { node: string; title: string; text: string };

const SPREAD = 1.15;
const SQUASH = 1; // y
// Objects are drawn this much larger than their spacing would allow at true scale. The projection is
// linear, so scaling the drawing about the object's floor point is the same as scaling it in 3D.
const GROW = 1.4;

// Labels sit above an object, or under it when another object stands right behind and would be covered.
function Label({ k, n, num, under }: { k: Kit; n: FlowNode; num?: number; under: boolean }) {
  if (!n.label) return null;
  const s = shapes[n.kind];
  const [x] = k.at([n.x, n.y, s.top * GROW]);
  const [, back] = k.at([n.x - s.hw * GROW, n.y - s.hd * GROW, s.top * GROW]); // the top's far corner
  const [, foot] = k.at([n.x + s.hw * GROW, n.y + s.hd * GROW, 0]); // the base's near corner
  const ty = under ? foot + 15 : back - 8;
  const w = n.label.length * 6.1 + (num ? 20 : 0);
  const left = x - w / 2;
  return (
    <g className="fl-label">
      {num && (
        <>
          <circle className="fl-num" cx={(left + 7).toFixed(1)} cy={(ty - 4).toFixed(1)} r={7} />
          <text className="fl-num-text" x={(left + 7).toFixed(1)} y={(ty - 0.6).toFixed(1)} textAnchor="middle">
            {num}
          </text>
        </>
      )}
      <text className="fl-text" x={(num ? left + 18 : x).toFixed(1)} y={ty.toFixed(1)} textAnchor={num ? "start" : "middle"}>
        {n.label}
      </text>
    </g>
  );
}

export function flow({ label, nodes: grid, links, steps }: { label: string; nodes: FlowNode[]; links: FlowLink[]; steps: FlowStep[] }) {
  const nodes = grid.map((n) => ({ ...n, x: n.x * SPREAD, y: n.y * SQUASH }));
  const xs = nodes.map((n) => n.x);
  const ys = nodes.map((n) => n.y);
  const M = 26;
  const plan = { x: Math.min(...xs) - M, y: Math.min(...ys) - M, w: Math.max(...xs) - Math.min(...xs) + M * 2, d: Math.max(...ys) - Math.min(...ys) + M * 2, r: 0 };
  const k = kit(plan, 48, { pad: 10, azimuth: 62 });
  const by = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const route = ([a, b, turn]: FlowLink): Point3[] => {
    const p = by[a];
    const q = by[b];
    const corner: Point3 = turn === "yx" ? [p.x, q.y, 0.4] : [q.x, p.y, 0.4];
    return [[p.x, p.y, 0.4], corner, [q.x, q.y, 0.4]];
  };
  // Painter's order: objects further back (smaller x + y) first.
  const sorted = [...nodes].sort((a, b) => a.x + a.y - (b.x + b.y));
  const num = (id: string) => steps.findIndex((s) => s.node === id) + 1 || undefined;

  function Art() {
    return (
      <Figure label={label}>
        {links.map((l, i) => (
          <g key={i} className="fl-link" data-hue={by[l[0]].hue}>
            {k.line(route(l), "faint", { className: "fl-track" })}
            {k.line(route(l), "faint", { className: "fl-dots", flow: true })}
          </g>
        ))}
        {sorted.map((n) => {
          const [px, py] = k.at([n.x, n.y, 0]);
          return (
            <g key={n.id} transform={`translate(${(px * (1 - GROW)).toFixed(1)} ${(py * (1 - GROW)).toFixed(1)}) scale(${GROW})`}>
              {shapes[n.kind].draw(k, n.x, n.y, n.hue)}
            </g>
          );
        })}
        {sorted.map((n) => (
          <Label key={n.id} k={k} n={n} num={num(n.id)} under={nodes.some((m) => Math.abs(m.x - n.x) < 60 && n.y - m.y > 0 && n.y - m.y < 110)} />
        ))}
      </Figure>
    );
  }

  // Each step carries its object's kind and color, so the list beside the drawing can match it.
  return { Art, label, steps: steps.map((s) => ({ ...s, kind: by[s.node].kind, hue: by[s.node].hue })) };
}
