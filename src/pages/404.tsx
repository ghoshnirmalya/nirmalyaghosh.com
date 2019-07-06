import * as React from 'react'
import styled from '@emotion/styled'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts'

const Styled404Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .text {
    margin-top: 50px;
  }
`

const NotFoundPage = () => (
  <StaticQuery
    query={graphql`
      query {
        avatar: file(relativePath: { eq: "404.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 315, height: 315) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Styled404Section>
          <Img fixed={data.avatar.childImageSharp.fixed} />
          <Link to="/" className="text">
            Click here to go back to the home page
          </Link>
        </Styled404Section>
      </Layout>
    )}
  />
)

export default NotFoundPage
