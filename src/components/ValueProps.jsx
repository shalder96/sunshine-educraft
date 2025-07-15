import React from 'react'

const props = [
  { title: 'Expert Instructors', desc: 'Top-rated educators from the industry' },
  { title: 'Lifetime Access', desc: 'Learn at your own pace forever' },
  { title: 'Certification', desc: 'Get certified and boost your career' }
];

const ValueProps = () => {
  return (
    <section className="text-center bg-white py-14">
      <h2 className="mb-8 text-3xl font-semibold text-green-800">Why EduCraft?</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {props.map((item, idx) => (
          <div key={idx} className="p-6 border shadow-sm rounded-xl">
            <h4 className="text-xl font-bold text-green-700">{item.title}</h4>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ValueProps