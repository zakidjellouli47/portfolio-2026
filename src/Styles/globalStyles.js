export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:        #0f1115;
    --surface:   #15171c;
    --card:      #1a1d24;
    --line:      rgba(255,255,255,0.09);
    --ink:       #f5f3ee;
    --ink-soft:  #a3a7b0;
    --accent:    #ffb454;
    --accent-dim: rgba(255,180,84,0.12);
    --font-display: 'Space Grotesk', sans-serif;
    --font-body:    'Inter', sans-serif;
    --font-mono:    'JetBrains Mono', monospace;
    --radius: 10px;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-color: var(--accent) var(--bg);
    scrollbar-width: thin;
  }

  body {
    background: var(--bg);
    color: var(--ink);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.65;
    overflow-x: hidden;
  }

  ::selection { background: var(--accent); color: #0f1115; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 99px; }

  .section {
    padding: 110px 24px;
    max-width: 1080px;
    margin: 0 auto;
  }

  /* Signature element: terminal-style eyebrow, e.g. "// 02 — projects" */
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--accent);
    margin-bottom: 20px;
  }
  .eyebrow::before { content: "//"; opacity: 0.6; }

  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4.5vw, 3.2rem);
    font-weight: 700;
    line-height: 1.15;
    color: var(--ink);
    margin-bottom: 16px;
    letter-spacing: -0.01em;
  }

  .section-sub {
    color: var(--ink-soft);
    font-size: 1.05rem;
    max-width: 520px;
    margin-bottom: 56px;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { opacity: 0; }
  .fade-up.visible { animation: fadeUp 0.6s cubic-bezier(0.4,0,0.2,1) forwards; }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 26px;
    border-radius: var(--radius);
    font-family: var(--font-mono);
    font-size: 0.88rem;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid transparent;
    transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
    text-decoration: none;
  }
  .btn:hover { transform: translateY(-2px); }
  .btn-primary {
    background: var(--accent);
    color: #0f1115;
  }
  .btn-primary:hover { background: #ffc575; }
  .btn-ghost {
    background: transparent;
    color: var(--ink);
    border-color: var(--line);
  }
  .btn-ghost:hover { border-color: var(--accent); color: var(--accent); }
`;