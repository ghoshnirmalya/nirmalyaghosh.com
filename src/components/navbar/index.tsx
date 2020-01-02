import * as React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ContentMain: React.FC = () => {
  return (
    <div className="shadow border-b border-gray-100 relative p-4">
      <div className="max-w-xl m-auto flex justify-between items-center flex-col sm:flex-row">
        <div>
          <Link
            to="/"
            className="text-base text-blue-700 hover:text-blue-800 mr-4"
            activeClassName="text-blue-800"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="text-base text-blue-700 hover:text-blue-800 mr-4"
            activeClassName="text-blue-800"
          >
            Blogs
          </Link>
          <Link
            to="/projects"
            className="text-base text-blue-700 hover:text-blue-800"
            activeClassName="text-blue-800"
          >
            Projects
          </Link>
        </div>
        <div className="mt-4 sm:mt-0">
          <OutboundLink
            className="text-blue-600 hover:text-black mx-2 text-2xl"
            href="https://github.com/ghoshnirmalya"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className='bx bxl-github'></i>
          </OutboundLink>
          <OutboundLink
            className="text-blue-600 hover:text-blue-700 mx-2 text-2xl"
            href="https://www.linkedin.com/in/ghoshnirmalya/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className='bx bxl-linkedin-square' ></i>
          </OutboundLink>
          <OutboundLink
            className="text-blue-600 hover:text-red-500 mx-2 text-2xl"
            href="https://dribbble.com/ghoshnirmalya"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className='bx bxl-dribbble' ></i>
          </OutboundLink>
          <OutboundLink
            className="text-blue-600 hover:text-blue-500 mx-2 text-2xl"
            href="https://www.behance.net/nirmalyaghosh"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className='bx bxl-behance' ></i>
          </OutboundLink>
          <OutboundLink
            className="text-blue-600 hover:text-yellow-800 mx-2 text-2xl"
            href="https://stackoverflow.com/users/1928724/nirmalya-ghosh"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className='bx bxl-stack-overflow' ></i>
          </OutboundLink>
        </div>
      </div>
    </div>
  )
}

export default ContentMain
