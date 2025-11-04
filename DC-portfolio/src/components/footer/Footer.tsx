import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

function Footer() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`footer-container ${theme === "light" ? "" : "footerDark"}`}
    >
      <h1 className={`byTitle ${theme === "light" ? "" : "byTitleDark"}`}>
        {language === "fr" ? "Par" : "By"} David
      </h1>
      <div className="nav">
        <h2
          className={`navTitle ${theme === "light" ? "" : "navTitleDark"}`}
          onClick={() => scrollTo("about")}
        >
          {language === "fr" ? "À propos" : "About"}
        </h2>
        <h2
          className={`navTitle ${theme === "light" ? "" : "navTitleDark"}`}
          onClick={() => scrollTo("projects")}
        >
          Portfolio
        </h2>
      </div>
      <div className="copyRight">
        <p className={theme === "light" ? "" : "pDark"}>
          David.com. All Rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
