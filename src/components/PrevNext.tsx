import React, { FC } from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import Post from '../models/Post'

interface Props {
  next: Post
  prev: Post
}

const PrevNext: FC<Props> = ({ prev, next }) => {
  return (
    <div className="flex items-center justify-between -mx-4">
      {prev && (
        <div className="mb-8 w-full md:w-1/2 p-4 mx-4 flex flex-col justify-center bg-white shadow-lg rounded hover:bg-gray-100">
          <span className="text-lg font-semibold mb-4 text-gray-700">
            Previous
          </span>
          <Link
            to={`/blog/${kebabCase(prev.frontmatter.title)}`}
            className="text-sm text-blue-700 hover:text-blue-800"
          >
            {prev.frontmatter.title}
          </Link>
        </div>
      )}
      {next && (
        <div className="mb-8 w-full md:w-1/2 p-4 mx-4 flex flex-col justify-center bg-white shadow-lg rounded hover:bg-gray-100">
          <span className="text-lg font-semibold mb-4 text-gray-700">Next</span>
          <Link
            to={`/blog/${kebabCase(next.frontmatter.title)}`}
            className="text-sm text-blue-700 hover:text-blue-800"
          >
            {next.frontmatter.title}
          </Link>
        </div>
      )}
    </div>
  )
}

export default PrevNext
