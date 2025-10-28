import React from 'react'
import './DoctorsPage.css'
import { doctors, specialityData } from '../../assets/assets_frontend/assets'
import DoctorDisplay from '../../components/DoctorDisplay/DoctorDisplay'

const DoctorsPage = () => {
    const doctorsList = doctors.filter(doctor => doctor.speciality.toLowerCase() === "General physician".toLowerCase())

    console.log("doctor List: ", doctorsList);


    return (
        <div>
            <p className='doc-initials'>Browse through the doctors specialist.</p>
            <div className='Doctor_Page'>
                <div className="Doctor_Selection">
                    {specialityData.map((index) => (
                        <button className='Doctor_Button'>{index.speciality}</button>
                    ))}
                </div>

                <div className="doctor_list">
                <DoctorDisplay/>
                </div>
            </div>
        </div>
    )
}

export default DoctorsPage