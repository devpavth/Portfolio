import React from 'react'
import CV from '../../assets/Pavithradevi-2yrs-accenture-morgan-internship.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#about" className='btn btn-primary'>About me</a>
    </div>
  )
}

export default CTA