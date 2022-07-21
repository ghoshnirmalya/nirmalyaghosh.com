import Link from "next/link";
import { IArticle } from "types/article";

interface IProps {
  articles: IArticle[];
}

const Articles = ({ articles }: IProps) => {
  return (
    <div>
      {articles.map((article: IArticle) => (
        <Link key={article.id} href={`/articles/${article.id}`}>
          {article.title}
        </Link>
      ))}
    </div>
  );
};

export default Articles;
