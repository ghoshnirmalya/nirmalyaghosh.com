import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import Layout from '../components/Layout'
import Header from '../components/Header'
import SEO from '../components/SEO'
import PrevNext from '../components/PrevNext'
import config from '../../config/SiteConfig'
import '../utils/prismjs-theme.css'
import PathContext from '../models/PathContext'
import Post from '../models/Post'

interface Props {
  data: {
    markdownRemark: Post
  }
  pathContext: PathContext
}

const PostTemplate: FC<Props> = ({ pathContext, data }) => {
  const { prev, next } = pathContext
  const post = data.markdownRemark
  return (
    <Layout>
      {post ? (
        <>
          <SEO postPath={post.fields.slug} postNode={post} postSEO />
          <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
          <Header banner={post.frontmatter.banner}>
            <Link to="/">{config.siteTitle}</Link>
            <div>{post.frontmatter.title}</div>
            <div>
              {post.frontmatter.date} &mdash; {post.timeToRead} Min Read &mdash;
              In{' '}
              <Link to={`/categories/${kebabCase(post.frontmatter.category)}`}>
                {post.frontmatter.category}
              </Link>
            </div>
          </Header>
          <div>
            <div>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              {post.frontmatter.tags ? (
                <div>
                  Tags: &#160;
                  {post.frontmatter.tags.map((tag, i) => (
                    <Link key={i} to={`/tags/${kebabCase(tag)}`}>
                      <strong>{tag}</strong>{' '}
                      {i < post.frontmatter.tags.length - 1 ? `, ` : ``}
                    </Link>
                  ))}
                </div>
              ) : null}
              <PrevNext prev={prev} next={next} />
            </div>
          </div>
        </>
      ) : null}
    </Layout>
  )
}

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
        tags
        banner
      }
      timeToRead
    }
  }
`

export default PostTemplate
