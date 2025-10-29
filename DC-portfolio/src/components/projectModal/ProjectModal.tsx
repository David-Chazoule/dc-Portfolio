import { useState, useContext, useEffect } from "react";
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
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    if (project) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [project]);

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
      <div
        className={`modal-content ${closing ? "fade-out" : "fade-in"} ${
          theme === "light" ? "" : "modal-content-dark"
        }`}
      >
        <img src={`/img/${project.img}.gif`} alt={project.img + `image`} />

        <div className="modal-detail">
          <h1 className={theme === "light" ? "" : "darkWrite"}>
            {language === "fr" ? project.titleFr : project.titleEn}
          </h1>
          <p className={theme === "light" ? "" : "darkWrite"}>
            {language === "fr" ? project.descriptionFr : project.descriptionEn}
          </p>

          <div className="techno-container">
            <div className="link-container">
              {project.github === true ? (
                <a href={project.githubLink}>
                  <button className={` ${theme === "light" ? "" : "btnDark"}`}>
                    GitHub
                  </button>
                </a>
              ) : (
                ""
              )}

              {project.git === true ? (
                <a href={project.githubLinkTwo}>
                  <button className={` ${theme === "light" ? "" : "btnDark"}`}>
                    GitHub back-end
                  </button>
                </a>
              ) : (
                ""
              )}
              {project.live === true ? (
                <a href={project.liveLink}>
                  <button className={` ${theme === "light" ? "" : "btnDark"}`}>
                    Live
                  </button>
                </a>
              ) : (
                ""
              )}
            </div>

            <div className="techno-icons">
              <div>
                <p className={theme === "light" ? "" : "darkThemeTitle"}>
                  {language === "fr" ? "Techno utilisées" : "Techno used"}
                </p>
              </div>
              <div className="icon-container">
                {project.icon.map((IconComponent, index) => {
                  return (
                    <IconComponent
                      key={index}
                      className={`icon-techno ${
                        theme === "light" ? "" : "icon-techno-dark"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className={` footer-modal ${
              theme === "light" ? "" : "footer-modalDark"
            }`}
          >
            <button onClick={handleClose}>
              {language === "fr" ? "Fermer" : "close"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
