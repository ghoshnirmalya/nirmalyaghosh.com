import styled from 'styled-components'

const StyledProfileCard = styled.div`
  display: flex;
  align-items: center;

  > .right-content {
    margin-left: 20px;

    > .name {
      font-size: 30px;
      color: #0f0f0f;
    }

    > .designation {
      margin-bottom: 0;
    }
  }
`

export default StyledProfileCard
