import React, { useContext, useState } from 'react'
import emailjs from '@emailjs/browser';
import {useRef} from 'react';
import './Contact.css';
import {themeContext} from '../../Context.js';
const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done , setDone] =useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mb3fahe', 'template_myclmia', form.current, 'Hvijno_Y83X6TrIVI')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className='contact-form' id="Contact">
     <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

           {/* right  */}
           <div className='c-right'>
               <form ref={form} onSubmit={sendEmail}>
                   <input type='text' name='user_name' className='user' placeholder='name'/>
                   <input type='email' name='user_email' className='user' placeholder='email'/>
                   <textarea name="message" className='user' placeholder='Message'/>
                   <input type="submit" value="Send" className='button'/>
                   <span>{done && "Thanks for contacting me!"}</span>
                   <div className='blur c-blur1' style={{background:"var(--purple)"}}>

                   </div>
               </form>
           </div>
      </div>
  )
}

export default Contact