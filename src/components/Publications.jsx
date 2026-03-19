import { C } from "../data/constants";
import SectionLabel from "./SectionLabel";

const tags = [
  { label: "Public Administration", color: "#7a1a1a", bg: "rgba(176,40,40,0.09)" },
  { label: "Service Delivery",       color: "#1a3a6e", bg: "rgba(42,82,152,0.1)"  },
  { label: "Uganda",                  color: "#2d5a42", bg: "rgba(30,58,47,0.08)"  },
  { label: "Governance",              color: "#1a3a6e", bg: "rgba(42,82,152,0.1)"  },
];

export default function Publications() {
  return (
    <section id="publications" style={{ background: C.cream, padding: "100px 5vw" }}>
      <SectionLabel>Publications & Research</SectionLabel>

      <h2
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 600, lineHeight: 1.2,
          marginBottom: 16, color: C.ink,
        }}
      >
        Contributing to the Discourse
      </h2>

      <p style={{ fontSize: "clamp(17px, 2.2vw, 19px)", color: C.inkMid, maxWidth: 640, lineHeight: 1.8, marginBottom: 60 }}>
        From academic monographs to policy papers and conference contributions — shaping how Uganda thinks about public service.
      </p>

      {/* Featured monograph */}
      <div
        style={{
          background: C.paper,
          border: `1px solid rgba(184,149,42,0.2)`,
          borderRadius: 4, padding: 40, maxWidth: 720,
          position: "relative",
        }}
      >
        {/* Decorative quote mark */}
        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: 120,
            color: "rgba(184,149,42,0.1)",
            position: "absolute", top: -20, left: 24,
            lineHeight: 1, pointerEvents: "none",
            userSelect: "none",
          }}
        >
          "
        </div>

        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: 20, fontStyle: "italic",
            color: C.greenDeep, marginBottom: 10,
            position: "relative",
          }}
        >
          Customer Service in the Public Sector
        </div>

        <div style={{ fontSize: 15, color: C.inkLight, marginBottom: 16 }}>
          Wanyakala, Tom Alfred · VDM Verlag Dr. Müller, Berlin · 2011
        </div>

        <p style={{ fontSize: 16, color: C.inkMid, lineHeight: 1.85, textAlign: "justify" }}>
          A monograph exploring the dynamics of service delivery in public institutions, drawing on extensive research into Uganda's public sector. Published in Germany and circulated internationally, this work addresses the complex relationship between bureaucracy, accountability, and citizen satisfaction — challenges as relevant today as when first written.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
          {tags.map((t) => (
            <span
              key={t.label}
              style={{
                background: t.bg, color: t.color,
                fontSize: 13, padding: "5px 14px",
                borderRadius: 100, fontWeight: 500,
              }}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>

      <p style={{ marginTop: 32, color: C.inkMid, fontSize: 16, maxWidth: 640, textAlign: "justify" }}>
        In addition to this monograph, Dr Wanyakala has contributed to academic conference papers, government policy newsletters, newspaper commentary, and postgraduate research supervision across Uganda and the broader East African region.
      </p>
    </section>
  );
}
