import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Link } from "gatsby";

import Navbar from "../components/navbar"

import favicon from '../static/images/favicon.png'
import blogs from '../static/data/blogs.json'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const BlogsPage: React.FC = () => (
  <StaticQuery
    query={graphql`
      query BlogsPageQuery {
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
        <Navbar />
        <div className="bg-gray-100 px-8">
          <div className="max-w-xl m-auto py-12">
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
                    <h4 className="text-2xl font-semibold text-blue-700 hover:text-blue-800 mb-2">{blog.title} &#8599;</h4>
                    <div className="text-sm font-semibold text-gray-700 flex items-center mb-2">
                      <i className='bx bxs-time-five mr-1' ></i> {blog.date}
                    </div>
                    <p className="text-sm text-gray-700">{blog.description}</p>
                  </OutboundLink>
                )
              }

              return (
                <Link
                  className="mb-16 block"
                  to={blog.url}
                  key={index}
                >
                  <h4 className="text-2xl font-semibold text-blue-700 hover:text-blue-800 mb-2">{blog.title}</h4>
                  <div className="text-sm font-semibold text-gray-700 flex items-center mb-2">
                    <i className='bx bxs-time-five mr-1' ></i> {blog.date}
                  </div>
                  <p className="text-sm text-gray-700">{blog.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </React.Fragment>
    )}
  />
)

export default BlogsPage
