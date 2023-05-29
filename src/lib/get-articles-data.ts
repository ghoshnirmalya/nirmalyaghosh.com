import { allArticles, Article } from "contentlayer/generated";
import filter from "lodash/filter";
import find from "lodash/find";

export const getCurrentArticle = (slug: string) => {
  const currentArticle = find(allArticles, (article) => {
    if (article.slug === slug) {
      return article;
    }
  });

  return currentArticle as Article;
};

export const getAllArticles = () => {
  return allArticles.filter((article) => !article.draft);
};

export const getNextArticles = (slug: string) => {
  const allArticles = getAllArticles();

  return filter(allArticles, (article) => article !== getCurrentArticle(slug));
};
