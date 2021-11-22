import { allArticles } from ".contentlayer/data";
import compact from "lodash/compact";
import filter from "lodash/filter";
import find from "lodash/find";
import flattenDeep from "lodash/flattenDeep";
import { ParsedUrlQuery } from "querystring";
import { Article } from ".contentlayer/types";

export const getCurrentArticle = (params: ParsedUrlQuery | undefined) => {
  const currentArticle = find(allArticles, (article) => {
    if (article.slug === params.slug) {
      return article;
    }
  });

  return currentArticle as Article;
};

export const getAllArticles = () => {
  return allArticles;
};

export const getAllArticlesWhichBelongToCurrentSlug = (
  params: ParsedUrlQuery | undefined,
  type: "categories" | "tags"
) => {
  const allArticles = getAllArticles();

  switch (type) {
    case "categories":
      const allPostsFromThisCategory = filter(allArticles, (article) => {
        return article.categories.includes(params?.slug);
      });

      return compact(
        flattenDeep(allPostsFromThisCategory)
      ) as unknown as Article[];

    case "tags":
      const allPostsFromThisTag = filter(allArticles, (article) => {
        return article.tags.includes(params?.slug);
      });

      return compact(flattenDeep(allPostsFromThisTag)) as unknown as Article[];

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
