import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Animation from './Animation'

const Home = () => {
  return (
    <div id="home">
        <Navbar/>
        <About/>
        <Animation/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home