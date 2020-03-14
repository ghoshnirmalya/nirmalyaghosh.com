import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Navbar from '../components/Navbar'
import config from '../../config/SiteConfig'
import PageProps from '../models/PageProps'

const BlogsPage: FC<PageProps> = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <React.Fragment>
      <Helmet title={`Homepage | ${config.siteTitle}`} />
      <Navbar />
      <div className="bg-gray-100 px-8">
        <div className="max-w-2xl m-auto py-12">
          {edges.map((post: any) => (
            <Link
              className="mb-16 block"
              to={`/blog/${post.node.fields.slug}`}
              key={post.node.fields.slug}
            >
              <h4 className="text-2xl font-semibold text-blue-700 hover:text-blue-800 mb-2">
                {post.node.frontmatter.title}
              </h4>
              <div className="text-sm font-semibold text-gray-700 flex items-center mb-2">
                <i className="bx bxs-time-five mr-1"></i>{' '}
                {post.node.frontmatter.date}
              </div>
              <p className="text-sm text-gray-700">{post.node.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export const BlogsQuery = graphql`
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

export default BlogsPage
