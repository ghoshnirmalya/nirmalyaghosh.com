import flatMapDeep from "lodash/flatMapDeep";
import { getAllArticles } from "lib/get-articles-data";

export const getAllTags = () => {
  const allArticles = getAllArticles();

  return flatMapDeep(allArticles, "tags");
};
