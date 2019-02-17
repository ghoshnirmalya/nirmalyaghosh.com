import styled from 'styled-components'

const StyledProfileCard = styled.div`
  display: flex;
  margin-bottom: 50px;

  > .content {
    width: 100%;
    padding: 30px;
    text-decoration: none;
    color: #0f0f0f;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
      background-color: #fff;
      border-radius: 5px;

      > .title {
        color: #0366d6;
      }
    }

    > .title {
      font-size: 22px;
      color: #0f0f0f;
    }

    > .date {
      font-family: 'Helvetica', sans-serif;
      font-size: 14px;
      margin-bottom: 0;
    }
  }
`

export default StyledProfileCard
