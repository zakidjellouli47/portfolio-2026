export default function StatCard({ value, label }) {
  return (
    <div style={{
      background: "var(--card)", border: "1px solid var(--line)",
      borderRadius: "var(--radius)", padding: "20px",
    }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.9rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1, marginBottom: "4px" }}>
        {value}
      </div>
      <div style={{ color: "var(--ink-soft)", fontSize: "0.85rem" }}>{label}</div>
    </div>
  );
}