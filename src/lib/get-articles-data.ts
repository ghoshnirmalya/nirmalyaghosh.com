import { allArticles } from "contentlayer/generated";

export const getCurrentArticle = (slug: string) => {
  const currentArticle = allArticles.find((article) => article.slug === slug);

  return currentArticle;
};

export const getAllArticles = () => {
  return allArticles.filter((article) => !article.draft);
};

export const getNextArticles = (slug: string) => {
  const allArticles = getAllArticles();

  return allArticles.filter((article) => article !== getCurrentArticle(slug));
};
