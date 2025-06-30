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
    <div className="footer-container">
      <h1>By David</h1>
      <div className="nav">
        <h2 onClick={() => scrollTo("about")}>
          {language === "fr" ? "A propos" : "About"}
        </h2>
        <h2 onClick={() => scrollTo("projects")}>Portfolio</h2>
      </div>
      <div className="copyRight">
        <p>David.com. All Rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
