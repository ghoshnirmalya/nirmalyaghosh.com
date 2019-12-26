import * as React from 'react'
import styled from '@emotion/styled'

const StyledSection = styled.section`
  > .container {
    display: flex;
    flex-wrap: wrap;

    > .projects-block {
      width: 48%;
      box-shadow: #020c1bb3 0px 10px 30px -15px;
      background-color: #1a2f4e;
      size: 18px;
      padding: 25px;
      border-radius: 4px;
      margin-bottom: 25px;
      position: relative;
      height: 200px;

      &:not(:nth-of-type(2n)) {
        margin-right: 25px;
      }

      @media (max-width: 768px) {
        width: 100%;

        &:not(:nth-of-type(2n)) {
          margin-right: 0;
        }
      }

      > .title {
        color: #f1f1f1;
        font-size: 20px;
        font-weight: bold;
        margin: 0;
        margin-bottom: 20px;
      }

      > .description {
        color: hsla(0,0%,100%,0.7);
        font-size: 14px;
        margin: 0;
        margin-bottom: 20px;
        line-height: 20px;
      }

      > .links {
        position: absolute;
        bottom: 25px;

        > .url {
          &:not(:last-child) {
            margin-right: 25px;
          }
        }
      }
    }

    > .blogs-block {
      size: 18px;
      margin-bottom: 50px;

      > .title {
        color: #f1f1f1;
        font-size: 20px;
        font-weight: bold;
        margin: 0;
        margin-bottom: 20px;

        &:hover {
          color: #65cfff;
        }
      }

      > .description {
        color: hsla(0,0%,100%,0.7);
        font-size: 14px;
        margin: 0;
        margin-bottom: 20px;
        line-height: 20px;
      }

      > .date {
        color: #f1f1f1;
        font-size: 12px;
      }
    }
  }
`

interface SectionProps {
  title: string;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, id, children }) => (
  <StyledSection id={id}>
    <h2 className="section-title">{title}</h2>
    <div className="container">{children}</div>
  </StyledSection>
)

export default Section
