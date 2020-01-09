import React, { FC } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Article from '../components/Article'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Blogs from '../components/sections/Blogs'

import PageProps from '../models/PageProps'
import config from '../../config/SiteConfig'

const IndexPage: FC<PageProps> = ({ data }) => {
  const { edges, totalCount } = data.allMarkdownRemark

  return (
    <Layout>
      <Helmet title={`Homepage | ${config.siteTitle}`} />
      <div className="shadow border-b border-gray-100 relative px-8">
        <div className="max-w-xl m-auto pt-6">
          <Hero />
        </div>
      </div>
      <div className="bg-gray-100 px-8">
        <div className="max-w-xl m-auto py-12">
          <Projects />
          <Blogs />
        </div>
      </div>
      <img src={config.siteLogo} />

      {edges.map(post => (
        <Article
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          excerpt={post.node.excerpt}
          timeToRead={post.node.timeToRead}
          slug={post.node.fields.slug}
          category={post.node.frontmatter.category}
          key={post.node.fields.slug}
        />
      ))}
      <p className={'textRight'}>
        <Link to={'/blog'}>All articles ({totalCount})</Link>
      </p>
    </Layout>
  )
}

export const IndexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          timeToRead
        }
      }
    }
  }
`

export default IndexPage
