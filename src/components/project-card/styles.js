import styled from 'styled-components'

const StyledProjectCard = styled.div`
  display: flex;
  width: 350px;
  height: 200px;
  margin-bottom: 50px;

  &:not(:last-child) {
    margin-right: 50px;
  }

  > .content {
    width: 100%;
    padding: 30px;
    text-decoration: none;
    color: #0f0f0f;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    > .title {
      font-size: 22px;
      color: #0366d6;
    }

    > .description {
      font-family: 'Helvetica', sans-serif;
    }

    > .stars {
      color: #0062d91c;
      position: absolute;
      font-size: 80px;
      margin-bottom: 0;
      left: 40px;
      top: 80px;
    }
  }
`

export default StyledProjectCard
