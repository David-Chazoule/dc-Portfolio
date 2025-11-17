import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { motion } from "framer-motion";

function Footer() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  // Function to smoothly scroll to a section based on its HTML id
  const scrollTo = (id: string) => {
    // Find the element with the given ID
    const element = document.getElementById(id);
    // If the element exists, smoothly scroll to it
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`footer-container ${theme === "light" ? "" : "footerDark"}`}
    >
      <motion.h1
        className={`byTitle ${theme === "light" ? "" : "byTitleDark"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {language === "fr" ? "Par" : "By"} David
      </motion.h1>
      <motion.div
        className="nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
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
      </motion.div>
      <motion.div
        className="copyRight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <p className={theme === "light" ? "" : "pDark"}>
          dc-portfolio-one.vercel.app/ All Rights reserved
        </p>
      </motion.div>
    </div>
  );
}

export default Footer;
