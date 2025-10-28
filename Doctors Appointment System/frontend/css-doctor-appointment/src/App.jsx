import React from 'react'
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/footer'
import AppointmentPage from './Pages/AppointmentPage/AppointmentPage'
import DoctorsPage from './Pages/DoctorsPage/DoctorsPage'
import AboutPage from './Pages/AboutPage/AboutPage'
import ContactPage from './Pages/ContactsPage/ContactPage'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import AuthPage from './Pages/AuthPage/AuthPage'
import MyAppointments from './Pages/MyAppointmentPage/MyAppointmentPage'
const App = () => {
  return (
    <Router>
      <Navbar/>
     <Routes>
      <Route  path='/' element={<Home />}/> 
      <Route path='/appointment-page' element={<AppointmentPage/>} />
      <Route path='/doctors-page' element={<DoctorsPage/>} />
      <Route path='/about-page' element={<AboutPage/>} />
      <Route path='/contact-page' element={<ContactPage/>} />
      <Route path='/profile-page' element={<ProfilePage/>} />
      <Route path='/auth-page' element={<AuthPage/>} />
      <Route path='/myappointment-page' element={<MyAppointments/>} />

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App