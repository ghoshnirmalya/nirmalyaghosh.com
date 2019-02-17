import styled from 'styled-components'

const StyledProfileCard = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;

  > .right-content {
    margin-left: 20px;

    > .name {
      font-size: 30px;
      color: #0f0f0f;
      font-weight: 600;
    }

    > .designation {
      font-family: 'Helvetica', serif;
      margin: -10px 0 0 0;
      display: flex;
      align-items: center;

      > a {
        margin: -20px 0 0 5px;
      }
    }
  }
`

export default StyledProfileCard
