import { allGuides } from ".contentlayer/data";
import find from "lodash/find";
import { ParsedUrlQuery } from "querystring";
import { Guide } from ".contentlayer/types";

export const getCurrentGuide = (params: ParsedUrlQuery | undefined) => {
  const allGuides = getAllGuides();

  const currentGuide = find(allGuides, (guide) => {
    if (guide.slug === params.slug) {
      return guide;
    }
  });

  return currentGuide as Guide;
};

export const getAllGuides = () => {
  return allGuides;
};
