import styled from 'styled-components'

const StyledProfileCard = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0;

  > .right-content {
    margin-left: 20px;

    > .name {
      font-size: 30px;
      color: #0f0f0f;
      font-weight: 600;
    }

    > .designation {
      font-family: 'Helvetica', serif;
      margin-top: 5px;
      display: flex;
      align-items: center;

      > a {
        color: #0f0f0f;
        text-decoration: none;
        margin-left: 5px;
        font-weight: 600;
      }
    }

    > .social-profiles {
      margin-top: 20px;

      .link {
        text-decoration: none;
        font-size: 14px;
        text-transform: uppercase;
        color: #0366d6;

        &:not(:first-child) {
          margin-left: 15px;
        }

        &:hover {
          color: #0366d6;
        }
      }
    }
  }
`

export default StyledProfileCard
