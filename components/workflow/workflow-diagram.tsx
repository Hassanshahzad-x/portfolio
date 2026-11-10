import { NodeIllustration } from "./art";
import type { Hue, Turn, Workflow, WorkflowNode as Node } from "./types";

// A project's workflow as cards joined by arrows. Server-rendered and JS-free: a click or tap opens a native
// popover with the node's details (light dismiss, Esc and focus return built in), and :has() rules light up
// the active node's connectors. Styles live under "workflow" in app/globals.css.
//
// Desktop: nodes sit on a cols x rows grid of W x H cells; the connector SVG shares that coordinate space and
// scales with the box. Below the container breakpoint the same nodes stack in data order and the SVG hides.

const W = 200;
const H = 180;
// Card size in grid units, so arrowheads can be placed in the visible gap between cards.
const CW = 156;
const CH = 138;

// Mid-tone base per hue; globals.css derives the pastel tint, fills and ink from it per theme.
const hues: Record<Hue, string> = {
  lavender: "#a78bfa",
  blue: "#7aa7f0",
  mint: "#6fcf9f",
  cyan: "#5ec4d6",
  peach: "#f4a96b",
  coral: "#f08a80",
  neutral: "#a8a29e",
};

type Pt = [number, number];
const center = (n: Node): Pt => [(n.col + 0.5) * W, (n.row + 0.5) * H];

function route(p: Pt, q: Pt, turn: Turn = "xmid"): Pt[] {
  if (p[0] === q[0] || p[1] === q[1]) return [p, q];
  const mx = (p[0] + q[0]) / 2;
  const my = (p[1] + q[1]) / 2;
  if (turn === "xy") return [p, [q[0], p[1]], q];
  if (turn === "yx") return [p, [p[0], q[1]], q];
  if (turn === "ymid") return [p, [p[0], my], [q[0], my], q];
  return [p, [mx, p[1]], [mx, q[1]], q];
}

// Orthogonal polyline with rounded corners.
function pathOf(pts: Pt[], r = 14) {
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [a, b, c] = [pts[i - 1], pts[i], pts[i + 1]];
    const k = Math.min(r, Math.hypot(b[0] - a[0], b[1] - a[1]) / 2, Math.hypot(c[0] - b[0], c[1] - b[1]) / 2);
    const u = (from: Pt, to: Pt): Pt => {
      const l = Math.hypot(to[0] - from[0], to[1] - from[1]) || 1;
      return [(to[0] - from[0]) / l, (to[1] - from[1]) / l];
    };
    const [ux, uy] = u(b, a);
    const [vx, vy] = u(b, c);
    d += ` L${b[0] + ux * k} ${b[1] + uy * k} Q${b[0]} ${b[1]} ${b[0] + vx * k} ${b[1] + vy * k}`;
  }
  const z = pts[pts.length - 1];
  return `${d} L${z[0]} ${z[1]}`;
}

// Arrowhead touching the target card's edge, pointing in.
function arrowOf(pts: Pt[]) {
  const a = pts[pts.length - 2];
  const b = pts[pts.length - 1];
  const horizontal = a[1] === b[1];
  const dir = Math.sign(horizontal ? b[0] - a[0] : b[1] - a[1]);
  const gap = (horizontal ? CW : CH) / 2 + 3;
  const [x, y] = horizontal ? [b[0] - dir * gap, b[1]] : [b[0], b[1] - dir * gap];
  const angle = horizontal ? (dir > 0 ? 0 : 180) : dir > 0 ? 90 : -90;
  return `translate(${x} ${y}) rotate(${angle})`;
}

