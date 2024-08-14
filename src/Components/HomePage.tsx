import React from 'react'
import Header from './Header'
import Social from './Social'
import Mail from './Mail'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Skills from './Skills'
const Homepage = () => {
  return (
    <div>
        <Header />
        <About />
        <Projects/>
        <Social />
        <Mail />
        
        <Skills/> 
        <Experience/>

    </div>
  )
}

export default Homepage