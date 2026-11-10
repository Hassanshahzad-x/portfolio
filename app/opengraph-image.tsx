import { ImageResponse } from "next/og";
export const dynamic = "force-static";
import { site } from "@/lib/content";

export const alt = `${site.name}, ${site.role}: AI products, shipped end to end.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stages = ["Listen", "Retrieve", "Re-rank", "Generate", "Speak"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#050505",
          color: "#f5f5f4",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#a3a3a3" }}>
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#ff7a1a" }} />
            {site.name} / {site.role}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 86, letterSpacing: "-0.045em", lineHeight: 1, maxWidth: 820 }}>
              AI products, shipped end to end.
            </div>
            <div style={{ fontSize: 28, color: "#a3a3a3", marginTop: 28 }}>
              RAG and voice systems, payments, integrations.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 260, position: "relative" }}>
          <div style={{ position: "absolute", left: 6, top: 111, bottom: 111, width: 2, background: "#ff7a1a" }} />
          {stages.map((s) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 24, height: 66, fontSize: 26, color: "#f5f5f4" }}>
              <div style={{ width: 14, height: 14, borderRadius: 7, background: "#ff7a1a" }} />
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
