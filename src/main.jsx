import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import LoadingSpinner from './components/LoadingSpinner'
import Layout from './Layout'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
const Home = lazy(() => import("./pages/Home"))
const Footer = lazy(() => import("./components/Footer"))


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='privacy' element={<PrivacyPolicy />} />
      <Route path="terms" element={<TermsAndConditions />} />
      <Route path='footer' element={<Footer />} />
      <Route path="*" element={<h1 className='h-screen mt-12 text-center'>404 Not Found</h1>} />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<LoadingSpinner />} >
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
