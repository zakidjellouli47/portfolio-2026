import { useScrollReveal } from "../hooks/useScrollReveal";
import StatCard from "./StatCard";

const stats = [
  { value: "3+", label: "Years experience" },
  { value: "40+", label: "Projects built" },
  { value: "15+", label: "Happy clients" },
  { value: "∞",  label: "Cups of coffee" },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" style={{ padding: "100px 0", background: "var(--surface)" }}>
      <div className="section fade-up" ref={ref}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          <div style={{
            aspectRatio: "1", borderRadius: "var(--radius)",
            background: "var(--card)", border: "1px solid var(--line)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "6rem",
          }}>
            👨‍💻
          </div>

          <div>
            <div className="eyebrow">01 — about</div>
            <h2 className="section-title">Turning ideas into<br />working software</h2>
            <p style={{ color: "var(--ink-soft)", lineHeight: 1.8, marginBottom: "16px" }}>
              I'm a frontend developer who cares about the details — clean code, fast load times, and interfaces that feel obvious to use. I work mainly in React and TypeScript.
            </p>
            <p style={{ color: "var(--ink-soft)", lineHeight: 1.8, marginBottom: "40px" }}>
              Outside of code: open source, design systems, and an ongoing pour-over coffee habit.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {stats.map(stat => <StatCard key={stat.label} {...stat} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}