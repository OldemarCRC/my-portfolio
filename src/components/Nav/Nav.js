import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-scroll';
import { FaTimes, FaBars } from 'react-icons/fa';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <input type="checkbox" className="checkbox" checked={menuOpen} readOnly />
      <i className='bars' onClick={toggleMenu}><FaBars /></i>
      <i className='times' onClick={toggleMenu}><FaTimes /></i>
      <ul className={`menu ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="home" smooth={true} duration={1500} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={1500} onClick={toggleMenu}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={1500} onClick={toggleMenu}>
            Work
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={1500} onClick={toggleMenu}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="learning-achievements" smooth={true} duration={1500} onClick={toggleMenu}>
            Learning Achievements
          </Link>
        </li>
        <li>
          <Link to="skills-tools" smooth={true} duration={1500} onClick={toggleMenu}>
            Skills & Tools
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1500} onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;