// assets/data.js


// components/MyAppointments.jsx
import React, { useState } from 'react';
import './MyAppointment.css'

// import { appointments as initialAppointments } from '../assets/data';

import { appointments as initialAppointments } from '../../assets/assets_frontend/assets';
import AppointmentCard from './AppointmentCard';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleCancel = (appointmentId) => {
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === appointmentId
          ? { ...appointment, status: 'cancelled' }
          : appointment
      )
    );
  };

  const handlePayNow = (appointmentId) => {
    console.log('Processing payment for appointment:', appointmentId);
    // Update the status to 'paid' after payment processing
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === appointmentId
          ? { ...appointment, status: 'paid' }
          : appointment
      )
    );
  };

  return (
    <div className="appointments-container">
      <h1 className="appointments-title">
        My Appointments
      </h1>
      
      <div className="appointments-list">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            onCancel={handleCancel}
            onPayNow={handlePayNow}
          />
        ))}
      </div>

      {appointments.length === 0 && (
        <div className="no-appointments">
          <p>No appointments found.</p>
        </div>
      )}
    </div>
  );
};

export default MyAppointments;


// utils/appointmentHelpers.js - Optional utility functions
export const formatDate = (dateString) => {
  // You can add date formatting logic here
  return dateString;
};

export const formatTime = (timeString) => {
  // You can add time formatting logic here
  return timeString;
};

export const getStatusColor = (status) => {
  const colors = {
    upcoming: '#3b82f6',
    paid: '#10b981',
    cancelled: '#6b7280'
  };
  return colors[status] || colors.upcoming;
};

export const validateAppointment = (appointment) => {
  return (
    appointment &&
    appointment.id &&
    appointment.doctor &&
    appointment.date &&
    appointment.time &&
    appointment.status
  );
};

// hooks/useAppointments.js - Optional custom hook
// import { useState, useCallback } from 'react';

export const useAppointments = (initialAppointments) => {
  const [appointments, setAppointments] = useState(initialAppointments);

  const cancelAppointment = useCallback((appointmentId) => {
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === appointmentId
          ? { ...appointment, status: 'cancelled' }
          : appointment
      )
    );
  }, []);

  const payForAppointment = useCallback((appointmentId) => {
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === appointmentId
          ? { ...appointment, status: 'paid' }
          : appointment
      )
    );
  }, []);

  const addAppointment = useCallback((newAppointment) => {
    setAppointments(prevAppointments => [...prevAppointments, newAppointment]);
  }, []);

  return {
    appointments,
    cancelAppointment,
    payForAppointment,
    addAppointment
  };
};