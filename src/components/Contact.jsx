// import React,{useState} from 'react'
// import { FaWhatsapp, FaInstagram,  FaLinkedin,FaTelegram } from 'react-icons/fa';

// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';


// const Contact = () => {


// const [email, setEmail] = useState('');
// const [feedback, setFeedback] = useState('');

// const handleEmailChange = (e) => {
//   setEmail(e.target.value);
// };

// const handleFeedbackChange = (e) => {
//   setFeedback(e.target.value);
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // You can implement your feedback submission logic here
//   console.log('Email:', email);
//   console.log('Feedback:', feedback);
// };


// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };


// const StyledIconContainer = (props) => {
//   const { value, ...other } = props;
//   return (
//     <span {...other}>
//       <StarIcon style={{ color: value <= props.hover ? 'gold' : 'grey' }} fontSize="inherit" />
//     </span>
//   );
// };

// function getLabelText(value) {
//   return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// }

//   const [value, setValue] = React.useState(2);
//   const [hover, setHover] = React.useState(-1);



// return (
//   <div className='cont' id='Contact' >
//     <h2 className='contact'>Feedback Form</h2>
//     <form  action="https://formspree.io/f/mbjnbvoy"
//   method="POST" onSubmit={handleSubmit}>
//       <div >
//         <label htmlFor="email">Email:</label>
//         <textarea
//           type="email"
//           id="email"
//           value={email}
//           onChange={handleEmailChange}
//           required
//         />
//       </div>
//       <div  >
//         <label htmlFor="feedback">Feedback:</label>
//         <textarea
//           id="feedback"
//           value={feedback}
//           onChange={handleFeedbackChange}
//           required
//         />

// <Box
//       sx={{
//         width: 200,
//         display: 'flex',
//         alignItems: 'center',
//         color:'Gold',
//         padding:'15px',
//       }}
//     >
//       <Rating
//         name="hover-feedback"
//         value={value}
//         precision={0.5}
//         getLabelText={getLabelText}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         onChangeActive={(event, newHover) => {
//           setHover(newHover);
//         }}

//         IconContainerComponent={(props) => (
//           <StyledIconContainer hover={hover} {...props} />
//         )}

//         emptyIcon={<StarIcon style={{ opacity:0.55 }} fontSize="inherit" />}
//       />
//       {value !== null && (
//         <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
//       )}
//     </Box>
        
//       </div>
    
//       <button type="submit">Submit</button>

//     </form>
//     <div className='icon-container'>
//       <p>Send feedback via:</p>
//       <a href="https://wa.me/+918884491050" target="_blank" rel="noopener noreferrer">
//         <FaWhatsapp size={32} style={{ marginRight: '10px' }} className='icon whatsapp' />
//       </a>
//       <a href="https://www.instagram.com/enigmaheights/" target="_blank" rel="noopener noreferrer">
//         <FaInstagram size={32} style={{ marginRight: '10px' }} className='icon instagram' />
//       </a>
//       <a href="https://www.linkedin.com/in/gaurav-arya-751773305/" target="_blank" rel="noopener noreferrer">
//        <FaLinkedin size={32} style={{ marginRight: '10px' }} className="icon linkedin"  />
//   </a>
//       <a href="https://t.me/gauravaryaEnigma" target="_blank" rel="noopener noreferrer">
//        <FaTelegram size={32} style={{ marginRight: '10px' }} className="icon linkedin"  />
//   </a>
//     </div>
//   </div>
//   )
// }

// export default Contact


import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [state, handleSubmit] = useForm("mbjnbvoy");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor',
    2.5: 'Ok',
    3: 'Ok',
    3.5: 'Good',
    4: 'Good',
    4.5: 'Excellent',
    5: 'Excellent',
  };

  const StyledIconContainer = (props) => {
    const { value, ...other } = props;
    return (
      <span {...other}>
        <StarIcon style={{ color: value <= props.hover ? 'gold' : 'grey' }} fontSize="inherit" />
      </span>
    );
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

  if (state.succeeded) {
    return <p>Thanks for your feedback!</p>;
  }

  return (
    <div className='cont' id='Contact'>
      <h2 className='contact'>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <textarea
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            required
          />
          <ValidationError prefix="Feedback" field="feedback" errors={state.errors} />
        </div>

        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
            color: 'Gold',
            padding: '15px',
          }}
        >
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(e, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(e, newHover) => {
              setHover(newHover);
            }}
            IconContainerComponent={(props) => (
              <StyledIconContainer hover={hover} {...props} />
            )}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>

        <button type="submit" disabled={state.submitting}>Submit</button>
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
          <FaLinkedin size={32} style={{ marginRight: '10px' }} className="icon linkedin" />
        </a>
        <a href="https://t.me/gauravaryaEnigma" target="_blank" rel="noopener noreferrer">
          <FaTelegram size={32} style={{ marginRight: '10px' }} className="icon linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
