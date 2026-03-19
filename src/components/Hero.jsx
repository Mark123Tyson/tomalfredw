import { C, stats } from "../data/constants";
import { useViewport } from "../hooks/useViewport";

function HeroPhoto() {
  useViewport(); // forces re-render on rotate so clamp/vw values refresh
  return (
    <div
      id="top"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 110,
        paddingBottom: 56,
        background: `linear-gradient(160deg, ${C.greenDeep} 0%, #142b22 55%, #0d1f18 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative concentric rings — scaled up to match larger photo */}
      {[620, 440, 280].map((size, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 50 + i * 30,
            left: "50%",
            transform: "translateX(-50%)",
            width: size,
            height: size,
            borderRadius: "50%",
            border: `1px solid rgba(184,149,42,${[0.1, 0.07, 0.04][i]})`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Profile photo circle — enlarged for all devices */}
      <div
        style={{
          position: "relative", zIndex: 1,
          width: "clamp(180px, 35vw, 280px)",
          height: "clamp(180px, 35vw, 280px)",
          borderRadius: "50%",
          border: `5px solid ${C.gold}`,
          overflow: "hidden",
          marginBottom: 32,
          boxShadow: `0 0 0 10px rgba(184,149,42,0.12), 0 20px 60px rgba(0,0,0,0.4)`,
          flexShrink: 0,
        }}
      >
        <img
          src="/profile.jpeg"
          alt="Dr Tom Alfred Wanyakala"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
          onError={(e) => {
            // Graceful fallback if photo file is missing
            e.target.style.display = "none";
            e.target.parentNode.style.background = C.greenMid;
            e.target.parentNode.innerHTML =
              `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:clamp(40px,8vw,72px);color:${C.goldLight};font-weight:600;">TW</div>`;
          }}
        />
      </div>

      {/* Name */}
      <h1
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(42px, 7vw, 72px)",
          fontWeight: 600,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.12,
          marginBottom: 14,
          position: "relative", zIndex: 1,
          padding: "0 20px",
        }}
      >
        Dr Tom Alfred{" "}
        <em style={{ fontStyle: "italic", color: C.goldLight }}>Wanyakala</em>
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "clamp(16px, 2.2vw, 20px)",
          color: "rgba(255,255,255,0.65)",
          textAlign: "center",
          letterSpacing: "0.04em",
          marginBottom: 40,
          fontWeight: 300,
          position: "relative", zIndex: 1,
          padding: "0 24px",
          lineHeight: 1.75,
          maxWidth: 600,
        }}
      >
        PhD (Birmingham, UK) · Lecturer in Public Policy · Governance Consultant
      </p>

      {/* Divider */}
      <div style={{ width: 48, height: 1, background: C.gold, marginBottom: 40, position: "relative", zIndex: 1 }} />

      {/* CTAs */}
      <div
        className="hero-cta"
        style={{
          display: "flex", gap: 16,
          position: "relative", zIndex: 1,
          flexWrap: "wrap", justifyContent: "center",
          padding: "0 24px",
        }}
      >
        <a
          href="#contact"
          style={{
            background: C.gold, color: C.ink,
            padding: "16px 40px", borderRadius: 2,
            fontWeight: 500, fontSize: "clamp(15px, 2vw, 17px)",
            textDecoration: "none", letterSpacing: "0.04em",
            transition: "background 0.2s, transform 0.15s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = C.goldLight; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = C.gold;      e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Get in Touch
        </a>
        <a
          href="#career"
          style={{
            border: "1px solid rgba(255,255,255,0.35)",
            color: "rgba(255,255,255,0.85)",
            padding: "16px 40px", borderRadius: 2,
            fontSize: "clamp(15px, 2vw, 17px)",
            textDecoration: "none", letterSpacing: "0.04em",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = C.goldLight; e.currentTarget.style.color = C.goldLight; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
        >
          View Career
        </a>
      </div>
    </div>
  );
}

function HeroStats() {
  useViewport(); // forces re-render on rotate
  return (
    <div
      className="stats-grid"
      style={{
        background: `linear-gradient(160deg, ${C.greenDeep} 0%, #142b22 55%, #0d1f18 100%)`,
        padding: "0 5vw 80px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
      }}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderLeft: `3px solid ${s.accent}`,
            borderRadius: 4,
            padding: "24px 28px",
            display: "flex", gap: 20, alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: 46, height: 46, borderRadius: "50%",
              background: `${s.accent}22`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, flexShrink: 0,
            }}
          >
            {s.icon}
          </div>
          <div>
            <div
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 600,
                color: C.goldLight, lineHeight: 1, marginBottom: 6,
              }}
            >
              {s.num}
            </div>
            <div style={{ fontSize: "clamp(13px, 1.5vw, 15px)", color: "rgba(255,255,255,0.6)", fontWeight: 300, lineHeight: 1.5 }}>
              {s.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <HeroPhoto />
      <HeroStats />
    </>
  );
}