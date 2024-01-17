// import GlobalStyle from '@/style/GlobalStyle'
import GlobalStyle from '@/style/GlobalStyle'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
