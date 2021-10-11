import fs from "fs";
import matter from "gray-matter";
import compact from "lodash/compact";
import filter from "lodash/filter";
import find from "lodash/find";
import flattenDeep from "lodash/flattenDeep";
import path from "path";
import { ParsedUrlQuery } from "querystring";
import Article from "types/article";

const root = process.cwd();

export const getCurrentArticle = (params: ParsedUrlQuery | undefined) => {
  const allArticles = getAllArticles();

  const currentArticle = find(allArticles, (article) => {
    if (article.data.slug === params.slug) {
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

export const getAllArticlesWhichBelongToCurrentSlug = (
  params: ParsedUrlQuery | undefined,
  type: "categories" | "tags"
) => {
  const allArticles = getAllArticles();

  switch (type) {
    case "categories":
      const allPostsFromThisCategory = filter(allArticles, (article) => {
        return article.data.categories.includes(params?.slug as string);
      }) as Article[];

      return compact(flattenDeep(allPostsFromThisCategory));

    case "tags":
      const allPostsFromThisTag = filter(allArticles, (article) => {
        return article.data.tags.includes(params?.slug as string);
      }) as Article[];

      return compact(flattenDeep(allPostsFromThisTag));

    default:
      break;
  }
};

export const getNextArticles = (params: ParsedUrlQuery | undefined) => {
  const allArticles = getAllArticles();

  return filter(
    allArticles,
    (article) => article !== getCurrentArticle(params)
  );
};
