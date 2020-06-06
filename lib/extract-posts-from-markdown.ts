import fs from "fs";
import path from "path";
import matter from "gray-matter";
import unified from "unified";
import slug from "remark-slug";
import toc from "remark-toc";
import remark2rehype from "remark-rehype";
import highlight from "rehype-highlight";
import parse from "remark-parse";
import remark2react from "remark-react";
import html from "rehype-stringify";

interface Post {
  id: string;
  date: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a: Post, b: Post) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  /**
   * This function is necessary to extract postIds from the markdown files.
   * See https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
   * The returned value should be of the following form:
   * return {
   *   paths: [
   *     { params: { id: '1' } },
   *     { params: { id: '2' } }
   *   ],
   *   fallback: ...
   * }
   */
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = unified()
    .use(parse)
    .use(slug)
    .use(toc)
    .use(remark2rehype)
    .use(highlight)
    .use(remark2react)
    .use(html)
    .processSync(matterResult.content).contents;

  // Combine the data with the id and processedContent
  return {
    id,
    processedContent,
    ...matterResult.data,
  };
}
