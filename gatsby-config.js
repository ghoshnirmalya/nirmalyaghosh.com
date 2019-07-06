module.exports = {
  siteMetadata: {
    title: 'Portfolio of Nirmalya Ghosh',
    description: 'Personal portfolio of Nirmalya Ghosh',
    keywords: 'gatsby, portfolio, developer, react, javascript',
    siteUrl: 'https://www.nirmalyaghosh.com',
    author: {
      name: 'Nirmalya Ghosh',
      url: 'https://www.nirmalyaghosh.com',
      email: 'nirmalya.email@gmail.com',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.nirmalyaghosh.com',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_CODE,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Portfolio of Nirmalya Ghosh',
        short_name: `Nirmalya Ghosh`,
        start_url: `/`,
        background_color: `#07162b`,
        theme_color: `#03a9f4`,
        display: `standalone`,
        icon: `src/static/images/favicon.png`,
      },
    },
    'gatsby-plugin-offline'
  ],
}
