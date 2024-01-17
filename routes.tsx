import React from 'react'
import { lazy } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

const App: React.LazyExoticComponent<() => React.JSX.Element> = lazy(
  () => import('./src/App')
)

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
)

export default router
