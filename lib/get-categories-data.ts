import flatMapDeep from "lodash/flatMapDeep";
import { getAllArticles } from "lib/get-articles-data";

export const getAllCategories = () => {
  const allArticles = getAllArticles();

  return flatMapDeep(allArticles, "categories");
};
