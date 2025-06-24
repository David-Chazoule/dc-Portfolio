type Project = {
   id:number,
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
  project: Project;
  onClick: (project: Project) => void;
};

function ProjectCard({ project, onClick }: Props) {
  return (
    <div className="card-container">
      <img src={`/img/${project.img}.gif`} alt={project.img+`image`} />
      <div className="detail-card">
        <h2>{project.titleFr}</h2>

        <h3 onClick={() => onClick(project)}>Details</h3>
      </div>
    </div>
  );
}

export default ProjectCard;
