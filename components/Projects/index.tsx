import IProject from "types/project";

interface IProps {
  projects: IProject[];
}

const Projects = ({ projects }: IProps) => {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-md">Projects</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <a
            href={project.url}
            key={project.url}
            className="block text-black"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="text-gray-500">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
