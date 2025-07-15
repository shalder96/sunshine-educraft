import React from 'react'

const Testimonials = () => {
  return (
    <section className="py-16 text-center bg-green-50">
      <h2 className="mb-8 text-3xl font-semibold text-green-800">What Our Learners Say</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white border rounded-lg shadow-md">
          <p className="italic text-gray-700">“EduCraft helped me land my dream job!”</p>
          <p className="mt-2 font-bold text-green-700">– Ananya</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-md">
          <p className="italic text-gray-700">“The instructors are amazing. Highly recommend.”</p>
          <p className="mt-2 font-bold text-green-700">– Raj</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-md">
          <p className="italic text-gray-700">“Very user-friendly platform and great support.”</p>
          <p className="mt-2 font-bold text-green-700">– Priya</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials