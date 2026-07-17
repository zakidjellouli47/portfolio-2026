export default function ProjectCard({ project, isHovered, onEnter, onLeave }) {
  return (
    <div
      onMouseEnter={onEnter} onMouseLeave={onLeave}
      style={{
        background: "var(--card)",
        border: `1px solid ${isHovered ? "var(--accent)" : "var(--line)"}`,
        borderRadius: "var(--radius)", padding: "26px",
        transition: "transform 0.25s ease, border-color 0.25s ease",
        transform: isHovered ? "translateY(-4px)" : "none",
        cursor: "pointer",
      }}
    >
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", marginBottom: "14px" }}>
        {project.emoji} {project.tags[0]}
      </div>
      <h3 style={{
        fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.15rem",
        marginBottom: "10px", color: "var(--ink)",
      }}>
        {project.title}
      </h3>
      <p style={{ color: "var(--ink-soft)", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px" }}>
        {project.description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "22px" }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem", padding: "4px 10px", borderRadius: "6px",
            background: "var(--accent-dim)", color: "var(--accent)",
          }}>{tag}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: "16px" }}>
        <a href="#" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>Live ↗</a>
        <a href="#" style={{ color: "var(--ink-soft)", fontSize: "0.85rem", textDecoration: "none" }}>GitHub →</a>
      </div>
    </div>
  );
}