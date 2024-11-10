import React from 'react'
import AboutSlide from './AboutSlide'

const AboutMe = () => {
  return (
    <div id='about' className="bg-blue-800 pt-32 pb-20">
      <div className='w-4/5 mx-auto flex flex-col lg:flex-row items-center justify-center'>
        <div className='w-1/3'>
          <img src="sumon-1.png" alt="sumon" className='w-44'/>
        </div>
        <div className='w-2/3'>
          <h1 className='text-white text-3xl'>Md.Sumon Mia</h1>
          <AboutSlide />
          <div className='flex space-x-7 mt-5'>
            <button className='btn border-0 hover:bg-blue-600 hover:text-white'>Download CV</button>
            <button className='btn border-0 hover:bg-blue-600 hover:text-white'>Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
