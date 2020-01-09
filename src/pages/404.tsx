import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import config from '../../config/SiteConfig'

const NotFoundPage: FC<any> = () => {
  return (
    <Layout>
      <Helmet title={`404 not found | ${config.siteTitle}`} />
      <div>
        <Link to="/">{config.siteTitle}</Link>
        <div>NOT FOUND</div>
      </div>
      <div>
        <div>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
