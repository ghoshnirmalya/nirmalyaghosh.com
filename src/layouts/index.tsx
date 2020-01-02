import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import favicon from '../static/images/favicon.png'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}

    render={(data: StaticQueryProps) => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
          link={[
            { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon}` },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {children}
      </React.Fragment>
    )}
  />
)

export default IndexLayout
