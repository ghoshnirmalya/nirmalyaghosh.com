import React from 'react'

import Layout from '../components/layout'
import PostCard from '../components/post-card'
import SEO from '../components/seo'
import posts from '../static/data/posts.json'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="boxed-content">
      {posts.map((post, index) => (
        <PostCard key={index} data={post} />
      ))}
    </div>
  </Layout>
)

export default IndexPage
