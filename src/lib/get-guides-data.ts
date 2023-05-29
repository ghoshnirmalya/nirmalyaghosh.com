import { allGuides, Guide } from "contentlayer/generated";
import find from "lodash/find";
import { ParsedUrlQuery } from "querystring";

export const getCurrentGuide = (slug: string) => {
  const allGuides = getAllGuides();

  const currentGuide = find(allGuides, (guide) => {
    if (guide.slug === slug) {
      return guide;
    }
  });

  return currentGuide as Guide;
};

export const getAllGuides = () => {
  return allGuides;
};
