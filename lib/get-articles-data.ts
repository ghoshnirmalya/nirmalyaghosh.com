import fs from "fs";
import matter from "gray-matter";
import find from "lodash/find";
import path from "path";
import Article from "types/article";

const root = process.cwd();

export const getCurrentArticle = (slug: string) => {
  const allArticles = getAllArticles();

  const currentArticle = find(allArticles, (article) => {
    if (article.data.slug === slug) {
      return {
        data: article.data,
        content: article.content,
      };
    }
  }) as Article;

  return currentArticle;
};

export const getAllArticles = () => {
  return fs
    .readdirSync(path.join(root, "data", "articles"))
    .map((articlePath) => {
      const source = fs.readFileSync(
        path.join(root, "data", "articles", articlePath),
        "utf8"
      );
      const { data, content } = matter(source);

      return {
        data,
        content,
      };
    });
};