export function WorkflowDiagram({ wf }: { wf: Workflow }) {
  const id = `wf-${wf.slug}`;
  const nid = (n: string) => `${id}-n-${n}`;
  const pid = (n: string) => `${id}-p-${n}`;
  const by = Object.fromEntries(wf.nodes.map((n) => [n.id, n]));
  const titles = (ids: string[]) => ids.map((i) => by[i].title);
  const outOf = (n: string) => titles(wf.links.filter((l) => l[0] === n).map((l) => l[1]));

  // While a node is hovered, focused or open, its connectors light up and carry a moving dash.
  const css = wf.nodes
    .map((n) => {
      const on = `#${id}:has(#${nid(n.id)}:is(:hover,:focus-visible),#${pid(n.id)}:popover-open) .wf-l-${n.id}`;
      return `${on}{--on:1}${on} .wf-flow{animation-play-state:running}`;
    })
    .join("");

  return (
    <div id={id} className="wf @container" role="group" aria-label={wf.label}>
      <style>{css}</style>
      <div
        className="wf-board"
        style={{ "--cols": wf.cols, "--rows": wf.rows, "--cw": CW / W, "--ch": CH / H } as React.CSSProperties}
      >
        <svg className="wf-links" viewBox={`0 0 ${wf.cols * W} ${wf.rows * H}`} aria-hidden focusable="false">
          {wf.links.map(([a, b, turn]) => {
            const pts = route(center(by[a]), center(by[b]), turn);
            const d = pathOf(pts);
            return (
              <g key={`${a}-${b}`} className={`wf-link wf-l-${a} wf-l-${b}`}>
                <path d={d} className="wf-track" />
                <path d={d} className="wf-flow" pathLength={100} />
                <path d="M-7-6 0 0-7 6" transform={arrowOf(pts)} className="wf-head" />
              </g>
            );
          })}
        </svg>
        {wf.nodes.map((n) => (
          <WorkflowNode
            key={n.id}
            n={n}
            wf={wf}
            ids={{ node: nid(n.id), panel: pid(n.id) }}
            to={outOf(n.id)}
          />
        ))}
      </div>
    </div>
  );
}

function WorkflowNode({
  n,
  wf,
  ids,
  to,
}: {
  n: Node;
  wf: Workflow;
  ids: { node: string; panel: string };
  to: string[];
}) {
  return (
    <div
      className="wf-node"
      style={
        {
          "--x": (n.col + 0.5) / wf.cols,
          "--y": (n.row + 0.5) / wf.rows,
          "--hue": hues[n.hue],
          "--a": `--${ids.node}`,
        } as React.CSSProperties
      }
    >
      <button
        type="button"
        id={ids.node}
        className="wf-card"
        popoverTarget={ids.panel}
        aria-haspopup="dialog"
      >
        <span className="wf-well">
          <NodeIllustration name={n.art} />
        </span>
        <span className="wf-name">
          {n.step && (
            <span className="wf-step" aria-label={`Step ${n.step}:`}>
              {n.step}
            </span>
          )}
          {n.title}
        </span>
        {to.length > 0 && (
          <span className="wf-next">
            <span aria-hidden>↓ </span>leads to {to.join(", ")}
          </span>
        )}
      </button>
      <NodePanel n={n} id={ids.panel} />
    </div>
  );
}

function Tech({ items }: { items: string[] }) {
  return (
    <ul className="wf-tech" aria-label="Technology">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function NodePanel({ n, id }: { n: Node; id: string }) {
  return (
    <div popover="auto" id={id} className="wf-panel" role="dialog" aria-labelledby={`${id}-h`}>
      <div className="wf-panel-head">
        <span className="wf-panel-art" aria-hidden>
          <NodeIllustration name={n.art} />
        </span>
        <div>
          {n.step && <p className="wf-panel-kicker">Step {n.step}</p>}
          <h4 id={`${id}-h`}>{n.title}</h4>
        </div>
        <button type="button" popoverTarget={id} popoverTargetAction="hide" className="wf-close" aria-label="Close details">
          ×
        </button>
      </div>
      <dl>
        <dt>Input</dt>
        <dd>{n.input}</dd>
        <dt>How it works</dt>
        <dd>{n.how}</dd>
        {n.tech.length > 0 && (
          <>
            <dt>Technology</dt>
            <dd>
              <Tech items={n.tech} />
            </dd>
          </>
        )}
        {n.output && (
          <>
            <dt>Output</dt>
            <dd>{n.output}</dd>
          </>
        )}
      </dl>
    </div>
  );
}
