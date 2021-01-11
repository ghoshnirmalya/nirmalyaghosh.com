import Page from "components/pages/docs/[slug]/[chapter]";
import fs from "fs";
import matter from "gray-matter";
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
  docs: any;
  slug: string;
  chapter: string;
}

const DocsChapterPage: NextPage<IProps> = ({
  docs,
  mdxSource,
  frontMatter,
  slug,
  chapter,
}) => {
  const content = hydrate(mdxSource, { components });

  return (
    <Page
      content={content}
      frontMatter={frontMatter}
      docs={docs}
      slug={slug}
      chapter={chapter}
    />
  );
};

export async function getServerSideProps({ params }) {
  const docsRoot = path.join(root, "data", "docs", `${params.slug}`);
  const docs = fs.readdirSync(docsRoot).map((p) => {
    const content = fs.readFileSync(path.join(docsRoot, p), "utf8");

    return {
      slug: p.replace(/\.mdx/, ""),
      content,
      frontMatter: matter(content).data,
    };
  });

  const source = fs.readFileSync(
    path.join(root, "data", "docs", `${params.slug}`, `${params.chapter}.mdx`),
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
      docs,
      mdxSource,
      frontMatter: data,
      slug: params.slug,
      chapter: params.chapter,
    },
  };
}

export default DocsChapterPage;
