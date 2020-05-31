import { ThemeProvider, CSSReset, DarkMode, Box, theme } from '@chakra-ui/core'
import Navbar from 'components/navbar'
import Head from 'next/head'
import siteConfig from 'config/site'

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brandColor: '#805ad5',
  },
}

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={siteConfig.assets.favicon} />
        <title>{`${siteConfig.details.title} - ${siteConfig.details.tagLine}`}</title>

        {/* SEO stuffs */}
        <meta name="description" content={siteConfig.details.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${siteConfig.details.title} - ${siteConfig.details.tagLine}`}
        />
        <meta
          property="og:description"
          content={siteConfig.details.description}
        />
        <meta property="og:image" content={siteConfig.assets.avatar} />
        <meta property="og:url" content={siteConfig.details.url} />
        <meta property="og:site_name" content={siteConfig.details.title} />
        <meta
          name="twitter:title"
          content={`${siteConfig.details.title} - ${siteConfig.details.tagLine}`}
        />
        <meta
          name="twitter:description"
          content={siteConfig.details.description}
        />
        <meta name="twitter:image" content={siteConfig.assets.avatar} />
        <meta name="twitter:site" content={siteConfig.socialLinks.twitter} />
        <meta name="twitter:creator" content={siteConfig.socialLinks.twitter} />
      </Head>
      <ThemeProvider theme={customTheme}>
        <DarkMode>
          <CSSReset />
          <Navbar />
          <Box maxW="6xl" mx="auto" p={4}>
            <Component {...pageProps} />
          </Box>
        </DarkMode>
      </ThemeProvider>
    </>
  )
}

export function reportWebVitals(metric) {
  console.log(metric)
}

export default App
