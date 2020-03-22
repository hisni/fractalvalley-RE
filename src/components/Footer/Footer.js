import React from 'react'
import './Footer.css'
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {

  return (
    <footer className="footer">
        <div className="Left">
            <h4><FaCopyright /> 2019, RECYC LABS</h4>
        </div>
        <div className="Right">
            <h4>All Rights Reserved.</h4>
        </div>
    </footer>
  )
}

export default Footer;
