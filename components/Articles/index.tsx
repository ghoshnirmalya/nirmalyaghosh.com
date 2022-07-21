import Link from "next/link";
import { IArticle } from "types/article";

interface IProps {
  articles: IArticle[];
}

const Articles = ({ articles }: IProps) => {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Articles</h2>
      <div className="space-y-8">
        {articles.map((article) => (
          <Link href={`/articles/${article.id}`} key={article.id} passHref>
            <a className="block text-blue-700 hover:text-black">
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-gray-500">{article.publishedDate}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;
