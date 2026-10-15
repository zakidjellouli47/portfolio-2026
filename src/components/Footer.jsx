export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", padding: "36px 24px", textAlign: "center" }}>
      <div style={{ color: "var(--ink-soft)", fontSize: "0.85rem", fontFamily: "var(--font-mono)" }}>
        built by zaki  · {new Date().getFullYear()}
      </div>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "14px" }}>
      {[
  { name: "LinkedIn", url: "https://www.linkedin.com/in/abdessamed-zakaria-djellouli-05a27b222/" },
  { name: "WhatsApp", url: "https://wa.me/+213794608293" },
  { name: "GitHub", url: "https://github.com/zakidjellouli47" },

].map(({ name, url }) => (
  <a
    key={name}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "var(--ink-soft)",
      fontSize: "0.82rem",
      textDecoration: "none",
      transition: "color 0.2s",
    }}
    onMouseEnter={(e) => (e.target.style.color = "var(--ink)")}
    onMouseLeave={(e) => (e.target.style.color = "var(--ink-soft)")}
  >
    {name}
  </a>
))}
      </div>
    </footer>
  );
}