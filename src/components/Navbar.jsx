import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Projects", "Skills", "Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 32px", height: "68px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      transition: "background 0.3s, border-color 0.3s",
      background: scrolled ? "rgba(15,17,21,0.9)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
    }}>
      <span style={{
        fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "1rem",
        color: "var(--ink)",
      }}>
        <span style={{ color: "var(--accent)" }}>~/</span>alex
      </span>

      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            color: "var(--ink-soft)", textDecoration: "none",
            fontSize: "0.9rem", fontWeight: 500, transition: "color 0.2s",
          }}
          onMouseEnter={e => e.target.style.color = "var(--ink)"}
          onMouseLeave={e => e.target.style.color = "var(--ink-soft)"}
          >
            {link}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" style={{ padding: "9px 20px", fontSize: "0.82rem" }}>
          Hire me
        </a>
      </div>
    </nav>
  );
}