import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'

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
      frontmatter: {
        title: string
      }
    }
  }
}

const StyledBlog = styled.main`
  h1 {
    color: #f1f1f1;
    font-size: 50px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 50px;
  }

  h2 {
    font-size: 28px;
    margin-top: 100px;
  }

  p {
    color: #ffffffbf;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 30px;
  }

  > .link-to-blogs {
    margin-bottom: 100px;
    display: flex;
    font-size: 20px;
    font-weight: bold;
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

    .gatsby-highlight-code-line {
      background-color: #002e52;
      display: block;
      border-left: 5px solid #03a9f4;
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

const BlogTemplate: React.SFC<BlogTemplateProps> = ({ data }) => (
  <>
    <Layout>
      <StyledBlog>
        <Link to="/#blogs" className="link-to-blogs">&#8592; All blogs</Link>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

      </StyledBlog>
    </Layout>
    <Footer />
  </>
)

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
      frontmatter {
        title
      }
    }
  }
`
