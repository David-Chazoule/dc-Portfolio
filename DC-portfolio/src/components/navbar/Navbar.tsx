import { useContext, useState, useEffect } from "react";
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
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            console.log("Currently intersecting:", id);
            if (id) setSelectedId(id);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navbar-container">
      <ul className={`list-nav ${theme}`}>
        {navbar.map((item) => {
          const IconComponent = item.icon;
          return (
            <li key={item.id} className="nav-item">
              <button
                onClick={() => scrollTo(item.target)}
                className={`nav-link ${
                  selectedId === item.id ? "nav-link-selected" : ""
                }`}
                title={language === "fr" ? item.menuFr : item.menuEn}
              >
                <IconComponent
                  className={`nav-icon  ${
                    theme === "light" ? "iconLight" : "iconDark"
                  } ${selectedId === item.id ? "icon-selected" : ""}`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
