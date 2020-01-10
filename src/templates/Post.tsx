import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import Layout from '../components/Layout'
import Header from '../components/Header'
import SEO from '../components/SEO'
import PrevNext from '../components/PrevNext'
import config from '../../config/SiteConfig'
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
          <Header banner={post.frontmatter.banner} />
          <div className="px-8">
            <div className="max-w-2xl m-auto py-12 -mt-48 bg-white relative p-12 rounded-t">
              <div className="text-sm mb-2 text-gray-600">
                {post.timeToRead} Min Read
                <i className="bx bx-wifi-0" />
                Posted on {post.frontmatter.date} in
                <Link
                  to={`/categories/${kebabCase(post.frontmatter.category)}`}
                  className="ml-1"
                >
                  {post.frontmatter.category}
                </Link>
              </div>
              <h1 className="text-4xl font-semibold mb-4">
                {post.frontmatter.title}
              </h1>
              <div className="text-xs mb-12">
                {post.frontmatter.tags ? (
                  <div>
                    {post.frontmatter.tags.map((tag, i) => (
                      <Link key={i} to={`/tags/${kebabCase(tag)}`}>
                        <span className="bg-blue-700 text-white py-1 px-2 mr-2 rounded">
                          # {tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
              <div
                className="text-base leading-relaxed text-gray-900"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <div className="mt-12">
                <PrevNext prev={prev} next={next} />
              </div>
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
        date(formatString: "MMMM D, YYYY")
        category
        tags
        banner
      }
      timeToRead
    }
  }
`

export default PostTemplate
