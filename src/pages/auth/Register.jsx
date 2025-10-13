import React from 'react'
import "../../auth.css"
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
     <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join Nebula Wallet and start your Web3 journey</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input type="text" id="name" className="form-input" placeholder="John Doe" required />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" id="email" className="form-input" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
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
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="form-input"
              placeholder="Re-enter your password"
              required
            />
          </div>

          <div className="form-checkbox">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the{" "}
              <Link to="/terms" className="inline-link">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="inline-link">
                Privacy Policy
              </Link>
            </label>
          </div>

          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>

        <div className="auth-divider">
          <span>Already have an account?</span>
        </div>

        <Link to="/signin" className="auth-link-button">
          Sign In
        </Link>

        <Link to="/" className="back-home-link">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
