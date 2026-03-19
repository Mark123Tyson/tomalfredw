import { C, community } from "../data/constants";
import SectionLabel from "./SectionLabel";

export default function Community() {
  return (
    <section style={{ background: C.greenDeep, padding: "100px 5vw" }}>
      <SectionLabel>Community & Values</SectionLabel>

      <h2
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 600, lineHeight: 1.2,
          marginBottom: 16, color: "#fff",
        }}
      >
        The Whole Person
      </h2>

      <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 640, lineHeight: 1.75, marginBottom: 60 }}>
        Leadership extends far beyond the lecture hall or boardroom — it lives in community, faith, and service.
      </p>

      <div
        className="community-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}
      >
        {community.map((item, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: `1px solid rgba(184,149,42,0.15)`,
              borderRadius: 4, padding: 28,
              display: "flex", gap: 18, alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 8, height: 8, flexShrink: 0,
                background: item.dot, borderRadius: "50%", marginTop: 8,
              }}
            />
            <div>
              <h4
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: 19, color: C.goldLight, marginBottom: 8,
                }}
              >
                {item.title}
              </h4>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, textAlign: "justify" }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
