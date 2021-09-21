import Page from "components/pages/guides/[slug]";
import fs from "fs";
import matter from "gray-matter";
import MDXPrism from "mdx-prism";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkCodeTitles from "remark-code-titles";
import remarkExternalLinks from "remark-external-links";
import remarkSlug from "remark-slug";

const Callout = dynamic(
  import(/* webpackChunkName: "Callout" */ "components/mdx/callout")
);

const Jumbotron = dynamic(
  import(/* webpackChunkName: "Jumbotron" */ "components/mdx/jumbotron")
);

const Link = dynamic(
  import(/* webpackChunkName: "Link" */ "components/mdx/link")
);

const Image = dynamic(
  import(/* webpackChunkName: "Image" */ "components/mdx/image")
);

const root = process.cwd();
const components = { Callout, Jumbotron, Link, Image };
interface IProps {
  mdxSource: any;
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
  return (
    <Page
      content={<MDXRemote {...mdxSource} components={components} />}
      frontMatter={frontMatter}
      guides={guides}
      slug={slug}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: fs.readdirSync(path.join(root, "data", "guides")).map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkSlug, remarkCodeTitles, remarkExternalLinks],
      rehypePlugins: [rehypeAutolinkHeadings, MDXPrism],
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
};

export default GuidesSlugPage;

export const config = {
  unstable_runtimeJS: false,
};
