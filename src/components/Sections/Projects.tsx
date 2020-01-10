import React, { FC } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Link } from 'gatsby'

import data from '../../../static/data/projects.json'

const ProjectsSection: FC = () => (
  <div className="mb-16">
    <div className="flex justify-between items-center">
      <div className="text-lg font-semibold mb-4 text-gray-700">Projects</div>
      <div className="mb-4">
        <Link
          to="projects"
          className="text-sm text-blue-700 hover:text-blue-800 flex items-center"
        >
          View all projects <i className="bx bx-right-arrow-alt ml-1" />
        </Link>
      </div>
    </div>
    <div className="px-4">
      <div className="flex flex-wrap -mx-8">
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
                    <i className="bx bxl-github" />
                  </OutboundLink>
                  {project.demoUrl && (
                    <OutboundLink
                      href={project.demoUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-blue-700 hover:text-blue-700 mr-2 text-lg"
                    >
                      <i className="bx bx-glasses-alt" />
                    </OutboundLink>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default ProjectsSection
