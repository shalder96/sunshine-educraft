import React from 'react'
import {props} from '../data/data'


const ValueProps = () => {
  return (
    <section className="text-center bg-gray-200 py-14">
      <h2 className="mb-8 text-3xl font-semibold text-green-800">Why EduCraft?</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {props.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl">
              <Icon className="w-10 h-10 mx-auto mb-4 text-blue-600" />
              <h3 className="mb-2 text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default ValueProps