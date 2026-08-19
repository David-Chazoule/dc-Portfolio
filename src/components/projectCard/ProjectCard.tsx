import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import type { IconType } from "react-icons";
import type { projectCardType } from '../../data/data.types';

type Props = {
  project: projectCardType
  icon:IconType[];
  onClick: (project: projectCardType) => void;
};

function ProjectCard({ project, onClick }: Props) {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`card-container  ${theme === "light" ? "" : "cardDark"}`}>
      <img
        className={` ${theme === "light" ? "" : "img-dark"}`}
        src={`/img/${project.img}.gif`}
        alt={project.img + `image`}
      />
      <div className="detail-card">
        <p className={`title-card ${theme === "light" ? "" : "titleDark"}`}>
          {language === "fr" ? project.titleFr : project.titleEn}
        </p>

        <p
          className={`information-design ${
            theme === "light" ? "" : "information-design-dark"
          }`}
          onClick={() => onClick(project)}
        >
          {language === "fr" ? "Plus d'informations" : "More information"}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
