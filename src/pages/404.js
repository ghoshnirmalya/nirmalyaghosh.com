import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import NotFoundCard from '../components/not-found-card'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not Found" keywords={[`gatsby`, `application`, `react`]} />
    <div className="boxed-content">
      <NotFoundCard />
    </div>
  </Layout>
)

export default NotFoundPage
