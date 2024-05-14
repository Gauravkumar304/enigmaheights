import React from "react";
import about from "../assets/About.png";

const About = () => {
  return (
    <div>
      <div className="About" id="About">
        <div className="abt">
          <h1>About Us</h1>
        </div>
        <div className="abt-container">
          <div className="abthc">
          <p>"Welcome to Enigma Heights, your digital marketing partner. We specialize in unlocking the mysteries of online success for businesses worldwide. With a blend of creativity, strategy, and data-driven solutions, we elevate your brand to new heights in the digital landscape. Let's embark on a journey of discovery and growth together."</p>
          </div>
                </div>
       

       
        
          < div className="abt-contain">
          <img src={about} alt="About us " />
          <div className="abth">
            <h2>Innovative Approach</h2>
            <p>
              We combine creativity and data to craft unique digital strategies.
            </p>
          </div>
          <div className="abth">
            <h2>Proven Results</h2>
            <p> our work has helped business of all sizes their goals</p>
          </div>
          {/* <div className="abt-contain"> */}
          <div className="abth">
            <h2>Passionate Team</h2>
            <p>Our experts are dedicated to your success</p>
          </div>
          {/* </div> */}
        </div>


   



        

       
      </div>
    </div>
  );
};

export default About;
