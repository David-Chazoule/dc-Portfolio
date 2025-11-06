import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import Lottie from "lottie-react";
import animationLight from "../../styles/animation/Developmentandcoding.json";
import animationDark from "../../styles/animation/animationDark.json";
import { motion } from "framer-motion";

function Introduction() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CVDavidChazoule.pdf";
    link.download = "CV-DavidChazoule.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`introduction-container ${theme}`}>
      <motion.div
        className="titleIntro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <h3 className={theme === "light" ? "" : "darkWrite"}>
          {language === "fr" ? "Hello, je suis" : "Hello, i'am"}
        </h3>
        <h1 className={theme === "light" ? "" : "darkWrite"}>David Chazoule</h1>
        <h3 className={theme === "light" ? "" : "darkWrite"}>
          {language === "fr" ? "Développeur web" : "web developer"}
        </h3>
      </motion.div>
      <motion.div
        className="cv-about-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <button
          className={`cv-style ${theme === "light" ? "cvLight" : "cvDark"}`}
          onClick={handleDownloadCV}
        >
          {language === "fr" ? "Télécharger mon CV" : "download my CV"}
        </button>
        <button
          className={`btn-style ${
            theme === "light" ? "btn-styleLight" : "btn-styleDark"
          }`}
          onClick={() => scrollTo("about")}
        >
          {language === "fr" ? "A propos de moi" : "About me"}
        </button>
      </motion.div>
      <div className="container-img">
        <motion.div
          className="left-box"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <a href="https://www.linkedin.com/in/david-chazoule/">
            <FaLinkedin
              className={`icon-social ${theme === "light" ? "" : "icon-dark"}`}
            />
          </a>
          <a href="https://github.com/David-Chazoule">
            <FaGithub
              className={`icon-social ${theme === "light" ? "" : "icon-dark"}`}
            />
          </a>

          <span className={`line ${theme === "light" ? "" : "line-dark"}`} />
        </motion.div>
        <motion.div
          className="middle-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <div className="animation-box">
            <Lottie
              animationData={theme === "light" ? animationLight : animationDark}
              loop
              autoplay
            />
          </div>
        </motion.div>
        <motion.div
          className="right-box"
          onClick={() => scrollTo("about")}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <BsMouse
            className={`icon-mousse ${theme === "light" ? "" : "mousse-dark"}`}
          />
          <span className={theme === "light" ? "" : "writingDark"}>
            Scroll Down
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default Introduction;
