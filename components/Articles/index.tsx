import Link from "next/link";
import { IArticle } from "types/article";

interface IProps {
  articles: IArticle[];
}

const Articles = ({ articles }: IProps) => {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-md">Articles</h2>
      <div className="space-y-8">
        {articles.map((article) => (
          <Link href={`/articles/${article.id}`} key={article.id} passHref>
            <a className="block text-black group">
              <span className="space-x-2 flex flex-row items-center">
                <h2 className="text-lg font-semibold">{article.title}</h2>
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </span>
              <p className="text-gray-500">{article.publishedDate}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;
