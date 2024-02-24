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
const SignupPage: React.LazyExoticComponent<() => React.JSX.Element> = lazy(
  () => import('./src/pages/SignupPage')
)
const SigninPage: React.LazyExoticComponent<() => React.JSX.Element> = lazy(
  () => import('./src/pages/SigninPage')
)
const WritingPage: React.LazyExoticComponent<() => React.JSX.Element> = lazy(
  () => import('./src/pages/ReviewWriting')
)
const ReviewPage: React.LazyExoticComponent<() => React.JSX.Element> = lazy(
  () => import('./src/pages/ReviewPage')
)
const DetailPage: React.LazyExoticComponent<() => React.JSX.Element> = lazy(
  () => import('./src/pages/DetailPage')
)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/writing" element={<WritingPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/detail/:type/:id" element={<DetailPage />} />
      {/* <Route path="/detail" element={<DetailPage />} /> */}
    </Route>
  )
)

export default router
