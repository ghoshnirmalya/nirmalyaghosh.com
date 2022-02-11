import { allConcepts, Concept } from "contentlayer/generated";
import find from "lodash/find";
import { ParsedUrlQuery } from "querystring";

export const getCurrentConcept = (params: ParsedUrlQuery | undefined) => {
  const allConcepts = getAllConcepts();

  const currentConcept = find(allConcepts, (guide) => {
    if (guide.slug === params.slug) {
      return guide;
    }
  });

  return currentConcept as Concept;
};

export const getAllConcepts = () => {
  return allConcepts;
};
