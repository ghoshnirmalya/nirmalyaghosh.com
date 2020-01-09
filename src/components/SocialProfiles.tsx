import React, { FC, Fragment } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const HeroSection: FC = () => (
  <Fragment>
    <OutboundLink
      className="text-blue-600 hover:text-black mx-2 text-2xl"
      href="https://github.com/ghoshnirmalya"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="bx bxl-github" />
    </OutboundLink>
    <OutboundLink
      className="text-blue-600 hover:text-blue-700 mx-2 text-2xl"
      href="https://www.linkedin.com/in/ghoshnirmalya/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="bx bxl-linkedin-square" />
    </OutboundLink>
    <OutboundLink
      className="text-blue-600 hover:text-red-500 mx-2 text-2xl"
      href="https://dribbble.com/ghoshnirmalya"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="bx bxl-dribbble" />
    </OutboundLink>
    <OutboundLink
      className="text-blue-600 hover:text-blue-500 mx-2 text-2xl"
      href="https://www.behance.net/nirmalyaghosh"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="bx bxl-behance" />
    </OutboundLink>
    <OutboundLink
      className="text-blue-600 hover:text-yellow-800 mx-2 text-2xl"
      href="https://stackoverflow.com/users/1928724/nirmalya-ghosh"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="bx bxl-stack-overflow" />
    </OutboundLink>
  </Fragment>
)

export default HeroSection
