import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import config from '../../config/SiteConfig'

const NotFoundPage: FC<any> = () => {
  return (
    <Layout>
      <Helmet title={`404 not found | ${config.siteTitle}`} />
      <div className="bg-gray-100 px-8 min-h-screen">
        <div className="max-w-xl m-auto py-12">
          <div className="flex items-center justify-center flex-col">
          <img 
          src={config.NotFoundPageBg} 
          className="mb-12 h-48"
          />
        <Link to="/" className="text">
            Click here to go back to the Home Page
          </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
