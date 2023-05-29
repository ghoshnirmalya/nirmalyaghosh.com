import { allGuides } from "contentlayer/generated";

export const getCurrentGuide = (slug: string) => {
  const allGuides = getAllGuides();

  const currentGuide = allGuides.find((guide) => guide.slug === slug);

  return currentGuide;
};

export const getAllGuides = () => {
  return allGuides.filter((guide) => !guide.draft);
};
