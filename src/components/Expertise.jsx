import { useState } from "react";
import { C, expertise } from "../data/constants";
import SectionLabel from "./SectionLabel";

export default function Expertise() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <section
        id="expertise"
        style={{ background: C.paper, padding: "100px 5vw 0" }}
      >
        <SectionLabel>Areas of Expertise</SectionLabel>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 600, lineHeight: 1.2,
            marginBottom: 16, color: C.ink,
          }}
        >
          Where Knowledge Meets Practice
        </h2>
        <p style={{ fontSize: "clamp(17px, 2.2vw, 19px)", color: C.inkMid, maxWidth: 640, lineHeight: 1.8, marginBottom: 60 }}>
          Four decades of hands-on experience distilled into six core domains — each grounded in both academic theory and real-world application.
        </p>
      </section>

      <div
        className="expertise-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}
      >
        {expertise.map((e, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? C.greenDeep : C.cream,
              padding: "40px 36px",
              borderLeft: `3px solid ${hovered === i ? C.gold : e.accent}`,
              transition: "background 0.25s, border-color 0.25s",
              cursor: "default",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: 28, marginBottom: 16, display: "block" }}>{e.icon}</span>
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 21, marginBottom: 12,
                color: hovered === i ? "#fff" : e.accent,
                transition: "color 0.25s",
              }}
            >
              {e.title}
            </h3>
            <p
              style={{
                fontSize: 15,
                color: hovered === i ? "rgba(255,255,255,0.8)" : C.inkMid,
                lineHeight: 1.8,
                transition: "color 0.25s",
                textAlign: "justify",
              }}
            >
              {e.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
