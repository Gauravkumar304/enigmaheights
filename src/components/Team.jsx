import React from 'react'
import Gaurav from '../assets/Gaurav.jpg'
import Varun from '../assets/Varun.jpg'
import Pushakr from '../assets/pushkar.jpg'

const Team = () => {
  return (
    <div>
        <div className='team' id='Team'>
        <h1> Meet The Team</h1>
        </div>
       
        <div className='Tea'>
        <div className='team1'>
        <img src={Gaurav} alt='profile'></img>
            <h3>Name:  Gaurav Arya </h3>
            <h3>Position: Founder & CEO  </h3>
        </div>
        <div className='team1'>
        <img src={Pushakr} alt='profile'></img>
            <h3>Name:  Pushakr Kumar </h3>
            <h3>Position: Co-Founder </h3>
        </div>
        <div className='team1'>
            <img src={Varun} alt='profile'></img>
            <h3>Name: Varun Williams </h3>
            <h3>Position: LeadGen&data specialist </h3>
        </div>
        
        </div>
      
    </div>
  )
}

export default Team
