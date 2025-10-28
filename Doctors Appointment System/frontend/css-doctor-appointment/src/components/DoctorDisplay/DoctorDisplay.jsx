import React from "react";
import "./DoctorDisplay.css";
import { doctors } from "../../assets/assets_frontend/assets";
const DoctorDisplay = () => {
  const doctorList = doctors.filter(
    (doctor) => doctor.speciality === "General physician"
  );
  return (
    <div className="doc-body">
        {/* <div className="doc-contents">
          <h1>Top Doctors to Book</h1>
          <p>Simply browse through our extensive list of trusted doctors.</p>
        </div> */}
      <div className="doctor_list">
        {doctorList.map((data) => (
          <div className="doctor_list_item">
            <img src={data.image} alt="" />
            <div className="doc-avail">
              <li></li>
              <p> Available</p>
            </div>
            <p className="doctor_name">{data.name}</p>
            <p>{data.speciality}</p>
          </div>
        ))}
      </div>
      {/* <button className="doctor_list_btn"> more</button> */}
    </div>
  );
};

export default DoctorDisplay;
