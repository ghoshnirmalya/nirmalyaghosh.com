import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import StyledProfileCard from './styles'

const ProfileCard = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "avatar.png" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <StyledProfileCard>
            <div className="left-content">
              <Img fixed={data.file.childImageSharp.fixed} />
            </div>
            <div className="right-content">
              <p className="name">Nirmalya Ghosh</p>
              <p className="designation">
                Front End Developer at{' '}
                <a href="https://www.bangthetable.com/">Bang the Table</a>
              </p>
            </div>
          </StyledProfileCard>
        </>
      )}
    />
  )
}

export default ProfileCard
