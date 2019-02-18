import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import StyledProfileCard from './styles'

const ProfileCard = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          avatar: file(relativePath: { eq: "avatar.png" }) {
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
              <Link to="/">
                <Img fixed={data.avatar.childImageSharp.fixed} />
              </Link>
            </div>
            <div className="right-content">
              <p className="name">Nirmalya Ghosh</p>
              <div className="designation">
                Front End Developer at
                <a href="https://www.bangthetable.com/">
                  Bang the Table
                </a>
              </div>
            </div>
          </StyledProfileCard>
        </>
      )}
    />
  )
}

ProfileCard.propTypes = {
  data: PropTypes.object,
}

export default ProfileCard
