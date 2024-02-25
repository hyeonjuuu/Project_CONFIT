import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { supabase } from '@/supabase/supabase'
import { useUserSessionStore } from '@/store/useUserSessionStore'
import { UserCircleDiv } from '@/components/reviewPage/ReviewContents'

interface HaderProps {
  review?: string
  margin?: string
}

interface HeaderContainerProps {
  margin?: string
}

function Header({ review, margin }: HaderProps) {
  const { userSession, setUserSession } = useUserSessionStore()

  useEffect(() => {
    const SignSession = async () => {
      const { data } = await supabase.auth.getSession()

      try {
        if (data && data.session) {
          setUserSession(data)
        }
      } catch (error) {
        console.error(error)
      }
    }

    SignSession()
  }, [])

  const userName = userSession?.user.email?.split('@')[0]
  console.log('ssession', userSession)

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    console.error(error)

    window.location.reload()
  }
  console.log('ssession', userSession)

  return (
    <HeaderContainer margin={margin}>
      <Link to="/">
        <MenuButton>Home</MenuButton>
      </Link>
      <Link to="/search">
        <MenuButton>Search</MenuButton>
      </Link>

      {review === 'writing' ? (
        <Link to="/writing">
          <MenuButton>Writing</MenuButton>
        </Link>
      ) : (
        <Link to="/review">
          <MenuButton>Review</MenuButton>
        </Link>
      )}
      {userSession === null ? (
        <>
          <Link to="/signin">
            <MenuButton>Sign in</MenuButton>
          </Link>
          <Link to="/signup">
            <MenuButton>Sign up</MenuButton>
          </Link>
        </>
      ) : (
        <>
          {/* <Link to="/">
            <MenuButton>My Page</MenuButton>
          </Link> */}
          <Link to="/">
            <UserMenuButton>
              <UserCircleDiv />
              {`${userName} 님`}
            </UserMenuButton>
          </Link>
          <Link to="/">
            <MenuButton onClick={handleSignOut}>Sign out</MenuButton>
          </Link>
        </>
      )}
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div<HeaderContainerProps>`
  height: 72px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  margin: ${({ margin }) => margin};
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
const UserMenuButton = styled(MenuButton)`
  display: flex;
  gap: 4px;
`
