import React, { FC } from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import Article from '../components/Article'
import config from '../../config/SiteConfig'
import Data from '../models/Data'

interface Props {
  data: Data
  pageContext: {
    currentPage: number
    totalPages: number
  }
}

const BlogTemplate: FC<Props> = ({ pageContext, data }) => {
  const { currentPage, totalPages } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  return (
    <Layout>
      <Helmet title={`Blogs | ${config.siteTitle}`} />
      <Navbar />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
        <div>Latest stories ({totalCount})</div>
      </Header>
      {edges.map((post) => (
        <Article
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          excerpt={post.node.excerpt}
          slug={post.node.fields.slug}
          category={post.node.frontmatter.category}
          key={post.node.fields.slug}
        />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        url={'blog'}
      />
    </Layout>
  )
}

export const BlogQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`

export default BlogTemplate
