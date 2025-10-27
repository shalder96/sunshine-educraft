import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section 
      className="relative px-6 py-16 bg-fixed bg-center bg-no-repeat bg-cover min-h-96"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/21696/pexels-photo.jpg")`,
      }}
    >
      {/* overlay  */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gray-900/80"></div>
      <div className='relative z-10 flex flex-col items-center justify-center p-6'>
        <h1 className="mb-4 text-2xl font-bold text-white md:text-6xl ">Level Up Your Skills Online</h1>
        <p className="mb-6 text-xl text-gray-400 md:text-2xl">Join thousands of learners on EduCraft</p>
        <button 
          onClick={() => navigate('/courses')}
          className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700">
          Start Learning Today
        </button>
      </div>
    </section>
  )
}

export default HeroSection