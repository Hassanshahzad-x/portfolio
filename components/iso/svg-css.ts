// Styles embedded in each figure's .svg file. The files load as <img>, so page CSS and tokens can't reach
// them: every color is resolved here, once per theme, from the palette in globals.css.

const themes = {
  light: {
    bg: "#ffffff", paper: "#f2f1ee", top: "#f7f6f3",
    s0: "#d6d3cd", s1: "#dfdcd6", s2: "#e7e5e0", s3: "#efede9",
    hi: "#171615", mid: "#8a857d", lo: "#bdb9b2", faint: "#e2e0db",
    lit: "#ea580c", halo: "#57534e", haloOpacity: 0.25, dot: "#2a2826", onLit: "#fff",
  },
  dark: {
    bg: "#111111", paper: "#141414", top: "#1a1a1a",
    s0: "#070707", s1: "#0b0b0b", s2: "#0f0f0f", s3: "#131313",
    hi: "#f5f5f4", mid: "#8a8a8a", lo: "#4a4a4a", faint: "#262626",
    lit: "#ff7a1a", halo: "#000", haloOpacity: 0.8, dot: "#ededed", onLit: "#000",
  },
};

// Object colors for the flow figures, the same in both themes. Exported for the step list's icon tiles.
export const hues = {
  orange: "#ff7a1a",
  blue: "#3b82f6",
  violet: "#8b5cf6",
  green: "#22c55e",
  pink: "#ec4899",
  cyan: "#06b6d4",
  yellow: "#facc15",
  grey: "#8a8a8a",
  paper: "#f1efe9",
};

export type Theme = keyof typeof themes;
export type Hue = keyof typeof hues;
export const isTheme = (t: string): t is Theme => t in themes;

// Blend two #rrggbb colors; t = 0 gives a, 1 gives b.
function mix(a: string, b: string, t: number) {
  const ch = (h: string, i: number) => parseInt(h.slice(1 + i * 2, 3 + i * 2), 16);
  return `#${[0, 1, 2].map((i) => Math.round(ch(a, i) + (ch(b, i) - ch(a, i)) * t).toString(16).padStart(2, "0")).join("")}`;
}

function hueCss(theme: Theme) {
  const dark = theme === "dark";
  return Object.entries(hues)
    .map(([name, c]) => {
      const s = `.iso-solid[data-hue="${name}"]>`;
      const shade = (t: number) => mix(c, "#000000", t);
      const [s0, s1, s2, s3] = dark ? [shade(0.62), shade(0.5), shade(0.38), shade(0.26)] : [shade(0.32), shade(0.2), shade(0.08), mix(c, "#ffffff", 0.08)];
      return (
        `${s}.iso-fill{fill:${shade(0.45)}}${s}.iso-top{fill:${dark ? mix(c, "#ffffff", 0.08) : mix(c, "#ffffff", 0.35)}}` +
        `${s}.iso-shade[data-shade="0"]{fill:${s0}}${s}.iso-shade[data-shade="1"]{fill:${s1}}` +
        `${s}.iso-shade[data-shade="2"]{fill:${s2}}${s}.iso-shade[data-shade="3"]{fill:${s3}}` +
        `${s}.iso-edge{stroke:${dark ? mix(c, "#ffffff", 0.4) : mix(c, "#000000", 0.4)}}` +
        `.fl-link[data-hue="${name}"] .iso-line,.fl-ink[data-hue="${name}"]{stroke:${c}}`
      );
    })
    .join("");
}

export function svgCss(theme: Theme) {
  const t = themes[theme];
  return `
path,circle{vector-effect:non-scaling-stroke}
.iso-fill{fill:${t.paper}}
.iso-shade[data-shade="0"]{fill:${t.s0}}.iso-shade[data-shade="1"]{fill:${t.s1}}
.iso-shade[data-shade="2"]{fill:${t.s2}}.iso-shade[data-shade="3"]{fill:${t.s3}}
.iso-top{fill:${t.top}}
.iso-halo{fill:${t.halo};opacity:${t.haloOpacity * 0.5};transform:translate(0,5px)}
.iso-line{fill:none;stroke:${t.lo};stroke-width:.7;stroke-linecap:round;stroke-linejoin:round}
.iso-line[data-tone="hi"]{stroke:${t.hi}}.iso-line[data-tone="mid"]{stroke:${t.mid}}
.iso-line[data-tone="faint"]{stroke:${t.faint}}
.iso-dots circle{fill:${t.dot};opacity:.32}
.iso-dots[data-tone="hi"] circle{opacity:.85}.iso-dots[data-tone="mid"] circle{opacity:.45}.iso-dots[data-tone="lo"] circle{opacity:.22}
.fl-track{stroke-width:1.6;opacity:.35}
.fl-dots{stroke-width:4.5;stroke-dasharray:0 8}
.fl-text{fill:${t.hi};font:600 11px ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;paint-order:stroke;stroke:${t.bg};stroke-width:3px;stroke-linejoin:round}
.fl-num{fill:${t.lit}}
.iso-line.fl-detail{stroke:rgba(0,0,0,.38);stroke-width:.9}
.fl-glass{fill:#0c1626;stroke:rgba(255,255,255,.18);stroke-width:.6}
.iso-line.fl-glyph{stroke:#7dd3fc;stroke-width:1.6}.fl-dim{opacity:.55}
.fl-paper{fill:#f8f7f4}.fl-mark{fill:#ff7a1a}
.fl-core{fill:#7dd3fc;opacity:.9}
.fl-door,.fl-band,.fl-hole{fill:rgba(0,0,0,.55);stroke:none}
.fl-cone{fill:rgba(0,0,0,.5);stroke:rgba(255,255,255,.25);stroke-width:.6}.fl-dome{fill:rgba(255,255,255,.35)}
.fl-ink{fill:none;stroke-width:3;stroke-linecap:round}.fl-shackle{stroke:#a3a3a3}
.fl-tire{fill:#141414;stroke:#3a3a3a;stroke-width:.8}
.iso-line.fl-led{stroke:#4ade80;stroke-width:1.8}
.fl-bead{fill:#fff;opacity:.9}
.iso-line.fl-route{stroke:#ff7a1a;stroke-width:1.4;stroke-dasharray:2 3}
.fl-num-text{fill:${t.onLit};font:700 9px ui-sans-serif,system-ui,sans-serif}
${hueCss(theme)}
@keyframes flow{to{stroke-dashoffset:-32}}
@media (prefers-reduced-motion:no-preference){
.iso-line[data-flow]{animation:flow 1.6s linear infinite}
}`.replace(/\n/g, "");
}
