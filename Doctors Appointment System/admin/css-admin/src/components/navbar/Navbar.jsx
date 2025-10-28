import React from 'react';
import { assets } from '../../assets/assets_admin/assets';
// import { appointments } from '../../assets/assets_frontend/assets';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className='nav-container'>
        <img src={assets.admin_logo} alt="" />
        <span className='admin-detail'>Admin</span>
      </nav>
        <button className='logout-btn'>Logout</button>
    </div>
  );
};



export default Navbar;