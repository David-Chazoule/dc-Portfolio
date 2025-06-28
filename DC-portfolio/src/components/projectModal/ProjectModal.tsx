import { useState } from "react";

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
  tags: string[];
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

function ProjectModal({ project, onClose }: Props) {
  const [closing, setClosing] = useState(false);

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
          <div className="link-container">
            <button>Github</button>
            <button>Live</button>
          </div>
          <button onClick={handleClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
