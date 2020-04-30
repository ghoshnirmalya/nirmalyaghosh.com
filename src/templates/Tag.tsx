import React, { FC } from 'react'
import kebabCase from 'lodash/kebabCase'
import { Helmet } from 'react-helmet'

import PageProps from '../models/PageProps'
import Layout from '../components/Layout'
import Article from '../components/Article'
import config from '../../config/SiteConfig'

const TagTemplate: FC<PageProps> = ({ pathContext }) => {
  const { posts, tagName } = pathContext
  const totalCount = posts ? posts.length : 0
  const subline = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tagName}"`

  return (
    <Layout>
      <Helmet title={`${tagName} | ${config.siteTitle}`} />
      <div className="bg-gray-100 px-8 min-h-screen">
        <div className="max-w-2xl m-auto py-12">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold mb-4 text-gray-700">
              {subline}
            </div>
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

export default TagTemplate
