import React from 'react'

import Layout from '../components/layout'
import ProjectCard from '../components/project-card'
import SEO from '../components/seo'
import projects from '../static/data/projects.json'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <div className="fluid-content">
      {projects.map((project, index) => (
        <ProjectCard key={index} data={project} />
      ))}
    </div>
  </Layout>
)

export default ProjectsPage
