import { isValidElement, type ReactNode } from "react";
import { figures } from "@/components/figures";
import { isTheme, svgCss } from "@/components/iso/svg-css";

// Each project figure is prerendered once per theme to /figures/<slug>-<theme>.svg. As files they load
// lazily and cache, and stay out of the page's HTML and RSC payload.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(figures).flatMap((slug) => ["light", "dark"].map((t) => ({ file: `${slug}-${t}.svg` })));
}

export async function GET(_req: Request, { params }: RouteContext<"/figures/[file]">) {
  const { file } = await params;
  const m = file.match(/^(.+)-(light|dark)\.svg$/);
  const f = m && figures[m[1]];
  if (!m || !f || !isTheme(m[2])) return new Response("Not found", { status: 404 });
  const svg = toSvg(<f.Art />).replace(/^<svg([^>]*)>/, `<svg$1><style>${svgCss(m[2])}</style>`);
  return new Response(svg, { headers: { "Content-Type": "image/svg+xml" } });
}

// Route handlers may not import react-dom/server, and the figures are plain SVG from synchronous
// components, so a tiny serializer is enough: tags, fragments, attributes, inline style, text.
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const attr = (k: string) => (k === "className" ? "class" : k === "viewBox" ? k : k.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`));

function toSvg(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return esc(String(node));
  if (Array.isArray(node)) return node.map(toSvg).join("");
  if (!isValidElement<Record<string, unknown>>(node)) return "";
  const { type, props } = node;
  if (typeof type === "function") return toSvg((type as (p: object) => ReactNode)(props));
  if (typeof type !== "string") return toSvg(props.children as ReactNode); // Fragment
  let out = `<${type}`;
  for (const [k, v] of Object.entries(props)) {
    if (k === "children" || v == null || v === false) continue;
    const val = k === "style" ? Object.entries(v as object).map(([p, x]) => `${p}:${x}`).join(";") : String(v);
    out += ` ${attr(k)}="${esc(val)}"`;
  }
  return `${out}>${toSvg(props.children as ReactNode)}</${type}>`;
}
