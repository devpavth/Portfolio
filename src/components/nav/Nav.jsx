import React, { useState, useEffect } from 'react';
import './nav.css';
import { BiHomeAlt } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const sections = document.querySelectorAll('section, header');
    const options = {
      root: null,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><BiHomeAlt /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineHomeRepairService /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav