import * as React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Section from '../content/section'
import data from '../../static/data/blogs.json'

const ProjectsSection: React.FC = () => (
  <Section title="Blogs">
    {data.map((project, index) => {
      return (
        <OutboundLink className="blogs-block" href={project.url} rel="noopener noreferrer" target="_blank" key={index}>
          <h4 className="title">{project.title}</h4>
          <p className="description">
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy
            foster collaborative thinking to further the overall value proposition.{' '}
          </p>
          <div className="date">{project.date}</div>
        </OutboundLink>
      )
    })}
  </Section>
)

export default ProjectsSection
