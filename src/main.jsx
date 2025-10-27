import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import LoadingSpinner from './components/LoadingSpinner';
import Layout from './Layout';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="courses" element={<Courses />} />
      <Route path="courses/:id" element={<CourseDetails />} />
      <Route path='privacy' element={<PrivacyPolicy />} />
      <Route path="terms" element={<TermsAndConditions />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
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
