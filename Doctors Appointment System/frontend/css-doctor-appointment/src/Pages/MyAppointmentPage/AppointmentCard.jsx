// components/AppointmentCard.jsx
import React from 'react';
import './AppointmentCard.css';
// import { assets } from '../../assets/assets_frontend/assets';
const AppointmentCard = ({ appointment, onCancel, onPayNow }) => {
  const { doctor, date, time, status } = appointment;

  const getStatusButton = () => {
    switch (status) {
      case 'upcoming':
        return (
          <button 
            className="pay-now-btn"
            onClick={() => onPayNow(appointment.id)}
          >
            Pay Now
          </button>
        );
      case 'paid':
        return (
          <button 
            className="paid-btn"
            onClick={() => onPayNow(appointment.id)}
          >
            Paid
          </button>
        );
      case 'cancelled':
        return (
          <span className="cancelled-status">
            Cancelled
          </span>
        );
      default:
        return null;
    }
  };

  // const handleImageError = (e) => {
  //   e.currentTarget.src = '/assets/images/default-doctor.jpg';
  // };

  return (
    <div className="appointment-card">
      <div className="appointment-content">
        
        <div className="doctor-info-section">
          {/* Doctor Image */}
          <div className="doctor-image-container">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="doctor-image"
            />
          </div>

          {/* Doctor Details */}
          
          <div className="doctor-details">
            <h3 className="doctor-name">
              {doctor.name}
            </h3>
            <p className="doctor-specialty">
              {doctor.speciality}
            </p>
            
            <div className="address-section">
              <p className="address-label">Address:</p>
              <p className="address-line">
                {doctor.address.line1}
              </p>
              <p className="address-line">
                {doctor.address.line2}
              </p>
            </div>

            <div className="appointment-time">
              <p className="time-info">
                <span className="time-label">Date & Time:</span> {date} | {time}
              </p>
            </div>
            
        {/* Action Buttons */}
        <div className="action-buttons">
          {getStatusButton()}
          <button
            className="cancel-btn"
            onClick={() => onCancel(appointment.id)}
          >
            Cancel appointment
          </button>
      
        </div>
          </div>


        </div>


      </div>
    </div>
  );
};

export default AppointmentCard;
