import React from 'react'
import Header from './Header'
import Social from './Social'
import Mail from './Mail'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
const Homepage = () => {
  return (
    <div>
        <Header />
        <About />
        <Projects/>
        <Social />
        <Mail />
        <Experience/>
        

    </div>
  )
}

export default Homepage