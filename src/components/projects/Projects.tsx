import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import ProjectCard from "../projectCard/ProjectCard";
import { project } from "../../data/data";
import type { projectCardType } from "../../data/data.types";
import ProjectModal from "../projectModal/ProjectModal";
import { motion } from "framer-motion";

function Projects() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [selectedProject, setSelectedProject] =
    useState<projectCardType | null>(null);

  return (
    <div className={`projects-container ${theme}`}>
      <motion.h3
        className={theme === "light" ? "" : "darkWrite"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {language == "fr" ? "PROJETS" : "PROJECTS"}
      </motion.h3>
      <motion.h1
        className={theme === "light" ? "" : "darkWrite"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {language == "fr" ? "Mon Portfolio" : "My Portfolio"}
      </motion.h1>
      <motion.div
        className="projects-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {project.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </motion.div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default Projects;
