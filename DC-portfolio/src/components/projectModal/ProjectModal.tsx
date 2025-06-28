import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

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
  githubLinkTwo?: string;
  git?: boolean;
  live: boolean;
  liveLink: string;
  icon: IconType[];
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

function ProjectModal({ project, onClose }: Props) {
  const [closing, setClosing] = useState(false);
  const { theme } = useContext(ThemeContext);

  if (!project) return null;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 300);
  };

  return (
    <div className="modal-container">
      <div className={`modal-content ${closing ? "fade-out" : "fade-in"}`}>
        <img src={`/img/${project.img}.gif`} alt={project.img + `image`} />

        <div className="modal-detail">
          <h2>{project.titleFr}</h2>
          <p>{project.descriptionFr}</p>

          <div className="techno-container">
            <p>Techno utilisées</p>
            <div className="techno-icons">
              {project.icon.map((IconComponent, index) => {
                return <IconComponent key={index} className="icon-techno" />;
              })}
            </div>
          </div>

          <div className="link-container">
            {project.github === true ? (
              <a href={project.githubLink}>
                <button className={theme === "light" ? "btnLight" : "btnDark"}>
                  GitHub
                </button>
              </a>
            ) : (
              ""
            )}

            {project.git === true ? (
              <a href={project.githubLinkTwo}>
                <button className={theme === "light" ? "btnLight" : "btnDark"}>
                  GitHub back-end
                </button>
              </a>
            ) : (
              ""
            )}
            {project.live === true ? (
              <a href={project.liveLink}>
                <button className={theme === "light" ? "btnLight" : "btnDark"}>
                  Live
                </button>
              </a>
            ) : (
              ""
            )}
          </div>
          <div className="footer-modal">
            <button onClick={handleClose}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
