import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'

const Dashboard = () => {
  return (
    <div>
        {/* Dashboard */}
              <div>
                <div>
                  <img src={assets.doctor_icon} alt="" />
                  <h3>14</h3>
                  <p>Doctors</p>
                </div>
                <div>
                  <img src={assets.doctor_icon} alt="" />
                  <h3>2</h3>
                  <p>Appointment</p>
                </div>
                <div>
                  <img src={assets.doctor_icon} alt="" />
                  <h3>5</h3>
                  <p>Patients</p>
                </div>
              </div>

        {/*Latest Appointment  */}
              <div>
                <div>
                    <img src={} alt="" />

                    <div>
                        <h3>Doctor Name</h3>
                        <p>Doctor Appointment Date</p>
                    </div>
                    <img src={} alt="" />

                </div>
              </div>
    </div>
  )
}

export default Dashboard