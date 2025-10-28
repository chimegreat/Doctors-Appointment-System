// Optional: components/AppointmentStatus.jsx - Separate status component
import React from 'react';

const AppointmentStatus = ({ status, onAction, appointmentId }) => {
  const renderStatus = () => {
    switch (status) {
      case 'upcoming':
        return (
          <button 
            className="pay-now-btn"
            onClick={() => onAction(appointmentId)}
          >
            Pay Now
          </button>
        );
      case 'paid':
        return (
          <button 
            className="paid-btn"
            onClick={() => onAction(appointmentId)}
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

  return renderStatus();
};

export default AppointmentStatus;
