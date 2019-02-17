import styled from 'styled-components'

const StyledNavbar = styled.nav`
  height: 150px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
  background: #fff;
  margin-bottom: 100px;
  position: fixed;
  width: 100%;
  margin-top: -200px;

  > .boxed-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .link {
      margin-left: 15px;
      text-decoration: none;
      font-size: 14px;

      &:hover {
        color: #0366d6;
      }
    }
  }
`

export default StyledNavbar
