import { useScrollReveal } from "../hooks/useScrollReveal";
import { skillsData } from "../data/skillsData";

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" style={{ padding: "100px 0", background: "var(--surface)" }}>
      <div className="section fade-up" ref={ref}>
        <div className="eyebrow">03 — skills</div>
        <h2 className="section-title">Tools I reach for</h2>
        <p className="section-sub">The stack behind everything I build.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "20px" }}>
          {skillsData.map(({ category, skills }) => (
            <div key={category} style={{
              background: "var(--card)", border: "1px solid var(--line)",
              borderRadius: "var(--radius)", padding: "24px",
            }}>
              <h3 style={{ fontFamily: "var(--font-mono)", fontWeight: 500, color: "var(--accent)", marginBottom: "16px", fontSize: "0.85rem" }}>
                {category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skills.map(skill => (
                  <span key={skill} style={{
                    fontSize: "0.82rem", padding: "6px 12px", borderRadius: "6px",
                    background: "var(--bg)", color: "var(--ink)",
                    border: "1px solid var(--line)",
                  }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}