import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Navbar from '../components/Navbar'
import config from '../../config/SiteConfig'
import projects from '../../static/data/projects.json'

const ProjectsPage: FC = () => {
  return (
    <React.Fragment>
      <Helmet title={`Homepage | ${config.siteTitle}`} />
      <Navbar />
      <div className="bg-gray-100 px-8">
        <div className="max-w-2xl m-auto py-12">
          <div className="flex flex-wrap -mx-8">
            {projects.map((project, index) => {
              return (
                <div key={index} className="mb-8 w-full sm:w-1/2 px-4">
                  <div className="bg-white shadow-lg rounded p-4 h-48 flex flex-col justify-between">
                    <div className="mb-2">
                      <OutboundLink
                        href={project.projectUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-base font-semibold text-blue-700 hover:text-blue-800 mb-2 block"
                      >
                        {project.title}
                      </OutboundLink>
                      <p className="text-sm text-gray-700">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex">
                      <OutboundLink
                        href={project.projectUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-blue-700 hover:text-black mr-2 text-lg"
                      >
                        <i className="bx bxl-github"></i>
                      </OutboundLink>
                      {project.demoUrl && (
                        <OutboundLink
                          href={project.demoUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-blue-700 hover:text-blue-700 mr-2 text-lg"
                        >
                          <i className="bx bx-glasses-alt"></i>
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
    </React.Fragment>
  )
}

export default ProjectsPage
