import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { MySkills, MyTools } from "../../data/data";

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
      <div className="skills-box">
        <div className="skill-dev">
          <h3>{language === "fr" ? "Développement web" : "Web development"}</h3>
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
                    <h4>{item.name}</h4>
                    <p>{language === "fr" ? item.levelFr : item.levelEn}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skill-tools">
          <h3>
            {language === "fr"
              ? "Outils & collaborations"
              : "Tools & collaborations"}
          </h3>
          <div className="skills-grids">
            {MyTools.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div className="skill-description" key={index}>
                  <IconComponent
                    className={`skill-icon  ${
                      theme === "light" ? "iconLight" : "iconDark"
                    }`}
                  />
                  <div className="skill-level">
                    <h4>{item.name}</h4>
                    <p>{language === "fr" ? item.levelFr : item.levelEn}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
