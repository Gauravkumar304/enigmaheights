import React from 'react'
import testi from '../assets/Testimonial.png'

const Testimonials = () => {
  return (
    <div>
      <div className='testi' id='Testimonials'>
    <h1> Client Testimonials</h1>
    </div>
    <div className='hi' >
       
        <div className ='left'>
            <h3> Hear what our clients have to say</h3>
            <p> "EnigmaHeights helped us achieve a 40% increase in website traffic and a 
               25% boost in lead generation. Highly recommended!"</p>
               <p> "The team at EnigmaHeights is truly exceptional. They delivered a 
comprehensive digital strategy that transformed our online presence."</p>
               <p> "Working with EnigmaHeights has been a game-changer for our business. 
Their expertise and dedication are unparalleled."</p>


        </div>
        <div className='right'>
            <img src={testi} alt='test'/>

        </div>
        </div >
      
    </div>
  )
}

export default Testimonials
