import { C, contacts } from "../data/constants";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" style={{ background: C.paper, padding: "100px 5vw" }}>
      <div style={{ maxWidth: 680 }}>
        <SectionLabel>Contact</SectionLabel>

        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 600, lineHeight: 1.2,
            marginBottom: 16, color: C.ink,
          }}
        >
          Let's Connect
        </h2>

        <p style={{ fontSize: "clamp(17px, 2.2vw, 19px)", color: C.inkMid, maxWidth: 640, lineHeight: 1.8, marginBottom: 40 }}>
          Whether for consultancy, academic collaboration, speaking engagements, or research partnerships — Dr Wanyakala welcomes enquiries from institutions, governments, and organisations committed to better governance.
        </p>

        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}
        >
          {contacts.map((c, i) => (
            <div
              key={i}
              style={{
                border: `1px solid rgba(184,149,42,0.2)`,
                borderRadius: 4, padding: 28,
                display: "flex", gap: 16, alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 40, height: 40,
                  background: c.bg, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, flexShrink: 0,
                }}
              >
                {c.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 12, letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: C.inkLight, marginBottom: 5,
                  }}
                >
                  {c.type}
                </div>
                <div style={{ fontSize: 16, color: C.ink, fontWeight: 500 }}>{c.val}</div>
                {c.sub && (
                  <div style={{ fontSize: 14, color: C.inkMid, marginTop: 5 }}>{c.sub}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
