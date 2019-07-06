import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import 'modern-normalize'

import Content from '../components/content'

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #07162b;
  color: #f1f1f1;
  font-size: 16px;

  a {
    color: #03a9f4;
    text-decoration: none;

    &:hover {
      color: #65cfff;
    }
  }
`
interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <StyledLayout>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        />
        <Content>{children}</Content>
      </StyledLayout>
    )}
  />
)

export default IndexLayout
