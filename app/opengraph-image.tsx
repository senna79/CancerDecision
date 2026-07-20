import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cancer Next Step — Decision Navigation";
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
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #e7eee9 0%, #f3f6f4 45%, #dce8e2 100%)",
          color: "#17302a",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#5f746c",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 600,
          }}
        >
          Decision Navigation
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 980,
            }}
          >
            Cancer Next Step
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#314842",
              lineHeight: 1.3,
              maxWidth: 900,
              fontFamily: "system-ui, sans-serif",
              fontWeight: 500,
            }}
          >
            Understand your options. Prepare better questions. Know your next
            step.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#0f766e",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 600,
          }}
        >
          Educational decision paths — not medical advice
        </div>
      </div>
    ),
    { ...size }
  );
}
