import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from "react-icons/fa6";
import { BiBriefcaseAlt } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";

const About = () => {
  return (
    <section id='about'>
      <h5>My Intro</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card bg-variant '>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card bg-variant'>
              <BiBriefcaseAlt className='about__icon'/>
              <h5>Completed</h5>
              <small>4+ Projects</small>
            </article>
            <article className='about__card bg-variant'>
              <BiSupport className='about__icon'/>
              <h5>Support</h5>
              <small>Online 24/7</small>
            </article>
          </div>
          <p>
            I am an aspiring developer passionate about programming and developing websites. 
          </p>
          <p>
            My interests lie in Full Stack Software Development and Web Development. I enjoy creating 
          dynamic and responsive web applications that provide a seamless user experience. 
          </p>
          {/* <p>
          I am eager to apply my skills and knowledge to real-world projects and contribute to innovative solutions. My goal is to become a 
          proficient full-stack developer and make a meaningful impact in the tech industry.
          </p> */}
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About