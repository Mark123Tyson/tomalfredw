import { C, education } from "../data/constants";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section id="education" style={{ background: C.paper, padding: "100px 5vw" }}>
      <SectionLabel>Education</SectionLabel>

      <h2
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 600, lineHeight: 1.2,
          marginBottom: 16, color: C.ink,
        }}
      >
        Academic Foundation
      </h2>

      <p style={{ fontSize: "clamp(17px, 2.2vw, 19px)", color: C.inkMid, maxWidth: 640, lineHeight: 1.8, marginBottom: 60 }}>
        Formal qualifications spanning law, public administration, and public policy — built across three decades.
      </p>

      <div
        className="edu-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, maxWidth: 900 }}
      >
        {education.map((e, i) => (
          <div
            key={i}
            style={{
              border: `1px solid rgba(184,149,42,0.25)`,
              borderRadius: 4,
              padding: 32,
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            {/* Coloured left stripe */}
            <div
              style={{
                position: "absolute", top: 0, left: 0,
                width: 3, height: "100%",
                background: e.accent,
              }}
            />

            <div
              style={{
                fontSize: 13, letterSpacing: "0.12em",
                color: e.accent, textTransform: "uppercase",
                fontWeight: 500, marginBottom: 10,
              }}
            >
              {e.year}
            </div>

            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 20, fontWeight: 600,
                marginBottom: 8, color: C.ink, lineHeight: 1.4,
              }}
            >
              {e.degree}
            </h3>

            <div style={{ fontSize: 15, color: C.inkLight }}>{e.inst}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
