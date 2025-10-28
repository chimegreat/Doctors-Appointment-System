import React from 'react'
import './ProfilePage.css'
import { assets } from '../../assets/assets_frontend/assets'

const ProfilePage = () => {
    return (
        <div className="profilePage">
            {/* Profile Picture Section */}
            <div className='pic'>
                <img src={assets.profile_pic} alt="" className='profile_img' />
                <div className='profile'>
                    <img src={assets.user_img} alt="" className='user' />
                </div>
            </div>

            {/* Name */}
            <div className='name'>
                <h1>Edward Vincent</h1>
                <div className="hr"></div>
            </div>

            {/* Contact Info */}
            <div className='contact_info'>
                <h2>CONTACT INFORMATION</h2>
                <div className="hr"></div>
            </div>

            <div className='contact'>
                <p>Email id:</p>
                <p>richardjameswap@gmail.com</p>
            </div>

            <div className='contact'>
                <p>Phone:</p>
                <p>+1 123 456 7890</p>
            </div>

            <div className='contact'>
                <p>Address:</p>
                <p>
                    57th Cross, Richmond <br />
                    Circle, Church Road, London
                </p>
            </div>

            {/* Basic Info */}
            <div className='contact_info'>
                <h2>BASIC INFORMATION</h2>
                <div className="hr"></div>
            </div>

            <div className='contact'>
                <p>Gender:</p>
                <p>Male</p>
            </div>

            <div className='contact'>
                <p>Birthday:</p>
                <p>20 July, 2024</p>
            </div>

            {/* Buttons */}
            <div className='contact'>
                <button>Edit</button>
                <button>Save information</button>
            </div>
        </div>
    )
}

export default ProfilePage
