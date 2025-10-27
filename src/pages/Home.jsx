
import React, {Suspense, lazy} from 'react';
import LoadingSpinner from '../components/LoadingSpinner';


const FeaturedCourses = lazy(() => import('../components/FeaturedCourses'));
const HeroSection = lazy(() => import('../components/HeroSection'));
const ValueProps = lazy(() => import('../components/ValueProps'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const NewsletterSignup = lazy(() => import('../components/NewsletterSignup'));


const Home = () => {



  return (
    <Suspense fallback={<LoadingSpinner />}>
      <main>
        <HeroSection />
        <ValueProps />
        <FeaturedCourses />
        <Testimonials />
        <NewsletterSignup />
      </main>
    </Suspense>
  )
}

export default Home