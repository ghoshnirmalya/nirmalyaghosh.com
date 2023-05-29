import Page from "components/pages/articles/[slug]";
import siteConfig from "config/site";
import { getAllArticles, getCurrentArticle } from "lib/get-articles-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const currentArticle = getCurrentArticle(params.slug);

  if (!currentArticle) {
    return {
      title: `${siteConfig.details.title} - ${siteConfig.details.tagLine}`,
      description: siteConfig.details.description,
      openGraph: {
        title: siteConfig.details.title,
        description: siteConfig.details.description,
        url: siteConfig.details.url,
        siteName: siteConfig.details.title,
        images: [
          {
            url: `${siteConfig.assets.avatar}`,
            width: 800,
            height: 600,
            alt: siteConfig.details.title,
          },
        ],
        type: "article",
        locale: "en_IE",
      },
    };
  }

  return {
    title: currentArticle.title,
    description: currentArticle.description,
    openGraph: {
      title: currentArticle.title,
      description: currentArticle.description,
      url: `${siteConfig.details.url}/guides/${params.slug}`,
      siteName: siteConfig.details.title,
      images: [
        {
          url: `https://cover-images.vercel.app/api?postTitle=${currentArticle.title}&postDescription=${currentArticle.description}&backgroundColor=1a202c&foregroundColor=fff&authorAvatar=${siteConfig.assets.favicon}&authorName=${siteConfig.details.title}`,
          width: 1200,
          height: 675,
          alt: currentArticle.title,
        },
      ],
      type: "article",
      locale: "en_IE",
    },
  };
}

export default async function ArticlesSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getCurrentArticle(params.slug);

  if (!article) {
    return notFound();
  }

  return <Page article={article} />;
}

export async function generateStaticParams() {
  return getAllArticles().map((article) => {
    return {
      params: {
        slug: article.slug,
      },
    };
  });
}
