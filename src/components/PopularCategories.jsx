import React from 'react'

const categories = ['Design', 'Development', 'Marketing', 'Business', 'Photography'];

const PopularCategories = () => {
  return (
    <section className="text-center py-14 bg-green-50">
      <h2 className="mb-8 text-3xl font-semibold text-green-800">Popular Categories</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat, idx) => (
          <button key={idx} className="px-5 py-2 text-green-700 bg-white border border-green-300 rounded-full shadow-sm hover:bg-green-100">
            {cat}
          </button>
        ))}
      </div>
    </section>
  )
}

export default PopularCategories