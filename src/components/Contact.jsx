import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/abdessamed-zakaria-djellouli-05a27b222/" },
  { name: "WhatsApp", url: "https://wa.me/213794608293" },
  { name: "GitHub", url: "https://github.com/zakidjellouli47" },
];

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%", padding: "13px 16px",
    background: "var(--card)", border: "1px solid var(--line)",
    borderRadius: "var(--radius)", color: "var(--ink)",
    fontFamily: "var(--font-body)", fontSize: "0.95rem",
    outline: "none", transition: "border-color 0.2s", resize: "vertical",
  };

  return (
    <section id="contact" style={{ padding: "100px 0" }}>
      <div className="section fade-up" ref={ref}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>contact</div>
          <h2 className="section-title">Let's build something</h2>
          <p style={{ color: "var(--ink-soft)", marginBottom: "44px", lineHeight: 1.7 }}>
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

       

        {/* Social links */}
        <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap", marginTop: "48px" }}>
          {socials.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--ink-soft)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.target.style.color = "var(--ink)")}
              onMouseLeave={e => (e.target.style.color = "var(--ink-soft)")}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}