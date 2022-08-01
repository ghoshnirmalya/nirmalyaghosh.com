import IProject from "types/project";
import IPublication from "types/publication";

interface IProps {
  publications: IPublication[];
}

const Publications = ({ publications }: IProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-md font-semibold">Publications</h2>
      <div className="space-y-8">
        {publications.map((publication) => (
          <a
            href={publication.url}
            key={publication.url}
            className="group block text-black dark:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="flex flex-row items-center space-x-2 text-lg font-semibold">
              <span>{publication.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
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
