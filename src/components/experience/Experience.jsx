import React from 'react'
import './experience.css';
import { IoCalendarClearOutline } from "react-icons/io5";

const Experience = () => {
  return (
    <section id='experience' className='qualification section'>
      <h5>My Personal Journey</h5>
      <h2>Experience</h2>

      <div className='qualification__container container'>
        {/* <div className="qualification__tabs">
          <div className='qualification__button button--flex'>

          </div>
        </div> */}
        <div className='qualification__sections'>
          <div className='qualification__content'>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  J.P. Morgan - Software Engineering Job Simulation
                </h3>
                <span className='qualification__subtitle'>
                  Forage · Internship | Remote
                </span>
                <div className='qualification__calendar'>
                  <IoCalendarClearOutline className='qualification__calendar-icon'/> 2023 - 2024
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>
                  Developer Virtual Experience Program
                </h3>
                <span className='qualification__subtitle'>
                  Forage · Internship | Remote
                </span>
                <div className='qualification__calendar'>
                  <IoCalendarClearOutline className='qualification__calendar-icon'/> 2022 - 2023
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience