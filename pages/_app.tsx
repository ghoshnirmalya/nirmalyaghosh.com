import React, { useEffect } from "react";
import Head from "next/head";
import siteConfig from "config/site";
import { RecoilRoot } from "recoil";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import * as gtag from "lib/gtag";
import Router from "next/router";

const Navbar = dynamic(import("components/navbar"));
const Layout = dynamic(import("components/layout"));

const isProd = process.env.NODE_ENV === "production";

declare global {
  interface Window {
    gtag: any;
  }
}

export function reportWebVitals({ id, name, label, value }) {
  if (isProd && window.gtag) {
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

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (isProd) {
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
    <RecoilRoot>
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
                url: siteConfig.assets.avatar,
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
      </Layout>
    </RecoilRoot>
  );
};

export default App;
