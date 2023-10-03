import React from 'react'

import github from "../../assets/github.png";
import linked from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png'
import "./Footer.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <hr />

      <div className="footer-icons">
        <div className="social-icons">
          <img src={github} />
          <img src={instagram} />
          <img src={linked} />
        </div>
        <div className="logo-f">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
}

export default Footer
