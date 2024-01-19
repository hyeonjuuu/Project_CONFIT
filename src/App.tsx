import { Suspense } from 'react'
// import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import router from './../routes'

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App
