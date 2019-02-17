import React from 'react'

import StyledNavbar from './styles'
import ProfileCard from '../profile-card'

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="boxed-content">
        <ProfileCard />
      </div>
    </StyledNavbar>
  )
}

export default Navbar
