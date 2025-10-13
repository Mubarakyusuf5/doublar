import {Link, useNavigate} from "react-router-dom"
import "../../auth.css"

export const Login = () => {
    const navigate = useNavigate()
  return (
        <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your Nebula Wallet account</p>
        </div>

        <form className="auth-form">
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
            <input type="password" id="password" className="form-input" placeholder="Enter your password" required />
          </div>

          <div className="form-footer">
            <Link to="/forgot-password" className="form-link">
              Forgot password?
            </Link>
          </div>

          <button onClick={()=>navigate("/dashboard")} type="submit" className="auth-button">
            Sign In
          </button>
        </form>

        <div className="auth-divider">
          <span>Don't have an account?</span>
        </div>

        <Link to="/signup" className="auth-link-button">
          Create Account
        </Link>

        <Link to="/" className="back-home-link">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
