
import React, {Suspense, lazy} from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const HeroSection = lazy(() => import('../components/HeroSection'));
const ValueProps = lazy(() => import('../components/ValueProps'));
const PopularCategories = lazy(() => import('../components/PopularCategories'));
const FeaturedCourses = lazy(() => import('../components/FeaturedCourses'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const NewsletterSignup = lazy(() => import('../components/NewsletterSignup'));


const Home = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <main>
        <HeroSection />
        <ValueProps />
        <PopularCategories />
        <FeaturedCourses />
        <Testimonials />
        <NewsletterSignup />
      </main>
    </Suspense>
  )
}

export default Home