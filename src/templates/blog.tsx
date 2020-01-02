import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import { Disqus } from 'gatsby-plugin-disqus'
import Helmet from 'react-helmet'

import Layout from '../layouts'
import Footer from "../components/sections/footer"

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

const StyledBlog = styled.main`
  h1 {
    color: #fff;
    font-size: 50px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 50px;
    line-height: 65px;
    letter-spacing: .25px;
  }

  h2 {
    font-size: 28px;
    margin-top: 100px;
  }

  p {
    color: hsla(0,0%,100%,0.8);
    font-size: 17px;
    margin-bottom: 50px;
    font-family: "Noto Serif", serif;
    line-height: 30px;
  }

  blockquote {
    border-left: 5px solid #03a9f4;
    padding: 20px 0 20px 40px;
    margin: 0 0 50px;
    background-color: #04121f;
    border-radius: 4px;
    font-style: italic;

    > p {
      margin: 0;
    }
  }

  > .link-to-blogs {
    margin-bottom: 100px;
    display: flex;
    font-size: 20px;
    font-weight: bold;
  }

  > .comments {
    margin-top: 100px;
  }

  img {
    width: 100%;
    border-radius: 4px;
  }

  .gatsby-highlight {
    background-color: #04131f;
    border-radius: 4px;
    overflow: auto;
    font-size: 14px;
    padding: 20px;
    margin-bottom: 50px;

    .gatsby-highlight-code-line {
      background-color: #002e52;
      display: block;
      border-left: 5px solid #03a9f4;
      margin: 0 -20px;
      padding-left: 10px;
    }

    pre[class*="language-"] {
      background: transparent;
      margin: 0;
      padding: 0;
      overflow: initial;
      float: left;
      min-width: 100%;
    }

    code[class*="language-"] {
      background: transparent;
      color: #e4e4e4;
      box-shadow: none;
    }
  }
`

const BlogTemplate: React.SFC<BlogTemplateProps> = ({ data }) => {
  const disqusConfig = {
    identifier: data.markdownRemark.id,
    title: data.markdownRemark.frontmatter.title,
  }

  return (
    <>
      <Layout>
        <Helmet
          title={`${data.markdownRemark.frontmatter.title} | ${data.site.siteMetadata.title}`}
          meta={[
            { name: 'description', content: data.markdownRemark.frontmatter.title }
          ]}

        >
          <html lang="en" />
        </Helmet>
        <StyledBlog>
          <Link to="/#blogs" className="link-to-blogs">&#8592; All blogs</Link>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <div className="comments">
            <Disqus config={disqusConfig} />
          </div>
        </StyledBlog>
      </Layout>
      <Footer />
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
