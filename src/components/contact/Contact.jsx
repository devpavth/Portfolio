import React from 'react'
import './contact.css'
import { BiMailSend } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  // Log environment variables to ensure they are loaded correctly
  // console.log(
  //   'EmailJS Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID,
  //   'EmailJS Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  //   'EmailJS Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  // );

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...');
        },
      );
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option bg-variant '>
            <BiMailSend className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>paviguna116@gmail.com</h5>
            <a href="mailto:paviguna116@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option bg-variant '>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>72xxxxxxxx</h5>
            <a href="https://api.whatsapp.com/send?phone=911234567890&text=Hello, need more information!" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option bg-variant '>
            <FaLinkedinIn className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Pavithradevi</h5>
            <a href="https://www.linkedin.com/in/pavithradevi-m2441/" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <input type="email" name="email" placeholder='Enter your email' required/>
          <textarea name="message" rows="7" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message <GrSend className='message-icon'/></button>
        </form>
      </div>
    </section>
  )
}

export default Contact