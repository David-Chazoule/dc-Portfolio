import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { aboutData } from "../../data/data.ts";
import photo from "./img/profilePicture.jpg";
import { FaPalette } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";
import { MdAutorenew } from "react-icons/md";

function About() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`about-container ${theme}`}>
      <h3>Présentation</h3>
      <h1>{language === "fr" ? aboutData.titleFr : aboutData.titleEn}</h1>
      <div className="img-about-container">
        <img src={photo} alt="photo-moi" />
        <div className="presentation">
          <div className="competence-box">
            <div className="competence">
              <FaPalette
                className={`icon-competence ${
                  theme === "light" ? "iconLight" : "iconDark"
                }`}
              />
             <h3>{language === "fr" ? aboutData.skillOneFr : aboutData.skillOneEn}</h3>
            </div>
            <div className="competence">
              <GiCompass
                className={`icon-competence ${
                  theme === "light" ? "iconLight" : "iconDark"
                }`}
              />
              <h3>{language === "fr" ? aboutData.skillTwoFr : aboutData.skillTwoEn}</h3>
            </div>
            <div className="competence">
              <MdAutorenew
                className={`icon-competence ${
                  theme === "light" ? "iconLight" : "iconDark"
                }`}
              />
              <h3>{language === "fr"
                ? aboutData.skillThreeFr
                : aboutData.skillThreeEn}</h3> 
            </div>
          </div>
          <div className="about">
            <p className={theme}>
              {language === "fr" ? aboutData.aboutTxtFr : aboutData.aboutTxtEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
