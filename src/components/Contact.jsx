import React,{useState} from 'react'
import { FaWhatsapp, FaInstagram,  FaLinkedin,FaTelegram } from 'react-icons/fa';


const Contact = () => {


const [email, setEmail] = useState('');
const [feedback, setFeedback] = useState('');

const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

const handleFeedbackChange = (e) => {
  setFeedback(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  // You can implement your feedback submission logic here
  console.log('Email:', email);
  console.log('Feedback:', feedback);
};

return (
  <div className='cont' id='Contact' >
    <h2 className='contact'>Feedback Form</h2>
    <form onSubmit={handleSubmit}>
      <div >
        <label htmlFor="email">Email:</label>
        <textarea
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div  >
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          required
        />
        
      </div>
      <button type="submit">Submit</button>
    </form>
    <div className='icon-container'>
      <p>Send feedback via:</p>
      <a href="https://wa.me/+918884491050" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={32} style={{ marginRight: '10px' }} className='icon whatsapp' />
      </a>
      <a href="https://www.instagram.com/enigmaheights/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={32} style={{ marginRight: '10px' }} className='icon instagram' />
      </a>
      <a href="https://www.linkedin.com/in/gaurav-arya-751773305/" target="_blank" rel="noopener noreferrer">
       <FaLinkedin size={32} style={{ marginRight: '10px' }} className="icon linkedin"  />
  </a>
      <a href="https://t.me/gauravaryaEnigma" target="_blank" rel="noopener noreferrer">
       <FaTelegram size={32} style={{ marginRight: '10px' }} className="icon linkedin"  />
  </a>
    </div>
  </div>
  )
}

export default Contact
