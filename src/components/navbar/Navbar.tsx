import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { navbar } from "../../data/data";
import { motion } from "framer-motion";

// Extend react-icons types to allow className in all icons
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
    // IntersectionObserver to detect which section is visible on screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is on screen
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            console.log("Currently intersecting:", id);
            if (id) setSelectedId(id); // Update active nav icon
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    // Select all <section> elements in the page
    const sections = document.querySelectorAll("section");
    // Start observing each section
    sections.forEach((section) => observer.observe(section));
    // Cleanup on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Smooth scroll to a section based on its ID
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.div
      className="navbar-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <ul className={`list-nav ${theme}`}>
        {navbar.map((item) => {
          const IconComponent = item.icon;
          return (
            <li key={item.id} className="nav-item">
              <button
                onClick={() => scrollTo(item.target)}
                className={`nav-link ${
                  selectedId === item.id
                    ? `nav-link-selected ${
                        theme === "light" ? "" : "nav-link-selected-dark"
                      }`
                    : ""
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
    </motion.div>
  );
}

export default Navbar;
