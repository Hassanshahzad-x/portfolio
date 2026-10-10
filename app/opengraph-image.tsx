import { ImageResponse } from "next/og";
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
          background: "#0d0e10",
          color: "#ecece8",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#a9abb1" }}>
            <div style={{ width: 16, height: 16, background: "#ff5f2e" }} />
            {site.name} / {site.role}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 86, letterSpacing: "-0.045em", lineHeight: 1, maxWidth: 820 }}>
              AI products, shipped end to end.
            </div>
            <div style={{ fontSize: 28, color: "#a9abb1", marginTop: 28 }}>
              RAG and voice systems, payments, integrations.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 260, position: "relative" }}>
          <div style={{ position: "absolute", left: 6, top: 111, bottom: 111, width: 2, background: "#ff5f2e" }} />
          {stages.map((s) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 24, height: 66, fontSize: 26, color: "#ecece8" }}>
              <div style={{ width: 14, height: 14, background: "#ff5f2e" }} />
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
