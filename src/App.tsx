import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './../routes'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App
