export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", padding: "36px 24px", textAlign: "center" }}>
      <div style={{ color: "var(--ink-soft)", fontSize: "0.85rem", fontFamily: "var(--font-mono)" }}>
        built by alex · {new Date().getFullYear()}
      </div>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "14px" }}>
        {["GitHub", "LinkedIn", "Twitter"].map(link => (
          <a key={link} href="#" style={{ color: "var(--ink-soft)", fontSize: "0.82rem", textDecoration: "none" }}
            onMouseEnter={e => e.target.style.color = "var(--accent)"}
            onMouseLeave={e => e.target.style.color = "var(--ink-soft)"}
          >{link}</a>
        ))}
      </div>
    </footer>
  );
}