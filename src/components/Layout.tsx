import React, { FC } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import split from 'lodash/split'

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
