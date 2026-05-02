import { ImageResponse } from "next/og";

export const alt = "Ronald Grant personal gateway";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          color: "#f8fafc",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 48%, #f8fafc 48%, #e0f2fe 100%)",
          fontFamily: "Inter, Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 520,
            left: -110,
            top: -140,
            background: "rgba(56, 189, 248, 0.38)",
            filter: "blur(18px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: 500,
            right: -120,
            bottom: -180,
            background: "rgba(251, 191, 36, 0.3)",
            filter: "blur(18px)",
          }}
        />
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 76px",
          }}
        >
          <div style={{ fontSize: 26, letterSpacing: 8, opacity: 0.72 }}>
            ENTER
          </div>
          <div style={{ marginTop: 28, fontSize: 88, fontWeight: 700 }}>
            Portfolio
          </div>
          <div style={{ marginTop: 18, fontSize: 32, opacity: 0.78 }}>
            View my work and projects
          </div>
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 76px",
            color: "#172033",
          }}
        >
          <div style={{ fontSize: 26, letterSpacing: 8, opacity: 0.62 }}>
            ENTER
          </div>
          <div style={{ marginTop: 28, fontSize: 88, fontWeight: 700 }}>
            Me
          </div>
          <div style={{ marginTop: 18, fontSize: 32, opacity: 0.76 }}>
            Learn more about me
          </div>
        </div>
      </div>
    ),
    size,
  );
}
