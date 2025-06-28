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
  return (
    <div className="card-container">
      <img src={`/img/${project.img}.gif`} alt={project.img + `image`} />
      <div className="detail-card">
        <p className="title-card">{project.titleFr}</p>

        <p onClick={() => onClick(project)}>plus d'informations</p>
      </div>
    </div>
  );
}

export default ProjectCard;
