import React,{useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import "../../auth.css"

export const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
    const navigate = useNavigate()

  const handleChange = (index, value) => {
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Verify Your Account</h1>
          <p className="auth-subtitle">Enter the 6-digit code sent to your email</p>
        </div>

        <form className="auth-form">
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                className="otp-input"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                pattern="[0-9]"
                inputMode="numeric"
              />
            ))}
          </div>

          <button onClick={()=>navigate("/reset-password")} type="submit" className="auth-button">
            Verify Code
          </button>
        </form>

        <div className="auth-divider">
          <span>Didn't receive the code?</span>
        </div>

        <button className="auth-link-button" type="button">
          Resend Code
        </button>

        <Link to="/login" className="back-home-link">
          ← Back to Sign In
        </Link>
      </div>
    </div>
  )
}
