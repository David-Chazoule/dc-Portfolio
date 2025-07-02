import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import photo from "../about/img/profilePicture.jpg";

function Introduction() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={`introduction-container ${theme}`}>
      <h3>{language==='fr'? 'Hello, je suis':"Hello, i'am"}</h3>
      <h1>David</h1>
      <h3>Développeur web </h3>
      <div className="cv-about-container">
        <button>Télécharger le cv</button>
        <button onClick={() => scrollTo("about")}>A propos de moi</button>
      </div>
      <div className="container-img">
        <div className="left-box">
          <FaLinkedin className="icon-social" />
          <FaGithub className="icon-social" />
        </div>
        <div className="middle-box">
          <img src={photo} alt="" />
        </div>
        <div className="right-box" onClick={() => scrollTo("about")}>
          <BsMouse className="icon-mousse" />
          <span>Scroll Down</span>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
