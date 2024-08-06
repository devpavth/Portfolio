import React from 'react'
import './footer.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Pavithradevi</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Projects</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/pavithradevi-m2441/"><FaLinkedinIn /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaXTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2024, Pavithradevi. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer