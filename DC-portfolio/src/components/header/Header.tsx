import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ButtonTheme from "../UI/buttonTheme/ButtonTheme";
import ButtonTranslate from "../UI/buttonTranslate/ButtonTranslate";

function Header() {
  const { theme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`header-container ${theme} ${scrolled ? `scrolled-${theme}` : ""} `}>
      <div className="header-box">
        <div className="logo">Logo</div>
        <div className="settings">
          <ButtonTranslate />
          <ButtonTheme />
        </div>
      </div>
    </div>
  );
}

export default Header;
