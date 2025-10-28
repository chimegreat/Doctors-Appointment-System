import React from 'react'
import './ContactPage.css'
import { assets } from '../../assets/assets_frontend/assets'

const ContactPage = () => {
  return (
    <div className='contact-page'>
        <h1>Contact <span>Us</span></h1>
        <div className='Contact_Contents'>
        <img src={assets.contact_image} alt="" />
        <div className='Contact_content'>
            <h2>OUR OFFICE</h2>

            <div className='contact-address'>
            <p>54709 Willams Station </p>
            <p>Suite 350, Washington, USA</p>
            </div>

            
            <div className='contact-address'>
            <p>{"Tel: (415) 555‑0132"}</p>
            <p>Email: greatstackdev@gmail.com</p>
            </div>


            <h2>CAREERS AT PRESCRIPTO</h2>

            <p>Learn more about our teams and job openings.</p>

            <button>Explore Jobs</button>

        </div>
        </div>

    </div>
  )
}

export default ContactPage