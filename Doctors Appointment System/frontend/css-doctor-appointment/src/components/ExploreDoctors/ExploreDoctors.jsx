import React from 'react'
import './ExploreDoctors.css'
import { specialityData } from "../../assets/assets_frontend/assets";

const ExploreDoctors = () => {
  return (
      <div className="speciality">
        <div className="speciality-contents">
          <h1 className="sp-header">Find by Speciality</h1>
          <p>Simply browse through our extensive list of trusted doctors, schedule 
            <br />
          your appointment hassle-free.</p>
        </div>
        <div className="hero">
          {specialityData.map((data) => (
            <div className="specials">
              <img src={data.image} alt="images" className="special-image"/>
              <p className="special-desc">{data.speciality}</p>
            </div>
          ))}
          </div>
      </div>  
      )
}

export default ExploreDoctors