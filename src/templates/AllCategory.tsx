import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import Layout from '../components/Layout'
import Header from '../components/Header'
import config from '../../config/SiteConfig'
import PageProps from '../models/PageProps'

const AllCategoryTemplate: FC<PageProps> = ({ pathContext }) => {
  if (pathContext.categories) {
    return (
      <Layout>
        <Helmet title={`Categories | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
          <div>Categories</div>
        </Header>
        <div>
          <div>
            {pathContext.categories.map((category, index: number) => (
              <div key={index}>
                <Link to={`/categories/${kebabCase(category)}`}>
                  {category}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default AllCategoryTemplate
