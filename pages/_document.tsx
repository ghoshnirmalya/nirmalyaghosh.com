import siteConfig from "configs/site";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href={siteConfig.assets.favicon} type="image/png" />

          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_KEY}
          />
          <meta
            name="ahrefs-site-verification"
            content={process.env.NEXT_PUBLIC_AHREFS_SITE_VERIFICATION_KEY}
          />
        </Head>

        <body className="bg-white dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
