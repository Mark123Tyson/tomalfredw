import { useState, useEffect } from "react";
import { C, navLinks } from "../data/constants";
import { useViewport } from "../hooks/useViewport";

export default function Navbar({ activeSection }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const { width } = useViewport(); // triggers re-render on rotate / resize

  // Close menu if we rotated into landscape (wider than 900px)
  useEffect(() => {
    if (width > 900) setMenuOpen(false);
  }, [width]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 80) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: C.greenDeep,
        borderBottom: `2px solid ${C.gold}`,
        height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 5vw",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.35)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      {/* Tricolour governance stripe */}
      <div
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(to right, ${C.red} 33%, ${C.gold} 33%, ${C.gold} 66%, ${C.blueMid} 66%)`,
        }}
      />

      {/* Brand */}
      <a
        href="#top"
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(16px, 3vw, 20px)",
          color: C.goldLight,
          textDecoration: "none",
          letterSpacing: "0.02em",
          zIndex: 1,
          lineHeight: 1.2,
        }}
      >
        Dr Tom Alfred Wanyakala
      </a>

      {/* Desktop links */}
      <div className="nav-desktop" style={{ display: "flex", gap: 32, zIndex: 1 }}>
        {navLinks.map((link) => {
          const isActive = activeSection === link.label.toLowerCase();
          return (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: isActive ? C.goldLight : "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderBottom: isActive ? `1px solid ${C.gold}` : "1px solid transparent",
                paddingBottom: 2,
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      {/* Mobile hamburger — bigger, clearer tap target */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        style={{
          display: "none",
          background: "none",
          border: `1px solid rgba(184,149,42,0.35)`,
          borderRadius: 6,
          cursor: "pointer",
          color: C.goldLight,
          fontSize: 28,
          lineHeight: 1,
          zIndex: 1,
          width: 48,
          height: 48,
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          transition: "border-color 0.2s, background 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(184,149,42,0.12)"}
        onMouseLeave={e => e.currentTarget.style.background = "none"}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown — slides in, auto-closes on scroll */}
      {menuOpen && (
        <div
          style={{
            position: "absolute", top: 68, left: 0, right: 0,
            background: C.greenDeep,
            borderTop: `1px solid rgba(184,149,42,0.25)`,
            borderBottom: `2px solid ${C.gold}`,
            padding: "8px 6vw 12px",
            display: "flex", flexDirection: "column", gap: 0,
            boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
            animation: "dropIn 0.2s ease",
          }}
        >
          <style>{`
            @keyframes dropIn {
              from { opacity: 0; transform: translateY(-8px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.label.toLowerCase();
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: isActive ? C.goldLight : "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: isActive ? 500 : 400,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "10px 0",
                  borderBottom: i < navLinks.length - 1
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
                  borderLeft: isActive ? `3px solid ${C.gold}` : "3px solid transparent",
                  paddingLeft: 10,
                  transition: "color 0.15s",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}