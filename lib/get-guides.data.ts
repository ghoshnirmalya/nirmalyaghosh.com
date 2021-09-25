import fs from "fs";
import matter from "gray-matter";
import find from "lodash/find";
import path from "path";
import Guide from "types/guide";

const root = process.cwd();

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
  return fs.readdirSync(path.join(root, "data", "guides")).map((guidePath) => {
    const source = fs.readFileSync(
      path.join(root, "data", "guides", guidePath),
      "utf8"
    );
    const { data, content } = matter(source);

    return {
      data,
      content,
    };
  });
};
