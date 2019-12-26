import * as React from 'react'
import styled from '@emotion/styled'

const StyledContent = styled.main`
  max-width: 700px;
  padding: 200px 0;
  width: 100%;

  section {
    &:not(:first-of-type) {
      padding-top: 200px;
    }

    > .section-title {
      font-size: 30px;
      margin: 0 0 50px;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    padding: 200px 20px;

    section {
      &:not(:last-child) {
        margin-bottom: 100px;
      }

      > .section-title {
        font-size: 30px;
        text-align: center;
      }
    }
  }
`

const ContentMain: React.FC = ({ children }) => <StyledContent>{children}</StyledContent>

export default ContentMain
