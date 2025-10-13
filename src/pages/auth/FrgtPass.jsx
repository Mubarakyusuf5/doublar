import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import "../../auth.css"

export const FrgtPass = () => {
  const navigate = useNavigate()
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Forgot Password?</h1>
          <p className="auth-subtitle">Enter your email and we'll send you an otp</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" id="email" className="form-input" placeholder="you@example.com" required />
          </div>

          <button onClick={()=>navigate("/verify-otp")} type="submit" className="auth-button">
            Send Otp
          </button>
        </form>

        <div className="auth-divider">
          <span>Remember your password?</span>
        </div>

        <Link to="/login" className="auth-link-button">
          Back to Sign In
        </Link>

        <Link to="/" className="back-home-link">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
