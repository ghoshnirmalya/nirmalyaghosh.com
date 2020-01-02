import * as React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

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
        <div className="flex flex-col items-center text-center mb-8">
          <Img
            fixed={data.avatar.childImageSharp.fixed}
            className="w-10 h-10 rounded-full mb-4 border-2 border-white shadow"
          />
          <div className="text-base">
            <p className="text-gray-900 leading-none text-2xl font-bold mb-2">Nirmalya Ghosh</p>
            <p className="text-gray-600">
              <span className="text-gray-700 font-semibold">Frontend Developer</span> and <span className="text-gray-700 font-semibold">Designer</span> from Bangalore, India</p>
          </div>
        </div>
      )}
    />
  )
}

export default HeroSection
