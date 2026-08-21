import React from 'react'
import Hero from './components/first/Hero'
import AboutUs from './components/second/AboutUs'
import Features from './components/third/Features'
import Portfolio from './components/fourth/Portfolio'
import WhyWe from './components/fifth/WhyWe'
import Footer from './components/sixth/Footer'

const App = () => {
  return (
    <div className='font-[Space_Grotesk]'>
      <Hero />
      <AboutUs />
      <Features />
      <Portfolio />
      <WhyWe />
      <Footer />
    </div>
  )
}

export default App
