import { useState, useEffect } from "react";

export default function Hero() {
  const roles = ["Full stack developer", "ERP Developer", "Creative coder"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => { setRoleIndex(i => (i + 1) % roles.length); setFade(true); }, 350);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", position: "relative", padding: "0 24px",
    }}>
      <div style={{ textAlign: "center", maxWidth: "760px" }}>
       
        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(2.8rem, 9vw, 5.8rem)", lineHeight: 1.05,
          color: "var(--ink)", marginBottom: "20px", letterSpacing: "-0.02em",
        }}>
          Hi, I'm <span style={{ color: "var(--accent)" }}>Djellouli Abdessamed Zakaria</span>
        </h1>

        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(1rem, 2.2vw, 1.3rem)", color: "var(--ink-soft)",
          marginBottom: "36px", transition: "opacity 0.35s",
          opacity: fade ? 1 : 0, minHeight: "1.8rem",
        }}>
          {roles[roleIndex]}
        </p>

        <p style={{ color: "var(--ink-soft)", fontSize: "1.05rem", maxWidth: "460px", margin: "0 auto 44px", lineHeight: 1.7 }}>
          I build fast, accessible web apps where design and code meet — no shortcuts, no clutter.
        </p>

        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#projects" className="btn btn-primary">See my work</a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>
      </div>
    </section>
  );
}