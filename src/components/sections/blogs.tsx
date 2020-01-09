import React, { FC } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Link } from 'gatsby'

import data from '../../../static/data/blogs.json'

const BlogsSection: FC = () => (
  <div className="mb-16">
    <div className="flex justify-between items-center">
      <div className="text-lg font-semibold mb-4 text-gray-700">Articles</div>
      <div className="mb-4">
        <Link
          to="blogs"
          className="text-sm text-blue-700 hover:text-blue-800 flex items-center"
        >
          View all articles <i className="bx bx-right-arrow-alt ml-1" />
        </Link>
      </div>
    </div>
    <div className="px-4">
      <div className="flex flex-wrap -mx-8">
        {data.slice(0, 5).map((blog, index) => {
          if (blog.guestAuthor) {
            return (
              <OutboundLink
                className="mb-8 px-4"
                href={blog.url}
                rel="noopener noreferrer"
                target="_blank"
                key={index}
              >
                <h4 className="text-base font-semibold text-blue-700 hover:text-blue-800 mb-2">
                  {blog.title} &#8599;
                </h4>
                <div className="text-sm font-semibold text-gray-700 flex items-center mb-2">
                  <i className="bx bxs-time-five mr-1" /> {blog.date}
                </div>
                <p className="text-sm text-gray-700">{blog.description}</p>
              </OutboundLink>
            )
          }

          return (
            <Link className="mb-8 px-4" to={blog.url} key={index}>
              <h4 className="text-base font-semibold text-blue-700 hover:text-blue-800 mb-2">
                {blog.title}
              </h4>
              <div className="text-sm font-semibold text-gray-700 flex items-center mb-2">
                <i className="bx bxs-time-five mr-1" /> {blog.date}
              </div>
              <p className="text-sm text-gray-700">{blog.description}</p>
            </Link>
          )
        })}
      </div>
    </div>
  </div>
)

export default BlogsSection
