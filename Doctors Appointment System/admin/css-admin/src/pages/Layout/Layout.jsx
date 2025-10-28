import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Layout.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='layout'>
      <Navbar/>

      <div className='main-content'>
      <Sidebar/>
      <Outlet/>
      </div>

    </div>
  )
}

export default Layout