import React from 'react'
import Realestate from '../assets/realestate.jpeg'
import Social from '../assets/social.png'
import Digital from '../assets/digital.jpg'
import portfolio from '../assets/portfo.png'


const Portfolio = () => {
  return (
    <>
       <div className='portfolio' id='Portfolio'>
      <h1>Our Work PortFolio</h1>
      </div> 
      {/* <div className="container">
      <div className="text">Left Side Text</div>
      <div className="image"> Fixed image
        <img src={portfolio} alt="Fixed Image" />
      </div>
    </div> */}


    <div className="container">
   
      {/* <div className="item1" >
      {/* <h1>Our Work PortFolio</h1> */}
        
      {/* </div> */} 
      <div className="item">
        <img src={portfolio} alt="" />
      </div>
      <div className="item">
        <h1>
        Our Digital Marketing
 Agency Portfolio:
 Real Estate, Startups,
 and Freelancers
        </h1>
        
        <h3>Elevate your online presence with our diverse expertise in digital marketing.
 From real estate to startups and freelancers, we deliver tailored solutions to
 help you thrive in the digital landscape.</h3>
 <button> View your work</button>
      </div>
     
     
     
     
     
    </div>

 
      
  </>
  )
}

export default Portfolio
