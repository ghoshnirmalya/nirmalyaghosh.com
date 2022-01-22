import { allLearnGuides } from ".contentlayer/data";
import find from "lodash/find";
import { ParsedUrlQuery } from "querystring";
import { LearnGuide } from ".contentlayer/types";

export const getCurrentLearnGuide = (params: ParsedUrlQuery | undefined) => {
  const allLearnGuides = getAllLearnGuides();

  const currentLearnGuide = find(allLearnGuides, (guide) => {
    if (guide.slug === params.slug) {
      return guide;
    }
  });

  return currentLearnGuide as LearnGuide;
};

export const getAllLearnGuides = () => {
  return allLearnGuides;
};
