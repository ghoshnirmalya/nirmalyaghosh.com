import * as React from 'react'
import { graphql } from 'gatsby'
import { Disqus } from 'gatsby-plugin-disqus'
import Helmet from 'react-helmet'

import Navbar from "../components/navbar"

interface BlogTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      id: number
      frontmatter: {
        title: string
      }
    }
  }
}

const BlogTemplate: React.SFC<BlogTemplateProps> = ({ data }) => {
  const disqusConfig = {
    identifier: data.markdownRemark.id,
    title: data.markdownRemark.frontmatter.title,
  }

  return (
    <>
      <Helmet
        title={`${data.markdownRemark.frontmatter.title} | ${data.site.siteMetadata.title}`}
        meta={[
          { name: 'description', content: data.markdownRemark.frontmatter.title }
        ]}

      >
        <html lang="en" />
      </Helmet>
      <Navbar />
      <div className="bg-gray-100 px-8">
        <div className="max-w-xl m-auto py-12">
          <h1 className="text-3xl font-semibold mb-12">
            {data.markdownRemark.frontmatter.title}
          </h1>
          <div
            className="text-base leading-relaxed text-gray-900"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
          <div className="mt-8">
            <Disqus config={disqusConfig} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogTemplate

export const query = graphql`
  query BlogTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      id
      frontmatter {
        title
      }
    }
  }
`
