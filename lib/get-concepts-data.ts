import { allConcepts } from ".contentlayer/data";
import find from "lodash/find";
import { ParsedUrlQuery } from "querystring";
import { Concept } from ".contentlayer/types";

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
