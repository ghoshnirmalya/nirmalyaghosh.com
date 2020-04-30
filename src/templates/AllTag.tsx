import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import Layout from '../components/Layout'
import Header from '../components/Header'
import config from '../../config/SiteConfig'
import PageProps from '../models/PageProps'

const AllTagTemplate: FC<PageProps> = ({ pathContext }) => {
  const { tags } = pathContext

  if (tags) {
    return (
      <Layout>
        <Helmet title={`Tags | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
          <div>Tags</div>
        </Header>
        <div>
          <div>
            {tags.map((tag, index: number) => (
              <div key={index}>
                <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default AllTagTemplate
