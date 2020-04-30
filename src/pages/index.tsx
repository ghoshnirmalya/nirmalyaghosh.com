import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Sections/Hero'
import Projects from '../components/Sections/Projects'
import Blogs from '../components/Sections/Blogs'

import PageProps from '../models/PageProps'
import config from '../../config/SiteConfig'

const IndexPage: FC<PageProps> = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <Helmet title={`Homepage | ${config.siteTitle}`} />
      <div className="shadow border-b border-gray-100 relative px-8">
        <div className="max-w-2xl m-auto pt-6">
          <Hero />
        </div>
      </div>
      <div className="bg-gray-100 px-8">
        <div className="max-w-2xl m-auto py-12">
          <Projects />
          <Blogs edges={edges} />
        </div>
      </div>
    </Layout>
  )
}

export const IndexBlogsQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            category
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`

export default IndexPage
