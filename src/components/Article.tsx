import React, { FC } from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

interface Props {
  title: string
  date: string
  excerpt: string
  slug: string
  timeToRead: number
  category: string
}

const Article: FC<Props> = ({
  title,
  date,
  excerpt,
  slug,
  timeToRead,
  category,
}) => {
  return (
    <div>
      <Link to={`/blog/${slug}`}>{title}</Link>
      {date} &mdash; {timeToRead} Min Read &mdash; In
      <Link to={`/categories/${kebabCase(category)}`}> {category}</Link>
      <div>{excerpt}</div>
    </div>
  )
}

export default Article
