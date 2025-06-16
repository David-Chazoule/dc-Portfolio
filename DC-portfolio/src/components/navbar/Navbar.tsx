import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { navbar } from "../../data/data";

declare module "react-icons" {
  interface IconBaseProps {
    className?: string;
  }
}

function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navbar-container">
      <ul className="list-nav">
        {navbar.map((item) => {
          const IconComponent = item.icon;
          return (
            <li key={item.id} className="nav-item">
              <button
                onClick={() => scrollTo(item.target)}
                className="nav-link"
                title={language === "fr" ? item.menuFr : item.menuEn}
              >
                <IconComponent className="nav-icon" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
