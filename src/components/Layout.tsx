import React, { FC } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import split from 'lodash/split'

import Navbar from './Navbar'
import 'boxicons/css/boxicons.min.css'
import '../../static/styles/tailwind.css'

const Layout: FC<{}> = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            buildTime(formatString: "DD.MM.YYYY")
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Navbar />
          {children}
          <div>
            &copy; {split(data.site.buildTime, '.')[2]} by Majid Hajian. All
            rights reserved. <br />
            <a href="https://github.com/mhadaily/gatsby-starter-typescirpt-power-blog">
              GitHub Repository
            </a>{' '}
            <br />
            <span>Last build: {data.site.buildTime}</span>
          </div>
        </React.Fragment>
      )}
    />
  )
}

export default Layout
