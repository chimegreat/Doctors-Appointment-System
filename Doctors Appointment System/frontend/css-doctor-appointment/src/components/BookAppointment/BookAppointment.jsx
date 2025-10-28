import React from 'react'
import './BookAppointment.css'
import { assets } from '../../assets/assets_frontend/assets'

const BookAppointment = () => {
  return (
      <div className="Book_Appointment">
        <div className="Appointment_contents">
        <h1>Book Appointment <br /> With 100+ Trusted Doctors</h1>
        <button className='header-btn'>Create account</button>
        </div>
        <img src={assets.appointment_img} alt="" className="Appointment_Image" />
      </div>  
      )
}

export default BookAppointment