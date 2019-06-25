import styled from 'styled-components'

const StyledProfileCard = styled.div`
  display: flex;

  > .content {
    width: 100%;
    padding: 0 30px 50px;
    text-decoration: none;
    color: #0f0f0f;
    border-radius: 5px;

    > .title {
      font-size: 22px;
      color: #0366d6;
    }

    > .date {
      font-family: 'Helvetica', sans-serif;
      margin-bottom: 0;
    }
  }
`

export default StyledProfileCard
