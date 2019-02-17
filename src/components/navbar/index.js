import React from 'react'
import { Link } from 'gatsby'

import StyledNavbar from './styles'
import ProfileCard from '../profile-card'

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="boxed-content">
        <div className="left-content">
          <ProfileCard />
        </div>
        <div className="right-content">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/projects" className="link">
            Projects
          </Link>
          <a
            href="https://www.linkedin.com/in/ghoshnirmalya/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ghoshnirmalya/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </StyledNavbar>
  )
}

export default Navbar
