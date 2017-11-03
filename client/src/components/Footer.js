import React from 'react'
import { Link } from 'react-router-dom'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaYoutube from 'react-icons/lib/fa/youtube'

const Footer = () =>
  <div className="footer-container">
    <div className='social-wrap'>
      <a href="https://www.facebook.com/pages/Ebenezer-Mission-Church/149714738395852" target="_blank" rel="noopener noreferrer">
        <button className='facebook'>
          <FaFacebook />
        </button>
      </a>
        <button className='twitter'>
          <FaTwitter />
        </button>

        <button className='youtube'>
          <FaYoutube />
        </button>
    </div>
    <span className="member-login-link"><Link to='/login'>Member Login</Link> </span>
    <p className="copyright">&copy; Copyright 2017 EMC -- @asolace development</p>

  </div>

export default Footer
