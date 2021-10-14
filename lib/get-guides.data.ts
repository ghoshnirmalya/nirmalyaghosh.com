import { allGuides } from ".contentlayer/data";
import find from "lodash/find";
import IFrontMatter from "types/frontMatter";
import Guide from "types/guide";

export const getCurrentGuide = (slug: string) => {
  const allGuides = getAllGuides();

  const currentGuide = find(allGuides, (guide) => {
    if (guide.data.slug === slug) {
      return {
        data: guide.data,
        content: guide.content,
      };
    }
  }) as Guide;

  return currentGuide;
};

export const getAllGuides = () => {
  return allGuides.map((guide) => {
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
      githubLink,
      coverImage,
    } = guide;

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
        githubLink,
        coverImage,
      } as unknown as IFrontMatter,
      content: body.raw,
    };
  });
};
