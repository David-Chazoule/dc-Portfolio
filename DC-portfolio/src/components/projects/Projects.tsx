import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import ProjectCard from "../projectCard/ProjectCard";
import { project } from "../../data/data";
import type { projectCardType } from "../../data/data.types";
import ProjectModal from "../projectModal/ProjectModal";

function Projects() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [selectedProject, setSelectedProject] =
    useState<projectCardType | null>(null);
  console.log("project list", project);
  return (
    <div className={`projects-container ${theme}`}>
      <h3 className={theme === "light" ? "" : "darkWrite"}>
        {language == "fr" ? "Projets" : "Projects"}
      </h3>
      <h1 className={theme === "light" ? "" : "darkWrite"}>
        {language == "fr" ? "Mon Portfolio" : "My Portfolio"}
      </h1>
      <div className="projects-wrap">
        {project.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default Projects;
