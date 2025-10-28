import React from 'react'
import { assets } from '../../assets/assets_admin/assets'
import './Sidebar.css'
const Sidebar = () => {
  return (
      <div className='sidebar'>

        <div className='side_content dash'>
          <img src={assets.home_icon} alt="" />
          <p>Dashboard</p>
        </div>
        <div className='side_content'>
          <img src={assets.appointment_icon} alt="" />
          <p>Appointments</p>
        </div>
        <div className='side_content'>
          <img src={assets.add_icon} alt="" />
          <p>Add Doctor</p>
        </div>
        <div  className='side_content'>
          <img src={assets.people_icon} alt="" />
          <p>Doctor List</p>
        </div>
      </div>
  )
}

export default Sidebar