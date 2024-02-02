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
const JoinPage: React.LazyExoticComponent<() => React.JSX.Element> = lazy(
  () => import('./src/pages/JoinPage')
)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path="/joinpage" element={<JoinPage />} />
    </Route>
  )
)

export default router
