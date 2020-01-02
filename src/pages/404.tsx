import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
      <div>
        <Img fixed={data.avatar.childImageSharp.fixed} />
        <Link to="/">
          Click here to go back to the home page
          </Link>
      </div>
    )}
  />
)

export default NotFoundPage
