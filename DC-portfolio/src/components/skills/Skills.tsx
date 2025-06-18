import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { MySkills } from "../../data/data";

declare module "react-icons" {
  interface IconBaseProps {
    className?: string;
  }
}

function Skills() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <div className={`skills-container ${theme}`}>
      <h1>{language === "fr" ? "Mes compétences" : "My skills"}</h1>
      <div className="skill-dev">
        <h2>Développement web</h2>
        <div className="skills-grids">
          {MySkills.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div className="skill-description" key={index}>
                <IconComponent
                  className={`skill-icon  ${
                    theme === "light" ? "iconLight" : "iconDark"
                  }`}
                />
                <div className="skill-level">
                  <h3>{item.name}</h3>
                  <p>{language === "fr" ? item.levelFr : item.levelEn}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
