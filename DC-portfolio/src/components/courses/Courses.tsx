import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

function Courses() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return <div className={`courses-container ${theme}`}>Courses</div>;
}

export default Courses;
