import React from 'react'
import './AuthPage.css'
const AuthPage = () => {
  return (
    <div className='authPage'>
        <form action="">
        <div className='auth-title'>
        <h1>Create Account</h1> {/*Login*/}
        <p>Please sign up to book appointment</p>
        </div>

        <div className="auth-inputs">
        <label htmlFor="Full Name">Full Name</label>
        <input type="text" />

        <label htmlFor="Email">Email</label>
        <input type="email" />

        <label htmlFor="Password">Password</label>
        <input type="password" />
   
        <button>Create Account</button>

        <p>Already have an account? <span>Login here</span></p>
   
        </div>

        </form>
    </div>
  )
}

export default AuthPage