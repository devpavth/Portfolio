import React, { useState, useEffect } from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials';
import { FaMouse } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const texts = [
    "Frontend",
    "Backend",
    "Python",
    "Tech Savvy",
    "Java",
    "MySQL",
    "Responsive Design",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [letterIndex, setLetterIndex] = useState(0);


  // Toggle the dark mode state
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply the dark mode class to the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Typing effect logic
  useEffect(() => {
    const currentWord = texts[currentTextIndex];
    if (letterIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText => currentText + currentWord[letterIndex]);
        setLetterIndex(prevIndex => prevIndex + 1);
      }, 150); // Adjust typing speed here
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setLetterIndex(0);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000); // Delay before changing to the next word
      return () => clearTimeout(timeout);
    }
  }, [letterIndex, currentTextIndex, texts]);

  return (
    <>
      <div className="nav-container">
        <a href="#" className="nav__logo">Pavithradevi</a>
        {darkMode ? (
          <MdOutlineLightMode className="nav__icon" onClick={toggleDarkMode} />
        ) : (
          <MdOutlineDarkMode className="nav__icon" onClick={toggleDarkMode} />
        )}
      </div>
      <header id="home">
          <div className="container header__container">
              <h5>Hello I'm</h5>
              <h1>Pavithradevi</h1>
              <h5 className="text-light">
                Aspiring Developer | <span className="typing-text">{displayedText}</span>
              </h5>
              <CTA />
              <HeaderSocial />

              <div className='me'>
                  <img src={ME} alt="me" />
              </div>

              <a href="#about" className='scroll__down'><FaMouse />Scroll Down</a>
          </div>
      </header>
    </>
  )
}

export default Header