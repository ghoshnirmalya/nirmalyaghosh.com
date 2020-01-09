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
  } tagged with "${categoryName}"`

  return (
    <Layout>
      <Helmet title={`${categoryName} | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
        <div>Category &ndash; {categoryName}</div>
        <div>
          {subline} (See <Link to="/categories">all categories</Link>)
        </div>
      </Header>
      <div>
        <div>
          {posts
            ? posts.map((post: any, index: number) => (
                <Article
                  title={post.frontmatter.title}
                  date={post.frontmatter.date}
                  excerpt={post.excerpt}
                  slug={kebabCase(post.frontmatter.title)}
                  timeToRead={post.timeToRead}
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
