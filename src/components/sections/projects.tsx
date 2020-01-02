import * as React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Section from '../content/section'
import data from '../../static/data/projects.json'

const ProjectsSection: React.FC = () => (
  <Section title="Featured projects" id="projects">
    {data.slice(0, 4).map((project, index) => {
      return (
        <div key={index} className="mb-8 w-full sm:w-1/2 px-4">
          <div className="bg-white shadow rounded p-4 h-48 flex flex-col justify-between">
            <div className="mb-2">
              <OutboundLink
                href={project.projectUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="text-base font-semibold text-blue-700 hover:text-blue-800 mb-2 block"
              >
                {project.title}
              </OutboundLink>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
            <div className="flex">
              <OutboundLink
                href={project.projectUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-700 hover:text-black mr-2 text-lg"
              >
                <i className='bx bxl-github'></i>
              </OutboundLink>
              {project.demoUrl && (
                <OutboundLink
                  href={project.demoUrl} rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue-700 hover:text-blue-700 mr-2 text-lg"
                >
                  <i className='bx bx-glasses-alt'></i>
                </OutboundLink>
              )}
            </div>
          </div>
        </div>
      )
    })}
  </Section >
)

export default ProjectsSection
