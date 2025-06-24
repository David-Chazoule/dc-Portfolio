import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

function Projects() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <div className={`projects-container ${theme}`}>
      <h3>Projet</h3>
      <h1>Mon Portfolio</h1>
      <div className="projects-wrap"></div>
    </div>
  );
}

export default Projects;
