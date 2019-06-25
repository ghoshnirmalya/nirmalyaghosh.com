import styled from 'styled-components'

const StyledProjectCard = styled.div`
  display: flex;
  height: 250px;
  margin-bottom: 50px;

  > .content {
    width: 100%;
    padding: 30px;
    text-decoration: none;
    color: #0f0f0f;
    box-shadow: #fff 0 -15px, rgba(0, 0, 0, 0.1) 0 0 15px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    margin: 30px;

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
