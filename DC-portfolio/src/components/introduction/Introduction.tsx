import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";

function Introduction() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <div className={`introduction-container ${theme}`}>
      <h3>Hello, je suis</h3>
      <h1>David</h1>
      <h3>Développeur web </h3>
      <div className="cv-about-container">
        <button>Télécharger le cv</button>
        <button>A propos de moi</button>
      </div>
      <div className="container">
        <div className="left-box">
          <FaLinkedin />
          <FaGithub />
        </div>
        <div className="middle"></div>
        <div className="right-box">
          <BsMouse />
          <span>Scroll Down</span>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
