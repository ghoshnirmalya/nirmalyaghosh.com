import * as React from 'react'
import styled from '@emotion/styled'

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: space-between;

  > .link {
    &:not(:last-child) {
      margin-right: 50px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > .link {
      text-align: center;

      &:not(:last-child) {
        margin-bottom: 30px;
        margin-right: 0;
      }
    }
  }
`

const HeroSection: React.FC = () => (
  <StyledHeroSection>
    <a className="link" href="https://github.com/ghoshnirmalya" rel="noopener noreferrer" target="_blank">
      Github
    </a>
    <a className="link" href="https://www.linkedin.com/in/ghoshnirmalya/" rel="noopener noreferrer" target="_blank">
      LinkedIn
    </a>
    <a className="link" href="https://angel.co/ghosh-nirmalya" rel="noopener noreferrer" target="_blank">
      AngelList
    </a>
    <a className="link" href="https://dribbble.com/ghoshnirmalya" rel="noopener noreferrer" target="_blank">
      Dribbble
    </a>
    <a className="link" href="https://www.behance.net/nirmalyaghosh" rel="noopener noreferrer" target="_blank">
      Behance
    </a>
    <a className="link" href="https://stackoverflow.com/users/1928724/nirmalya-ghosh" rel="noopener noreferrer" target="_blank">
      Stack Overflow
    </a>
  </StyledHeroSection>
)

export default HeroSection
