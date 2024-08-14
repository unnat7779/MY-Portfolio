import React from 'react'
import Header from './Header'
import Social from './Social'
import Mail from './Mail'
import Footer from "./Footer";
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'
import { Loader } from "./Loader";
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
        <Contact/>
        <Footer/>
        {/* <Loader/> */}

    </div>
  )
}

export default Homepage