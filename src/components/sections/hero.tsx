import * as React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const StyledHeroSection = styled.section`
  h1 {
    font-size: 50px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`

const HeroSection: React.FC = () => {
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
        <StyledHeroSection>
          <Img fixed={data.avatar.childImageSharp.fixed} />
          <h1>Nirmalya Ghosh</h1>
          <p>Frontend Developer and Designer from Bangalore, India</p>
        </StyledHeroSection>
      )}
    />
  )
}

export default HeroSection
