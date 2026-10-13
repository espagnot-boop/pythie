import { ImageResponse } from "next/og";
import { site } from "@/content/en";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0b0b0a",
          color: "#ecebe4",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            border: "2px solid #ecebe4",
            marginBottom: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: 16, height: 16, background: "#c8ff00" }} />
        </div>
        <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: -2 }}>{site.name}</div>
        <div style={{ fontSize: 32, marginTop: 24, color: "#8d8c84" }}>{site.tagline}</div>
      </div>
    ),
    { ...size },
  );
}
