import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Article from '../components/Article'
import config from '../../config/SiteConfig'
import kebabCase from 'lodash/kebabCase'
import PageProps from '../models/PageProps'

const CategoryTemplate: FC<PageProps> = ({ pathContext }) => {
  const { posts, categoryName } = pathContext
  const totalCount = posts ? posts.length : 0
  const subline = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } categorized with "${categoryName}"`

  return (
    <Layout>
      <Helmet title={`${categoryName} | ${config.siteTitle}`} />
      <div className="bg-gray-100 px-8 min-h-screen">
        <div className="max-w-xl m-auto py-12">
        <div className="flex justify-between items-center">
      <div className="text-lg font-semibold mb-4 text-gray-700">{subline}</div>
    </div>
          {posts
            ? posts.map((post: any, index) => (
                <Article
                  title={post.frontmatter.title}
                  date={post.frontmatter.date}
                  excerpt={post.excerpt}
                  slug={kebabCase(post.frontmatter.title)}
                  category={post.frontmatter.category}
                  key={index}
                />
              ))
            : null}
        </div>
      </div>
    </Layout>
  )
}

export default CategoryTemplate
