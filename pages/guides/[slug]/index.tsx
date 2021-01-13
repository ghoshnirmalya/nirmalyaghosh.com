import Page from "components/pages/guides/[slug]";
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
  import(/* webpackChunkName: "Callout" */ "components/mdx/callout")
);

const Jumbotron = dynamic(
  import(/* webpackChunkName: "Jumbotron" */ "components/mdx/jumbotron")
);

const Link = dynamic(
  import(/* webpackChunkName: "Link" */ "components/mdx/link")
);

const root = process.cwd();
const components = { Callout, Jumbotron, Link };
interface IProps {
  mdxSource: MdxRemote.Source;
  frontMatter: any;
  guides: any;
  slug: string;
}

const GuidesSlugPage: NextPage<IProps> = ({
  guides,
  mdxSource,
  frontMatter,
  slug,
}) => {
  const content = hydrate(mdxSource, { components });

  return (
    <Page
      content={content}
      frontMatter={frontMatter}
      guides={guides}
      slug={slug}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs.readdirSync(path.join(root, "data", "guides")).map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
  };
}

export async function getStaticProps({ params }) {
  const guidesRoot = path.join(root, "data", "guides", `${params.slug}`);
  const guides = fs.readdirSync(guidesRoot).map((p) => {
    const content = fs.readFileSync(path.join(guidesRoot, p), "utf8");

    return {
      slug: p.replace(/\.mdx/, ""),
      content,
      frontMatter: matter(content).data,
    };
  });

  const source = fs.readFileSync(
    path.join(root, "data", "guides", `${params.slug}`, "01-index.mdx"),
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
      guides,
      mdxSource,
      frontMatter: data,
      slug: params.slug,
    },
  };
}

export default GuidesSlugPage;
