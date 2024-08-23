import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/pavithradevi-m2441/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/devpavth" target="_blank"><FaGithub/></a>
        <a href="https://whatsapp.com" target="_blank"><FaSquareWhatsapp /></a>
    </div>
  )
}

export default HeaderSocials