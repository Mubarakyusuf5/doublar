import React from 'react'
import {Link} from "react-router-dom"
import "../../auth.css"

export const ResetPass = () => {
  return (
     <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Reset Password</h1>
          <p className="auth-subtitle">Enter your new password below</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Create a strong password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password" className="form-label">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="form-input"
              placeholder="Re-enter your password"
              required
            />
          </div>

          <div className="password-requirements">
            <p className="requirements-title">Password must contain:</p>
            <ul className="requirements-list">
              <li>At least 8 characters</li>
              <li>One uppercase letter</li>
              <li>One lowercase letter</li>
              <li>One number</li>
              <li>One special character</li>
            </ul>
          </div>

          <button type="submit" className="auth-button">
            Reset Password
          </button>
        </form>

        <Link to="/signin" className="back-home-link">
          ← Back to Sign In
        </Link>
      </div>
    </div>
  )
}
