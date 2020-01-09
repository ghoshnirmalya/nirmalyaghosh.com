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
    <div>
      {prev && (
        <div>
          <span>Previous</span>
          <Link to={`/blog/${kebabCase(prev.frontmatter.title)}`}>
            {prev.frontmatter.title}
          </Link>
        </div>
      )}
      {next && (
        <div>
          <span>Next</span>
          <Link to={`/blog/${kebabCase(next.frontmatter.title)}`}>
            {next.frontmatter.title}
          </Link>
        </div>
      )}
    </div>
  )
}

export default PrevNext
