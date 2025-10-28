import React from "react";
import './Home.css'
import Navbar from "../../components/Navbar/Navbar"; 
import Modal from "../../components/modal/Modal";
import ExploreDoctors from "../../components/ExploreDoctors/ExploreDoctors";
import DoctorDisplay from "../../components/DoctorDisplay/DoctorDisplay";
import BookAppointment from "../../components/BookAppointment/BookAppointment";
import Footer from "../../components/footer/footer";

const Home = () => {
  // added flex to whole body
  return (
    <div className="home">
      <Modal/>
      <ExploreDoctors />
      <DoctorDisplay />
      <BookAppointment />
    </div>
  );
};

export default Home;
