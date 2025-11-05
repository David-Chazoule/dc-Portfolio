import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { MySkills, MyTools } from "../../data/data";
import { motion } from "framer-motion";

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
      <motion.h3
        className={` titleSkills ${theme === "light" ? "" : "darkWrite"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {language === "fr" ? "STACK TECHNIQUE" : "TECH STACK"}
      </motion.h3>
      <motion.h1
        className={theme === "light" ? "" : "darkWrite"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {language === "fr" ? "Mes compétences" : "My skills"}
      </motion.h1>

      <div className="skills-box">
        <motion.div
          className={` skill-dev ${theme === "light" ? "" : "skill-dev-Dark"}`}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <h3 className={`${theme === "light" ? "title-light" : "title-dark"}`}>
            {language === "fr" ? "Développement web" : "Web development"}
          </h3>
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
                    <h4
                      className={`${theme === "light" ? "" : "titleTechoDark"}`}
                    >
                      {item.name}
                    </h4>
                    <p
                      className={`${theme === "light" ? "" : "levelTechoDark"}`}
                    >
                      {language === "fr" ? item.levelFr : item.levelEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          className={` skill-tools ${
            theme === "light" ? "" : "skill-tools-dark"
          }`}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <h3 className={`${theme === "light" ? "title-light" : "title-dark"}`}>
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
                    <h4
                      className={`${theme === "light" ? "" : "titleTechoDark"}`}
                    >
                      {item.name}
                    </h4>
                    <p
                      className={`${theme === "light" ? "" : "levelTechoDark"}`}
                    >
                      {language === "fr" ? item.levelFr : item.levelEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
