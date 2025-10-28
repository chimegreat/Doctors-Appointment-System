import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'
import './Footer.css'
const Footer = () => {
  return (
      <div className="footer">
        <div className="footer1">
          <div className="logo-section">
            <img src={assets.logo} alt="" className="logo top" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="company">
            <h1 className="top">Company</h1>
            <p>Home</p>
            <p>About us</p>
            <p>Contact us</p>
            <p>Privacy policy</p>
          </div>

          <div className="Get_In_Touch">
            <h1 className="top">GET IN TOUCH</h1>
            <p> +1-212-456-7890</p>
            <p> greatstackdev@gmail.com</p>
          </div>
        </div>
        <div className="footer_line"></div>

        <div className="footer2">
          <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
        </div>
      </div> 
     )
}

export default Footer