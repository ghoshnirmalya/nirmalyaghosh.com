import Navbar from "components/navbar";
import Layout from "components/layout";
import Head from "next/head";
import siteConfig from "config/site";
import { RecoilRoot } from "recoil";
import { NextSeo } from "next-seo";

export function reportWebVitals(metric) {
  console.log(metric);
}

const App = ({ Component, pageProps }) => {
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
