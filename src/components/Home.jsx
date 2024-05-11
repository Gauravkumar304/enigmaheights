import React from 'react'
import Logo from '../assets/logo.jpg'
import Bgvideo from '../assets/bgvideo.mp4'
import { Link } from 'react-router-dom'


const Home = () => {

   return (
    <div>
        <div className='Home'>
        <video autoPlay loop muted className='background-video'>
        <source src={Bgvideo} type='video/mp4' />
      </video> 

      <div className='background-image '>
      {/* <img src={background}  alt="Background " /> */}
      </div>
    <div className='main'>
      <img src={Logo} alt='logo'/>
      <h1>EnigmaHeights</h1>
      <p>Unlock your business's full potential with our cutting-edge digital marketing solutions.</p>
      </div>
      <div className='button'>
      {/* <Link to="/Login"><button className='btn'>Get Started</button></Link> */}
      {/* <button className='btn'><a href="/Login" >Get Started</a></button> */}
      {/* <Link className='btn' to="/login" role='button'>Login</Link> */}
      {/* <Link className='btn' to="/signup "role='button '>Signup</Link> */}
     
      {/* <button className='btn' onClick={()=>{setSignInActive(prev=>!prev)}}> Get Started </button>  className abc by me */}
      {/* <button className='btn' onClick={()=>{setSignUpActive(prev=>!prev)}}> Sign Up </button>  className abc by me */}
         
      {/* <button className='btn' > Get Started </button>  */}
      <Link   to={'/signin'} className='btn'>Get Started</Link>
      {/* <button className='btn'>Learn more</button> */}
        
    </div>
      </div>
    </div>
  

  )
}

export default Home
