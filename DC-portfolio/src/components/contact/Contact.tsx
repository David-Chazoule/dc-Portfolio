import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

function Contact() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return <div className={`contact-container ${theme}`}>Contact</div>;
}

export default Contact;
