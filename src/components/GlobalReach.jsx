import { useState } from "react";
import { C, countries } from "../data/constants";
import SectionLabel from "./SectionLabel";

export default function GlobalReach() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <section style={{ background: C.paper, padding: "100px 5vw 0" }}>
        <SectionLabel>International Exposure</SectionLabel>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 600, lineHeight: 1.2,
            marginBottom: 16, color: C.ink,
          }}
        >
          A Globally Informed Perspective
        </h2>
        <p style={{ fontSize: "clamp(17px, 2.2vw, 19px)", color: C.inkMid, maxWidth: 640, lineHeight: 1.8, marginBottom: 60 }}>
          International conferences and training spanning five continents — bringing global best practice back to Uganda's governance landscape.
        </p>
      </section>

      <div
        className="countries-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}
      >
        {countries.map((c, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? C.greenDeep : C.cream,
              padding: "20px 24px",
              display: "flex", alignItems: "center", gap: 12,
              fontSize: 14,
              color: hovered === i ? "rgba(255,255,255,0.85)" : C.inkMid,
              transition: "background 0.2s, color 0.2s",
              cursor: "default",
            }}
          >
            <span style={{ fontSize: 20 }}>{c.flag}</span>
            {c.name}
          </div>
        ))}
      </div>
    </>
  );
}
