import Link from "next/link";
import { ArticleStatus, IArticle } from "types/article";

interface IProps {
  articles: IArticle[];
  articlesStatus?: ArticleStatus.Published | ArticleStatus.Unpublished;
}

const Articles = ({
  articles,
  articlesStatus = ArticleStatus.Published,
}: IProps) => {
  if (!articles.length) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-md font-semibold">Articles</h2>
      <div className="space-y-8">
        {articles.map((article) => {
          const href =
            articlesStatus === ArticleStatus.Published
              ? `/articles/${article.slug}`
              : `/articles/drafts/${article.slug}`;

          return (
            <Link href={href} key={article.id} passHref legacyBehavior>
              <a className="group block text-black dark:text-white">
                <span className="flex flex-row items-center space-x-2">
                  <h2 className="text-lg font-semibold">{article.title}</h2>
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </span>
                <p className="text-gray-500">{article.publishedDate}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
