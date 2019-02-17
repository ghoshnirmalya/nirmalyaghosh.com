import React from 'react'
import PropTypes from 'prop-types'

import StyledProjectCard from './styles'

const ProjectCard = ({ data }) => {
  return (
    <StyledProjectCard>
      <a
        className="content"
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="title">{data.title}</p>
        <p className="description">{data.description}</p>
        <p className="stars">{data.stars} stars</p>
      </a>
    </StyledProjectCard>
  )
}

ProjectCard.propTypes = {
  data: PropTypes.object,
}

export default ProjectCard
