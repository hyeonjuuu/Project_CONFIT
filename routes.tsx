import React from 'react'
import { lazy } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

const RootLayout: React.LazyExoticComponent<() => React.JSX.Element> = lazy(
  () => import('./src/pages/RootLayout')
)
const MainPage: React.LazyExoticComponent<() => React.JSX.Element> = lazy(
  () => import('./src/pages/MainPage')
)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />} />
    </Route>
  )
)

export default router
