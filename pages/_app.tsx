import { Analytics } from "@vercel/analytics/react";
import siteConfig from "config/site";
import "focus-visible/dist/focus-visible";
import { initGA } from "lib/google-analytics";
import isProduction from "lib/is-production";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";

const Layout = dynamic(
  () => import(/* webpackChunkName: "Layouts" */ "components/layouts")
);
const Navbar = dynamic(
  () => import(/* webpackChunkName: "Navbar" */ "components/navbar")
);

const PortfolioApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (isProduction) {
      initGA(process.env.NEXT_PUBLIC_GA);
    }
  }, []);

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteConfig.assets.favicon} type="image/png" />
      </Head>
      <NextSeo
        title={`${siteConfig.details.title} - ${siteConfig.details.tagLine}`}
        description={siteConfig.details.description}
        twitter={{
          handle: siteConfig.socialLinks.twitter,
          site: siteConfig.socialLinks.twitter,
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: siteConfig.details.url,
          title: siteConfig.details.title,
          description: siteConfig.details.description,
          images: [
            {
              url: `${siteConfig.details.url}${siteConfig.assets.avatar}`,
              width: 800,
              height: 600,
              alt: siteConfig.details.title,
            },
          ],
          site_name: siteConfig.details.title,
          type: "website",
          locale: "en_IE",
        }}
      />
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
};

export default PortfolioApp;
