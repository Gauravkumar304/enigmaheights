import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import { Link } from 'react-router-dom'
import Services from './components/Services'
import Marketing from './components/Marketing'
import Testimonials from './components/Testimonials'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import Contact from './components/Contact'
import { auth } from './components/firebase'

const App = () => {

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      {/* <Marketing/> */}
      <Testimonials/>
      <Portfolio/>
      <Team/>
      <Contact/>
     
      

    </div>
  )
}

export default App
