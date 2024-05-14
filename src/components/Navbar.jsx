import React from 'react'
import Logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div>
      
<div className="navbar">
<ul className="navbar-nav">

<img src={Logo} alt='logo'/>


 <li className="nav-item">
    <a href="#" className="nav-link">Home</a>
  </li> 
<li className="nav-item">
    <a href="#About" className="nav-link">About</a>
  </li>
<li className="nav-item">
    <a href="#Services" className="nav-link">Services</a>
  </li>
{/* <li className="nav-item">
    <a href="#Marketing" className="nav-link">Marketing</a>
  </li> */}
<li className="nav-item">
    <a href="#Testimonials" className="nav-link">Testimonials</a>
  </li>
<li className="nav-item">
    <a href="#Portfolio" className="nav-link">Portfolio</a>
  </li>
<li className="nav-item">
    <a href="#Team" className="nav-link">Team</a>
  </li>
<li className="nav-item">
    <a href="#Contact" className="nav-link">Contact</a>
  </li>


  
  {/* <button className='btn btn' type='submit'>Login</button>
      <button className='btn btn' type='submit'>Signup</button> */}
{/* 

      <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Services" className="nav-link">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/Marketing" className="nav-link">Marketing</Link>
        </li>
        <li className="nav-item">
          <Link to="/Testimonials" className="nav-link">Testimonials</Link>
        </li>
        <li className="nav-item">
          <Link to="/Portfolio" className="nav-link">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/Team" className="nav-link">Team</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li> */}



</ul>


</div>  

      
    </div>
  )
}

export default Navbar
