import { C } from "../data/constants";
import SectionLabel from "./SectionLabel";

const profileRows = [
  ["Nationality", "Ugandan"],
  ["Based in",    "Kampala, Uganda"],
  ["Institution", "Uganda Management Institute"],
  ["Role",        "Lecturer, Public Policy"],
  ["Phone",       "0742 745 930 / 0705 451 920"],
  ["Email",       "tomwanyakala@gmail.com"],
  ["Languages",   "English, Luganda"],
];

const paragraphs = [
  "Tom Alfred Wanyakala hails from Bulambuli District, Uganda. His journey from a District Administrative Officer in rural Apac to a published doctoral scholar at the University of Birmingham speaks to a life shaped by a deep belief that good governance is the foundation of any thriving society.",
  "With a PhD in Public Policy from the University of Birmingham (2011) and a Master's in Public Administration and Management from Makerere University, Dr Wanyakala has accumulated expertise spanning district administration, telecommunications policy reform, corporate governance, and academic teaching and research.",
  "He spent more than two decades in Uganda's civil service, rising to become a Senior Administrative Officer and District Executive Secretary. During this period, he played a pivotal role in the restructuring and privatisation of Uganda's telecommunications sector — coordinating policy papers in liaison with multiple ministries and serving as an ex-officio board member on the boards of Uganda Posts and Telecommunications Corporation, Uganda Telecom Limited, and Uganda Post Limited.",
  "Since 2011, he has combined consultancy work with academic teaching at Uganda Christian University, Uganda Management Institute, and now as a full-time Lecturer in Public Policy at the School of Management Sciences. He supervises and examines Master's and PhD candidates, and continues to serve as a governance advisor to institutions including the Institute of Corporate Governance of Uganda.",
  "Beyond the formal, he is a committed community builder — involved in pastoral work, leadership training, counselling, and gospel music.",
];

export default function About() {
  return (
    <section id="about" style={{ background: C.cream, padding: "100px 5vw" }}>
      <SectionLabel>About</SectionLabel>

      <h2
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 600, lineHeight: 1.2,
          marginBottom: 48, color: C.ink,
        }}
      >
        Governing with Purpose,<br />Teaching with Conviction
      </h2>

      <div
        className="about-grid"
        style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 80, alignItems: "start" }}
      >
        {/* Body text */}
        <div style={{ fontSize: 17, color: C.inkMid, lineHeight: 1.9, textAlign: "justify" }}>
          {paragraphs.map((p, i) => (
            <div key={i}>
              {i === 1 && (
                <blockquote
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: 22, fontStyle: "italic",
                    color: C.greenMid,
                    borderLeft: `3px solid ${C.gold}`,
                    paddingLeft: 24,
                    margin: "36px 0",
                    lineHeight: 1.55,
                  }}
                >
                  "Advancing good governance through consultancy and oversight — from central government to the community level."
                </blockquote>
              )}
              <p style={{ marginBottom: 20 }}>{p}</p>
            </div>
          ))}
        </div>

        {/* Sticky profile card */}
        <div
          style={{
            background: C.greenDeep, color: "#fff",
            padding: 36, borderRadius: 4,
            position: "sticky", top: 90,
          }}
        >
          <h3
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: 18, fontWeight: 400,
              color: C.goldLight, marginBottom: 20,
            }}
          >
            Personal Profile
          </h3>

          {profileRows.map(([label, val]) => (
            <div
              key={label}
              style={{
                display: "flex", gap: 10,
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                fontSize: 15,
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.5)", width: 90, flexShrink: 0 }}>{label}</span>
              <span style={{ color: "rgba(255,255,255,0.9)" }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
