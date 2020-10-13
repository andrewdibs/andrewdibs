import React, { Component } from "react";
import linkedicon from "../assets/linkedin.png";
import githubicon from "../assets/GitHub-Mark.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
        
        <ul className="nav-items">
          <li className="nav-item">
              <Link  
                spy={true}
                smooth={true}
                className="brandname"
                offset={-70}
                duration={500}
                onClick={this.scrollToTop}
              >
                andrewdibs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Memories
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link>
                <a href="https://www.linkedin.com/in/andrew-dibella-961289172/" rel="noopener noreferrer" target="_blank"><img
                  src={linkedicon}
                  className="nav-logo"
                  alt="Logo"
                  onClick="https://www.linkedin.com/in/andrew-dibella-961289172/"
                /></a>
              </Link>
          </li>
          <li className="nav-item">
              <Link>
                <a href="https://github.com/andrewdibs" rel="noopener noreferrer" target="_blank"><img
                  src={githubicon}
                  className="nav-logo"
                  alt="Logo"
                  onClick="https://github.com/andrewdibs"
                /></a>
              </Link>
          </li>
          </ul>
        </div>
      </nav>
    );
  }
}