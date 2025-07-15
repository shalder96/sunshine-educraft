import React from 'react'

const NewsletterSignup = () => {
  return (
    <section className="py-16 text-center bg-white">
      <h2 className="mb-4 text-3xl font-semibold text-green-800">Get Weekly Tips & Deals</h2>
      <p className="mb-6 text-gray-600">Sign up for exclusive updates and course discounts</p>
      <form className="flex flex-col justify-center max-w-xl gap-4 mx-auto md:flex-row">
        <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md md:w-2/3" />
        <button type="submit" className="px-6 py-2 text-white bg-green-700 rounded-md hover:bg-green-800">
          Subscribe
        </button>
      </form>
    </section>
  )
}

export default NewsletterSignup