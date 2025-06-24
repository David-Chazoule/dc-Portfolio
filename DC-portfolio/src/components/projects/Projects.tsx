import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import ProjectCard from "../projectCard/ProjectCard";
import { project } from "../../data/data";
import type { projectCardType } from "../../data/data.types";

function Projects() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [selectedProject, setSelectedProject] =
    useState<projectCardType | null>(null);

  return (
    <div className={`projects-container ${theme}`}>
      <h3>Projet</h3>
      <h1>Mon Portfolio</h1>
      <div className="projects-wrap">
        {project.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
