import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'
import './AboutPage.css'
const AboutPage = () => {
    return (
        <div className='about-page'>
            <div className='content_0'>           
                <h1> ABOUT <span>US</span> </h1>
            </div>

            <div className="about_contents">

                <div className="content_1">
                    <img src={assets.about_image} alt="" />
                    <div className="about_p">
                        <p>
                            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently.
                            <br />
                            At Prescripto, we understand the challenges individuals face when it comes to scheduling
                            <br />
                            Doctor appointments and managing their health records.
                        </p>
                        <p>
                            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance
                            <br />our platform, integrating the latest advancements to
                            improve user experience and deliver superior service.
                            <br />
                            Whether you're booking your first appointment or managing ongoing care, 
                            <br />
                            Prescripto is here to support you every step of the way
                        </p>
                        <p>Our Vision</p>
                        <p>
                            Our vision at Prescripto is to create a seamless healthcare experience for every user.
                           <br />
                            We aim to bridge the gap between patients and healthcare providers,
                            <br />
                            making it easier for you to access the care you need, when you need it.
                        </p>
                    </div>
                </div>
                <div className="content_2">
                    <h1>Why <span> Choose Us</span></h1>

                <div className='content_2_box'>
                    <div className='box'>
                        <p className='box_h'>Efficiency:</p>

                        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                    </div>
                    <div className='box'>
                        <p className='box_h'>Convenience:</p>

                        <p>Access to a network of trusted healthcare professionals in your area.</p>
                    </div>
                    <div className='box'>
                        <p className='box_h'>Personalization:</p>

                        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}

export default AboutPage