import React, { FC } from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

interface Props {
  title: string
  date: string
  excerpt: string
  slug: string
  category: string
}

const Article: FC<Props> = ({ title, date, excerpt, slug, category }) => {
  return (
    <div>
      <Link className="mb-16 block" to={`/blog/${slug}`}>
        <h4 className="text-2xl font-semibold text-blue-700 hover:text-blue-800 mb-2">
          {title}
        </h4>
        <div className="text-sm mb-2 text-gray-600">
          Posted on {date} in
          <Link to={`/categories/${kebabCase(category)}`} className="ml-1">
            {category}
          </Link>
        </div>
        <p className="text-sm text-gray-700">{excerpt}</p>
      </Link>
    </div>
  )
}

export default Article
