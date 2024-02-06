import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '@/supabase/supabase'
import { useUserSessionStore } from '@/store/useUserSessionStore'

function Header() {
  const { userSession, setUserSession } = useUserSessionStore()

  useEffect(() => {
    const SignSession = async () => {
      const { data, error } = await supabase.auth.getSession()

      try {
        console.log(data.session)
        if (data && data.session) {
          setUserSession(data)
        } else {
          setUserSession({ session: null })
        }
      } catch (error) {
        console.error(error)
      }
    }

    SignSession()
  }, [])

  const userName = userSession?.user.email?.split('@')[0]
  console.log('ssession', userSession)
  console.log(userName)

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    console.error(error)

    window.location.reload()
  }
  console.log('ssession', userSession)

  return (
    <HeaderContainer>
      <MenuButton>Home</MenuButton>
      <MenuButton>Search</MenuButton>
      <MenuButton>Review</MenuButton>
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
            <MenuButton>{`${userName} 님`}</MenuButton>
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
