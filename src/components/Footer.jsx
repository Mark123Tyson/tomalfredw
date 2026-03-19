import { C } from "../data/constants";

const styles = {
  footer: {
    background: "#0a150f",
    color: "rgba(255,255,255,0.4)",
    textAlign: "center",
    padding: "32px 5vw",
    fontSize: 14,
    borderTop: `1px solid rgba(184,149,42,0.15)`,
  },
  copyright: {
    marginBottom: 12,
  },
  devLink: {
    color: "rgba(255,255,255,0.35)",
    textDecoration: "none",
    fontSize: 13,
    letterSpacing: "0.04em",
    transition: "color 0.2s",
    display: "inline-block",
    marginTop: 4,
  },
  devName: {
    color: C.gold,
    fontWeight: 500,
    letterSpacing: "0.08em",
  },
  divider: {
    width: 40,
    height: 1,
    background: "rgba(184,149,42,0.2)",
    margin: "16px auto",
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.copyright}>
        © 2025{" "}
        <span style={{ color: C.gold }}>Dr Tom Alfred Wanyakala</span>
        {" "}· Public Policy, Governance & Leadership Consulting · Kampala, Uganda
      </p>

      <div style={styles.divider} />

      <a
        href="https://marktyson.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.devLink}
        onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}
        onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
      >
        Built by{" "}
        <span style={styles.devName}>MARK TYSON</span>
      </a>
    </footer>
  );
}