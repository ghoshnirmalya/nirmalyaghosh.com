import * as React from 'react'
import { Link } from "gatsby";

interface SectionProps {
  title: string;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, id, children }) => (
  <div id={id} className="mb-16">
    <div className="flex justify-between items-center">
      <div className="text-lg font-semibold mb-4 text-gray-700">{title}</div>
      <div className="mb-4">
        <Link
          to={`/${id}`}
          className="text-sm text-blue-700 hover:text-blue-800 flex items-center"
        >
          View all {id} <i className='bx bx-right-arrow-alt ml-1' ></i>
        </Link>
      </div>
    </div>
    <div className="px-4">
      <div className="flex flex-wrap -mx-8">
        {children}
      </div>
    </div>
  </div>
)

export default Section
