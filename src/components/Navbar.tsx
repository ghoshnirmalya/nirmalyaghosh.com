import React, { FC } from 'react'
import { Link } from 'gatsby'

import SocialProfiles from './SocialProfiles'

const ContentMain: FC = () => {
  return (
    <div className="shadow border-b border-gray-100 relative p-4">
      <div className="max-w-2xl m-auto flex justify-between items-center flex-col sm:flex-row">
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
          <SocialProfiles />
        </div>
      </div>
    </div>
  )
}

export default ContentMain
