import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

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
          <div className="eyebrow" style={{ justifyContent: "center" }}>04 — contact</div>
          <h2 className="section-title">Let's build something</h2>
          <p style={{ color: "var(--ink-soft)", marginBottom: "44px", lineHeight: 1.7 }}>
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div style={{ maxWidth: "540px", margin: "0 auto" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "44px", background: "var(--card)", borderRadius: "var(--radius)", border: "1px solid var(--accent)" }}>
              <h3 style={{ fontFamily: "var(--font-display)", color: "var(--ink)", marginBottom: "8px" }}>Message sent</h3>
              <p style={{ color: "var(--ink-soft)" }}>I'll get back to you within 24 hours.</p>
              <button onClick={() => setSent(false)} className="btn btn-ghost" style={{ marginTop: "20px" }}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required style={inputStyle}
                onFocus={e => e.target.style.borderColor = "var(--accent)"} onBlur={e => e.target.style.borderColor = "var(--line)"} />
              <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required style={inputStyle}
                onFocus={e => e.target.style.borderColor = "var(--accent)"} onBlur={e => e.target.style.borderColor = "var(--line)"} />
              <textarea name="message" placeholder="Tell me about your project..." value={form.message} onChange={handleChange} required rows={5} style={inputStyle}
                onFocus={e => e.target.style.borderColor = "var(--accent)"} onBlur={e => e.target.style.borderColor = "var(--line)"} />
              <button type="submit" className="btn btn-primary" style={{ justifyContent: "center" }}>
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}