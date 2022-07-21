import IProject from "types/project";
import IPublication from "types/publication";

interface IProps {
  publications: IPublication[];
}

const Publications = ({ publications }: IProps) => {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Publications</h2>
      <div className="space-y-8">
        {publications.map((publication) => (
          <a
            href={publication.url}
            key={publication.url}
            className="block text-blue-700 hover:text-black"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="text-lg font-semibold">{publication.title}</h2>
            <p className="text-gray-500">{publication.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Publications;
