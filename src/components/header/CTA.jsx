import React from 'react'
import CV from '../../assets/Pavithradevi M-1.9years-intern.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#about" className='btn btn-primary'>About me</a>
    </div>
  )
}

export default CTA