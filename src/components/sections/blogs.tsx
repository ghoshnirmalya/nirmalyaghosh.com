import * as React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Link } from "gatsby";

import Section from '../content/section'
import data from '../../static/data/blogs.json'

const BlogsSection: React.FC = () => (
  <Section title="Latest articles" id="blogs">
    {data.map((blog, index) => {
      if (blog.guestAuthor) {
        return (
          <OutboundLink className="blogs-block" href={blog.url} rel="noopener noreferrer" target="_blank" key={index}>
            <h4 className="title">{blog.title} &#8599;</h4>
            <p className="description">{blog.description}</p>
            <div className="date">{blog.date}</div>
          </OutboundLink>
        )
      }

      return (
        <Link className="blogs-block" to={blog.url} key={index}>
          <h4 className="title">{blog.title}</h4>
          <p className="description">{blog.description}</p>
          <div className="date">{blog.date}</div>
        </Link>
      )
    })}
  </Section>
)

export default BlogsSection
