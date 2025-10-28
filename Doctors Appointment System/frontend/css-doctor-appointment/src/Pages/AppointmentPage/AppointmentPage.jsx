import React from 'react'
import { doctors } from '../../assets/assets_frontend/assets'
import DoctorDisplay from '../../components/DoctorDisplay/DoctorDisplay';
import './AppointmentPage.css'
const AppointmentPage = () => {
  const doctor = doctors.filter(index => index._id === 'doc1');
  const data = doctor[0]
  console.log(doctor);
  return (
    <div className='AppointmentPage'>
      <div className='AppointmentSection'>
        <img src={data.image} alt="doctor image"className='doctor_image' />
       <div className="Appointment-Contents">
        <div className="doctor_Info">
          <h1>{data.name}</h1>
          <p>{data.degree}{" "} - {" "}{data.speciality}
            <span>{data.experience}</span> </p>
          <p>About ©</p>
          <p>{data.about}</p>
          <p></p>
          <p>Appointment Fee : ${data.fees}</p>
        </div>
      <h1>Booking Slots</h1>
      <div className="BookingDays">
        <div className='days'>
          <p>MON</p>
          <p>10</p>
        </div>
        <div className='days'>
          <p>TUE</p>
          <p>11</p>
        </div>
        <div className='days'>
          <p>WED</p>
          <p>12</p>
        </div>
        <div className='days'>
          <p>THU</p>
          <p>13</p>
        </div>
        <div className='days'>
          <p>FRI</p>
          <p>14</p>
        </div>
        <div className='days'>
          <p>SAT</p>
          <p>15</p>
        </div>
        <div className='days'>
          <p>SUN</p>
          <p>16</p>
        </div>
      </div>
      <div className="BookingTime">
        <div className='time'>
          <p>8:00</p>
        </div>
        <div className='time'>
          <p>8:30</p>
        </div>
        <div className='time'>
          <p>9:00</p>
        </div>
        <div className='time'>
          <p>9:30</p>
        </div>
        <div className='time'>
          <p>10:00</p>
        </div>
        <div className='time'>
          <p>10:30</p>
        </div>
        <div className='time'>
          <p>11:00</p>
        </div>
        <div className='time'>
          <p>11:30</p>
        </div>

      </div>
      <button className='auth-btn'>Book an appointment</button>
    </div>
    </div>
    <DoctorDisplay/>
    </div>
  )
}

export default AppointmentPage