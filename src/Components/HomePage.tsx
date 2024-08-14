import React from 'react'
import Header from './Header'
import Social from './Social'
import Mail from './Mail'
import About from './About'
import Projects from './Projects'
const Homepage = () => {
  return (
    <div>
        <Header />
        <About />
        <Projects/>
        <Social />
        <Mail />
        

    </div>
  )
}

export default Homepage