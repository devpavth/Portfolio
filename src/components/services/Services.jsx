import React, { useState } from 'react'
import './services.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section id='services' className='services section'>
      <h5 className='section__title'>My Services</h5>
      <h2 className='section__subtitle'>What I Offer</h2>

      <div className='services__container container grid'>
        <div className="services__content bg-variant ">
          <div>
            <h3 className='services__title'>Frontend <br/> Development </h3>
          </div>

          <span className='services__button' onClick={() => toggleTab(1)}>See More <FaArrowRightLong className='services__button-icon'/></span>
          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <IoClose className='services__modal-close' onClick={() => toggleTab(0)}/>
              <h3 className='services__modal-title'>Frontend Development</h3>
              <p className="services__modal-description">What I can provide at the frontend?</p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <p className='services__modal-info'><FaCheck className='services__modal-icon'/>Responsive Website Development.</p>
                </li>
                <li className='services__modal-service'>
                  <p className='services__modal-info'><FaCheck className='services__modal-icon'/>I develop 
                    the interactive user interface.</p>
                </li>
                <li className='services__modal-service'>
                  <p className='services__modal-info'><FaCheck className='services__modal-icon'/>Mobile-first design.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="services__content bg-variant ">
          <div>
            <h3 className='services__title'>Backend <br/> Development</h3>
          </div>

          <span className='services__button' onClick={() => toggleTab(2)}>See More <FaArrowRightLong className='services__button-icon'/></span>
          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <IoClose className='services__modal-close' onClick={() => toggleTab(0)}/>
              <h3 className='services__modal-title'>Backend Development</h3>
              <p className="services__modal-description">What I can provide at the backend?</p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <p className='services__modal-info'><FaCheck className='services__modal-icon'/>Python & Django Framework.</p>
                </li>
                <li className='services__modal-service'>
                  <p className='services__modal-info'><FaCheck className='services__modal-icon'/>Payment gateway integration.</p>
                </li>
                {/* <li className='services__modal-service'>
                  <p className='services__modal-info'><FaCheck />Mobile-first design.</p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services