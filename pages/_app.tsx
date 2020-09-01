import React from "react";
import Head from "next/head";
import siteConfig from "config/site";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import App from "next/app";
import * as gtag from "lib/gtag";
import Router from "next/router";
import * as Sentry from "@sentry/node";

const Layout = dynamic(
  import(/* webpackChunkName: "Layouts" */ "components/layouts")
);
const isProd = process.env.NODE_ENV === "production";

declare global {
  interface Window {
    gtag: any;
  }
}

Sentry.init({
  enabled: isProd,
  dsn: process.env.SENTRY_DSN,
});

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

export default class MyApp extends App {
  componentDidMount() {
    if (isProd) {
      const handleRouteChange = (url: string) => {
        gtag.pageview(url);
      };

      Router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        Router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href={siteConfig.assets.favicon} type="image/png" />
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
        <Component {...pageProps} />
      </Layout>
    );
  }
}
