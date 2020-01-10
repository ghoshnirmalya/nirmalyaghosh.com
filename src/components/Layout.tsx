import React, { FC } from 'react'

import Navbar from './Navbar'
import 'boxicons/css/boxicons.min.css'
import '../../static/styles/tailwind.css'

const Layout: FC<{}> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  )
}

export default Layout
