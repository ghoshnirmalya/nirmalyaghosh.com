import * as React from 'react'
import styled from '@emotion/styled'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: space-between;

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
    <OutboundLink className="link" href="https://github.com/ghoshnirmalya" rel="noopener noreferrer" target="_blank">
      Github &#8599;
    </OutboundLink>
    <OutboundLink className="link" href="https://www.linkedin.com/in/ghoshnirmalya/" rel="noopener noreferrer" target="_blank">
      LinkedIn &#8599;
    </OutboundLink>
    <OutboundLink className="link" href="https://angel.co/ghosh-nirmalya" rel="noopener noreferrer" target="_blank">
      AngelList &#8599;
    </OutboundLink>
    <OutboundLink className="link" href="https://dribbble.com/ghoshnirmalya" rel="noopener noreferrer" target="_blank">
      Dribbble &#8599;
    </OutboundLink>
    <OutboundLink className="link" href="https://www.behance.net/nirmalyaghosh" rel="noopener noreferrer" target="_blank">
      Behance &#8599;
    </OutboundLink>
    <OutboundLink className="link" href="https://stackoverflow.com/users/1928724/nirmalya-ghosh" rel="noopener noreferrer" target="_blank">
      Stack Overflow &#8599;
    </OutboundLink>
  </StyledHeroSection>
)

export default HeroSection
