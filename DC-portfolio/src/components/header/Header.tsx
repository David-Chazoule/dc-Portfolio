import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ButtonTheme from "../UI/buttonTheme/ButtonTheme";
import ButtonTranslate from "../UI/buttonTranslate/ButtonTranslate";
import { motion } from "framer-motion";
import dark from "./img/logoDark.png";
import light from "./img/logoLight.png";
function Header() {
  const { theme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`header-container ${theme} ${
        scrolled ? `scrolled-${theme}` : ""
      } `}
    >
      <div className="header-box">
        <motion.div
          className="logo"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          {theme === "light" ? (
            <img src={light} alt="" />
          ) : (
            <img src={dark} alt="" />
          )}
        </motion.div>
        <motion.div
          className="settings"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <ButtonTranslate />
          <ButtonTheme />
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
