import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const courses = [
  { id: 1, title: 'UI/UX Design Basics', instructor: 'Jane Doe', price: '₹999' },
  { id: 2, title: 'React for Beginners', instructor: 'John Smith', price: '₹799' },
  { id: 3, title: 'Digital Marketing Mastery', instructor: 'Samantha', price: '₹1199' }
];

const FeaturedCourses = () => {
  return (
    <section className="py-16 text-center bg-white">
      <h2 className="mb-8 text-3xl font-semibold text-green-800">Featured Courses</h2>
      <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{768: {slidesPerView: 2}, 1024: {slidesPerView: 3}}}>
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="p-6 text-left border shadow-sm rounded-xl">
              <h3 className="text-lg font-bold text-green-700">{course.title}</h3>
              <p className="text-sm text-gray-600">By {course.instructor}</p>
              <p className="mt-2 font-semibold text-green-600">{course.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default FeaturedCourses