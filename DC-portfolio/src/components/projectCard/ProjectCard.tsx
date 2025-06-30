import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import type { IconType } from "react-icons";

type Project = {
  id: number;
  img: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  github: boolean;
  githubLink: string;
  live: boolean;
  liveLink: string;
  icon: IconType[];
};

type Props = {
  project: Project;
  onClick: (project: Project) => void;
};

function ProjectCard({ project, onClick }: Props) {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className="card-container">
      <img src={`/img/${project.img}.gif`} alt={project.img + `image`} />
      <div className="detail-card">
        <p className="title-card">
          {language === "fr" ? project.titleFr : project.titleEn}
        </p>

        <p onClick={() => onClick(project)}>
          {language === "fr" ? "Plus d'informations" : "More information"}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
