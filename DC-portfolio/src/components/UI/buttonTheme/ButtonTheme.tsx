import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { LanguageContext } from "../../../context/LanguageContext";
import sunDark from "./img/sunDark.png";
import moonLight from "./img/moonLight.png";

function ButtonTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <div
      className={`button_container ${
        theme === "light" ? "button_containerLight" : "button_containerDark"
      }`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <img
          className="logoBtn "
          src={sunDark}
          alt="logo-LightTheme"
          title={language === "fr" ? "mode clair" : "light theme"}
        />
      ) : (
        <img
          className="logoBtn "
          src={moonLight}
          alt="logo-DarkTheme"
          title={language === "fr" ? "mode sombre" : "dark theme"}
        />
      )}
    </div>
  );
}

export default ButtonTheme;
