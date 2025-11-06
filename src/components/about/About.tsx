import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import { aboutData } from "../../data/data.ts";
import photo from "./img/profilePicture.jpg";
import photoTwo from "./img/pictureTwo.jpg";
import { FaPalette } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";
import { MdAutorenew } from "react-icons/md";

function About() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`about-container ${theme}`}>
      <motion.h3
        className={`smallTitle ${theme === "light" ? "" : "darkWrite"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {language === "fr" ? "PRESENTATION" : "PRESENTATION"}
      </motion.h3>
      <motion.h1
        className={theme === "light" ? "" : "darkWrite"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {language === "fr" ? aboutData.titleFr : aboutData.titleEn}
      </motion.h1>
      <div className="img-about-container">
        <motion.img
          className="picturePC"
          src={photo}
          alt="photo-DC"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        />
        <motion.img
          className="pictureMobile"
          src={photoTwo}
          alt="photo-DC"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        />
        <motion.div
          className="presentation"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <div className="competence-box">
            <div
              className={`competence ${
                theme === "light" ? "" : "competenceDark"
              }`}
            >
              <FaPalette
                className={`icon-competence ${
                  theme === "light" ? "iconLight" : "iconDark"
                }`}
              />
              <h3
                className={`icon-label ${
                  theme === "light" ? "iconLight" : "iconDark"
                }`}
              >
                {language === "fr"
                  ? aboutData.skillOneFr
                  : aboutData.skillOneEn}
              </h3>
            </div>
            <div
              className={`competence ${
                theme === "light" ? "" : "competenceDark"
              }`}
            >
              <GiCompass
                className={`icon-competence ${
                  theme === "light" ? "iconLight" : "iconDark"
                }`}
              />
              <h3
                className={`icon-label ${
                  theme === "light" ? "iconLight" : "iconDark"
                }`}
              >
                {language === "fr"
                  ? aboutData.skillTwoFr
                  : aboutData.skillTwoEn}
              </h3>
            </div>
            <div
              className={`competence ${
                theme === "light" ? "" : "competenceDark"
              }`}
            >
              <MdAutorenew
                className={`icon-competence ${
                  theme === "light" ? "iconLight" : "iconDark"
                }`}
              />
              <h3
                className={`icon-label ${
                  theme === "light" ? "iconLight" : "iconDark"
                }`}
              >
                {language === "fr"
                  ? aboutData.skillThreeFr
                  : aboutData.skillThreeEn}
              </h3>
            </div>
          </div>
          <div className="about">
            <p className={theme === "light" ? "" : "darkWrite"}>
              {language === "fr" ? aboutData.aboutTxtFr : aboutData.aboutTxtEn}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
