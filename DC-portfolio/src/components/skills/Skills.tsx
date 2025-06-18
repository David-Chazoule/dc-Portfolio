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
      <h3>Mes softskills</h3>
      <h1>Mes compétences</h1>
      <div className="skill-dev">
        {MySkills.map((item) => {
          const IconComponent = item.icon;
          return (
            <div>
              <IconComponent />
              <h3>{item.name}</h3>
              <p>{item.levelFr}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
