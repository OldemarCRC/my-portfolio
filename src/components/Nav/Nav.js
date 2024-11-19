import React from 'react';
import './nav.css';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="home" smooth={true} duration={1500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={1500}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={1500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={1500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="learning-achievements" smooth={true} duration={1500}>
            Learning Achievements
          </Link>
        </li>
        <li>
          <Link to="skills-tools" smooth={true} duration={1500}>
            Skills & Tools
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
