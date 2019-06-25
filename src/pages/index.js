import React from 'react'

import Layout from '../components/layout'
import PostCard from '../components/post-card'
import ProjectCard from '../components/project-card'
import SEO from '../components/seo'
import posts from '../static/data/posts.json'
import projects from '../static/data/projects.json'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section>
      <div className="boxed-content">
        <h2 className="heading">Blogs</h2>
        {posts.map((post, index) => <PostCard key={index} data={post} />)}
      </div>
    </section>
    <section className="white">
      <div className="fluid-layout">
        <div className="boxed-content">
          <h2 className="heading">Projects</h2>
          {projects.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
