import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { aboutData } from "../../data/data.ts";

function About() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`about-container ${theme}`}>
      <h3>Présentation</h3>
      <h1>{language === "fr" ? aboutData.titleFr : aboutData.titleEn}</h1>
      <div className="img-about-container">
        <img></img>
        <div className="presentation">
          <div className="competence"></div>
          <div className="about">
            {language === "fr" ? aboutData.aboutTxtFr : aboutData.aboutTxtEn}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
