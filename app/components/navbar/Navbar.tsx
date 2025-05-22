import React, { useState } from 'react'
import './Navbar.css'
import Logo from "../../../public/signaturee.png"


const Navbar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='navbar'>
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        {/* <a href="/contact">Contact Me</a> */}
      </div>
      <div className="call-btn">
        <a href="https://cal.com/ahmed-sherif-tg2x15" target='_blank'>Hire Me</a>
      </div>
    </div>

  )
}

export default Navbar