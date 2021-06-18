import Page from "components/pages/articles/[slug]";
import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import path from "path";
import React from "react";

const Callout = dynamic(
  import(/* webpackChunkName: "Callout" */ "components/mdx/callout")
);

const root = process.cwd();
const components = { Callout };

interface IProps {
  mdxSource: any;
  frontMatter: any;
}

const ArticlesSlugPage: NextPage<IProps> = ({ mdxSource, frontMatter }) => {
  return (
    <Page
      content={<MDXRemote {...mdxSource} components={components} />}
      frontMatter={frontMatter}
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
  const mdxSource = await serialize(content, {
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

export default ArticlesSlugPage;
