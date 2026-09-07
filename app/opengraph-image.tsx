import { ImageResponse } from "next/og";

// Tarjeta que se muestra al compartir el link (WhatsApp, LinkedIn, X, etc.)
export const runtime = "edge";
export const alt = "Emily Sepúlveda · Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0612 0%, #2a1145 55%, #4a1259 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Estrellitas decorativas */}
        {[
          { t: 60, l: 1040, s: 48, c: "#93c5fd", o: 0.9 },
          { t: 150, l: 1130, s: 26, c: "#22d3ee", o: 0.8 },
          { t: 300, l: 1075, s: 64, c: "#e0aaff", o: 0.7 },
          { t: 470, l: 1135, s: 34, c: "#a855f7", o: 0.85 },
          { t: 95, l: 770, s: 22, c: "#e0aaff", o: 0.7 },
          { t: 545, l: 940, s: 28, c: "#22d3ee", o: 0.65 },
          { t: 250, l: 1180, s: 18, c: "#93c5fd", o: 0.6 },
          { t: 410, l: 70, s: 24, c: "#e0aaff", o: 0.5 },
        ].map((st, i) => (
          <svg
            key={i}
            width={st.s}
            height={st.s}
            viewBox="0 0 24 24"
            style={{ position: "absolute", top: st.t, left: st.l, opacity: st.o }}
          >
            <path
              d="M12 0 C12.6 8 16 11.4 24 12 C16 12.6 12.6 16 12 24 C11.4 16 8 12.6 0 12 C8 11.4 11.4 8 12 0 Z"
              fill={st.c}
            />
          </svg>
        ))}

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* Diamante retro-pixel */}
          <svg width="90" height="90" viewBox="0 0 9 9">
            {[
              [4, 0, 1], [3, 1, 3], [2, 2, 5], [1, 3, 7], [0, 4, 9], [1, 5, 7], [2, 6, 5], [3, 7, 3], [4, 8, 1],
            ].map(([start, y, count], i) => (
              <rect
                key={i}
                x={start}
                y={y}
                width={count}
                height={1}
                fill={i < 4 ? "#a855f7" : i > 4 ? "#3b82f6" : "#2563eb"}
              />
            ))}
          </svg>
          <div style={{ fontSize: 30, color: "#22d3ee" }}>portafolioemily.vercel.app</div>
        </div>

        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            marginTop: 30,
            lineHeight: 1.05,
            background: "linear-gradient(90deg, #a855f7, #3b82f6, #22d3ee)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Emily Sepúlveda
        </div>
        <div style={{ fontSize: 44, marginTop: 16, fontWeight: 700, color: "#f5e9ff" }}>
          Full Stack Developer
        </div>
        <div style={{ fontSize: 28, marginTop: 10, color: "#e0aaff" }}>
          QA Automation · UX/UI
        </div>
      </div>
    ),
    { ...size }
  );
}
