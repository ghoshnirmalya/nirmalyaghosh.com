import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Link, graphql } from 'gatsby'

import Navbar from '../components/Navbar'
import config from '../../config/SiteConfig'
import blogs from '../../static/data/blogs.json'
import PageProps from '../models/PageProps'

const BlogsPage: FC<PageProps> = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <React.Fragment>
      <Helmet title={`Homepage | ${config.siteTitle}`} />
      <Navbar />
      <div className="bg-gray-100 px-8">
        <div className="max-w-xl m-auto py-12">
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
          {blogs.map((blog, index) => {
            if (blog.guestAuthor) {
              return (
                <OutboundLink
                  className="mb-16 block"
                  href={blog.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  key={index}
                >
                  <h4 className="text-2xl font-semibold text-blue-700 hover:text-blue-800 mb-2">
                    {blog.title} &#8599;
                  </h4>
                  <div className="text-sm font-semibold text-gray-700 flex items-center mb-2">
                    <i className="bx bxs-time-five mr-1"></i> {blog.date}
                  </div>
                  <p className="text-sm text-gray-700">{blog.description}</p>
                </OutboundLink>
              )
            }

            return (
              <Link className="mb-16 block" to={blog.url} key={index}>
                <h4 className="text-2xl font-semibold text-blue-700 hover:text-blue-800 mb-2">
                  {blog.title}
                </h4>
                <div className="text-sm font-semibold text-gray-700 flex items-center mb-2">
                  <i className="bx bxs-time-five mr-1"></i> {blog.date}
                </div>
                <p className="text-sm text-gray-700">{blog.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export const BlogsQuery = graphql`
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

export default BlogsPage
