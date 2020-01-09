import React, { FC } from 'react'
import Link from 'gatsby-link'
import kebabCase from 'lodash/kebabCase'
import Helmet from 'react-helmet'

import PageProps from '../models/PageProps'
import Layout from '../components/Layout'
import Header from '../components/Header'
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
      <Helmet title={`${'Tags'} | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
        <div>Tag &ndash; {tagName}</div>
        <div>
          {subline} (See <Link to="/tags">all tags</Link>)
        </div>
      </Header>
      <div>
        <div>
          {posts
            ? posts.map((post: any, index) => (
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

export default TagTemplate
