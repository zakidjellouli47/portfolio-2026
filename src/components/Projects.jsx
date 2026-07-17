import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useScrollReveal();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      <div className="section fade-up" ref={ref}>
        <div className="eyebrow">02 — projects</div>
        <h2 className="section-title">Things I've built</h2>
        <p className="section-sub">A selection of work. Each one taught me something new.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {projectsData.map((project, i) => (
            <ProjectCard
              key={project.title} project={project}
              isHovered={hovered === i}
              onEnter={() => setHovered(i)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}