import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Hero from '../components/sections/hero'
import SocialProfiles from '../components/sections/social-profiles'
import Projects from '../components/sections/projects'
import Blogs from '../components/sections/blogs'

import favicon from '../static/images/favicon.png'
import '../static/styles/tailwind.css'
import 'boxicons/css/boxicons.min.css'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexPage: React.FC = () => (
  <StaticQuery
    query={graphql`
      query IndexPageQuery {
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
        <div className="shadow border-b border-gray-100 relative px-8">
          <div className="max-w-xl m-auto pt-6">
            <Hero />
            <SocialProfiles />
          </div>
        </div>
        <div className="bg-gray-100 px-8">
          <div className="max-w-xl m-auto py-12">
            <Projects />
            <Blogs />
          </div>
        </div>
      </React.Fragment>
    )}
  />
)

export default IndexPage
