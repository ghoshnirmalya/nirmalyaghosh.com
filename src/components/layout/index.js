import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Navbar from '../navbar'
import StyledLayout from './styles'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Serif');

  ${reset}

  body {
    background-color: #fafbfc;
  }

  p {
    font-family: 'PT Serif', serif;
    color: #657177;
    margin-bottom: 1rem;
    line-height: 2rem;
  }

  a {
    color: #657177;
  }

  .boxed-content {
    width: 500px;
    margin: 0 auto;
    padding: 50px 0;
  }

  .fluid-content {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .heading {
    margin: 30px;
    font-size: 20px;
    text-transform: uppercase;
  }

`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <StyledLayout>{children}</StyledLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
