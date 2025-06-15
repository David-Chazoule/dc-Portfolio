import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import FR from "../buttonTranslate/img/FlagFR.png";
import UK from "../buttonTranslate/img/FlagUK.png";

function ButtonTranslate() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div className="translate-container">
      <img
        className="flag"
        src={language === "fr" ? FR : UK}
        alt={language === "fr" ? "flagFr" : "flagUK"}
        title={language === "fr" ? "français" : "english"}
        onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
      />
    </div>
  );
}

export default ButtonTranslate;
