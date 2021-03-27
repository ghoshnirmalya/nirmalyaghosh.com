import { Box } from "@chakra-ui/react";
import * as Sentry from "@sentry/node";
import siteConfig from "config/site";
import * as gtag from "lib/gtag";
import isProduction from "lib/is-production";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import Router from "next/router";
import React, { useEffect } from "react";

const Layout = dynamic(
  import(/* webpackChunkName: "Layouts" */ "components/layouts")
);
const Navbar = dynamic(
  import(/* webpackChunkName: "Navbar" */ "components/navbar")
);
const Footer = dynamic(
  import(/* webpackChunkName: "Footer" */ "components/footer")
);

declare global {
  interface Window {
    gtag: any;
  }
}

Sentry.init({
  enabled: isProduction,
  dsn: process.env.SENTRY_DSN,
});

export function reportWebVitals({ id, name, label, value }) {
  if (isProduction && window.gtag) {
    window.gtag("send", "event", {
      eventCategory:
        label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
      eventAction: name,
      eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      eventLabel: id, // id unique to current page load
      nonInteraction: true, // avoids affecting bounce rate.
    });
  }
}

const PortfolioApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (isProduction) {
      const handleRouteChange = (url: string) => {
        gtag.pageview(url);
      };

      Router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        Router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, []);

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteConfig.assets.favicon} type="image/png" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Serif:wght@700&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Serif:wght@700&display=swap"
          rel="stylesheet"
        />
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
      <Box minH="calc(100vh - 77px - 148px)">
        <Component {...pageProps} />
      </Box>
      <Footer />
    </Layout>
  );
};

export default PortfolioApp;
