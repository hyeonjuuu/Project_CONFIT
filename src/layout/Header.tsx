import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

function Header() {
  // const { locationPath } = useLocationStore()

  return (
    <HeaderContainer>
      <MenuButton>Home</MenuButton>
      <MenuButton>Search</MenuButton>
      <MenuButton>Review</MenuButton>
      <MenuButton>Sign in</MenuButton>
      <Link to="/joinpage">
        <MenuButton>Join</MenuButton>
      </Link>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  height: 72px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`
const fillcolor = keyframes`
  0% {
    background-position: 0 0%;
  }
  100% {
    background-position: 0 100%;
  }
`

const MenuButton = styled.button`
  border: none;
  box-sizing: border-box;
  background: linear-gradient(to bottom, transparent 50%, #aaeec4 50%);
  background-size: 100% 200%;
  transition: all 0.5s;
  &:hover {
    animation: ${fillcolor} 0.5s forwards;
  }
`
