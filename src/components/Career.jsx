import { C, timeline } from "../data/constants";
import SectionLabel from "./SectionLabel";

function dotColor(dot) {
  if (dot === C.gold)    return C.gold;
  if (dot === C.blueMid) return "#90aee0";
  if (dot === C.red)     return "#e88080";
  return C.gold;
}

export default function Career() {
  return (
    <section id="career" style={{ background: C.greenDeep, padding: "100px 5vw" }}>
      <SectionLabel>Career Timeline</SectionLabel>

      <h2
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 600, lineHeight: 1.2,
          marginBottom: 16, color: "#fff",
        }}
      >
        A Life in Service
      </h2>

      <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 640, lineHeight: 1.75, marginBottom: 60 }}>
        Nearly four decades spanning district administration, national telecoms reform, corporate governance, and academia.
      </p>

      <div style={{ position: "relative", paddingLeft: 32, maxWidth: 800 }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 1,
            background: `linear-gradient(to bottom, ${C.gold}, rgba(184,149,42,0.1))`,
          }}
        />

        {timeline.map((item, i) => (
          <div
            key={i}
            style={{ position: "relative", marginBottom: 52, paddingLeft: 28 }}
          >
            {/* Coloured dot */}
            <div
              style={{
                position: "absolute", left: -36, top: 6,
                width: 9, height: 9, borderRadius: "50%",
                background: item.dot,
                border: `2px solid ${C.greenDeep}`,
              }}
            />

            <div
              style={{
                fontSize: 12, fontWeight: 500, letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: dotColor(item.dot),
                marginBottom: 6,
              }}
            >
              {item.period}
            </div>

            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 22, fontWeight: 600,
                color: "#fff", marginBottom: 8,
              }}
            >
              {item.role}
            </h3>

            <div style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>
              {item.org}
            </div>

            <div style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, textAlign: "justify" }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
