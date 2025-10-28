import React from 'react'
import './Modal.css'
import { assets } from '../../assets/assets_frontend/assets'
const Modal = () => {
  return (
      <div className="modal">
        <div className="header-contents">
          <div className="header_1">
            <p>Book Appointment 
              <br />
              With Trusted Doctors</p>
          </div>
          <div className="header_2">
            <img src={assets.group_profiles} alt="" />
            <div className="subhead">
              <p>
                Simply browse through our extensive list of trusted doctors,
                <br />
                schedule your appointment hassle-free.
              </p>
            </div>
          </div>
        <button className="header-btn">Book appointment</button>
        </div>
        <img src={assets.header_img} alt="" className="header_img" />
      </div>  )
}

export default Modal