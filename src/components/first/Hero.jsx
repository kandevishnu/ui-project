import React from 'react'
import Navbar from './Navbar'
import MainArea from './MainArea'
import Footer from './Footer'

const Hero = () => {
  return (
    <div className='bg-black border-b-2 rounded-b-4xl h-fit w-full'> 
      <Navbar />
      <MainArea />
      <Footer />
    </div>
  )
}

export default Hero
