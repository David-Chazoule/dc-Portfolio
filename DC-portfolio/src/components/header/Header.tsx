import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ButtonTheme from "../UI/buttonTheme/ButtonTheme";
import ButtonTranslate from "../UI/buttonTranslate/ButtonTranslate";

function Header() {
  const { theme} = useContext(ThemeContext);
  return (
    <div className={`header-container ${theme}`}>
      <div className="header-box">
        <div className="logo">Logo</div>
        <div className="settings">
          <ButtonTranslate/>
          <ButtonTheme/>
        </div>
      </div>
    </div>
  );
}

export default Header;
