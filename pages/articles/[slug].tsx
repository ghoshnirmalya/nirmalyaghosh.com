import Page from "components/pages/articles/[slug]";
import fs from "fs";
import matter from "gray-matter";
import calculateReadingTime from "lib/calculate-reading-time";
import { NextPage } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import dynamic from "next/dynamic";
import path from "path";
import React from "react";

const Callout = dynamic(
  import(/* webpackChunkName: "Callout" */ "components/mdx/callout"),
  {
    ssr: false,
  }
);

const root = process.cwd();
const components = { Callout };

interface IProps {
  mdxSource: MdxRemote.Source;
  frontMatter: any;
}

const ArticlePage: NextPage<IProps> = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, { components });

  return (
    <Page
      content={content}
      frontMatter={frontMatter}
      readingTime={calculateReadingTime(mdxSource.renderedOutput)}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs.readdirSync(path.join(root, "data", "articles")).map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
  };
}

export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join(root, "data", "articles", `${params.slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        require("remark-code-titles"),
        require("remark-toc"),
        require("remark-external-links"),
      ],
      rehypePlugins: [
        require("rehype-autolink-headings"),
        require("mdx-prism"),
      ],
      compilers: [],
    },
    scope: {},
  });

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
}

export default ArticlePage;
