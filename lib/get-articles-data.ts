import { allArticles } from ".contentlayer/data";
import compact from "lodash/compact";
import filter from "lodash/filter";
import find from "lodash/find";
import flattenDeep from "lodash/flattenDeep";
import { ParsedUrlQuery } from "querystring";
import Article from "types/article";
import IFrontMatter from "types/frontMatter";

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
  return allArticles.map((article) => {
    const {
      title,
      description,
      date,
      lastmod,
      tags,
      categories,
      keywords,
      slug,
      body,
    } = article;

    return {
      data: {
        title,
        description,
        date,
        lastmod,
        tags,
        categories,
        keywords,
        slug,
      } as unknown as IFrontMatter,
      content: body.raw,
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
