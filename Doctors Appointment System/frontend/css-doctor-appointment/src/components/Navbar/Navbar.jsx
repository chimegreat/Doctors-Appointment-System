import React from 'react'
import { assets } from "../../assets/assets_frontend/assets"
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img src={assets.logo} alt="" className="logo" />

        <ul className='nav-items'>
          <li>HOME</li>
          <li>ALL DOCTORS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <button className='auth-btn'>Create account</button>
      </div>
      <div className='line'></div>
    </div>)
}

export default Navbar