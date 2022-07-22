import IProject from "types/project";
import IPublication from "types/publication";

interface IProps {
  publications: IPublication[];
}

const Publications = ({ publications }: IProps) => {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-md">Publications</h2>
      <div className="space-y-8">
        {publications.map((publication) => (
          <a
            href={publication.url}
            key={publication.url}
            className="block text-black group"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="text-lg font-semibold space-x-2 flex flex-row items-center">
              <span>{publication.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 opacity-0 group-hover:opacity-100 text-gray-500 transition-opacity ease-in-out duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </h2>
            <p className="text-gray-500">{publication.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Publications;
