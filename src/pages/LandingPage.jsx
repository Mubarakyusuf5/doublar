import React from 'react'
import { Link, useNavigate } from "react-router-dom";
// import "../auth.css"

export const LandingPage = () => {
  const navigate = useNavigate()
  const features = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      title: "Multi-chain Support",
      description:
        "Seamlessly interact with multiple blockchains from a single interface. Support for Ethereum, Polygon, BSC, and more.",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Secure Keys",
      description:
        "Military-grade encryption keeps your private keys safe. Your assets are protected with industry-leading security.",
    },
    // {
    //   icon: (
    //     <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    //       />
    //     </svg>
    //   ),
    //   title: "NFT Dashboard",
    //   description:
    //     "View, manage, and showcase your NFT collection with our beautiful and intuitive dashboard interface.",
    // },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Instant Swaps",
      description:
        "Trade tokens instantly with the best rates. Powered by aggregated DEX liquidity for optimal pricing.",
    },
  ];
  return (
    <main className="main">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="navbar-logo">
              <svg
                className="navbar-logo-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span className="navbar-logo-text">Web3 Pay Wallet</span>
            </div>

            <div className="navbar-links">
              <Link to="#features" className="navbar-link">
                Features
              </Link>
              <Link to="#docs" className="navbar-link">
                Docs
              </Link>
              <Link to="#connect" className="navbar-link">
                Connect
              </Link>
            </div>

            <button className="btn btn-primary" onClick={()=> navigate("/signin")}>Connect Wallet</button>
          </div>
        </div>
      </nav>

      {/* hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-blur-1" />
          <div className="hero-bg-blur-2" />
        </div>

        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Your Gateway to Decentralized Finance
              </h1>

              <p className="hero-description">
                Secure, fast, and multi-chain wallet for the next generation of
                Web3 users.
              </p>

              <div className="hero-buttons">
                <button onClick={()=>navigate("/signup")} className="btn btn-primary btn-lg btn-group">
                  Get Started
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ marginLeft: "0.5rem" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>

                <button className="btn btn-outline btn-lg">Learn More</button>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <div className="hero-image-container">
                <div className="hero-image-glow" />
                <img
                  src="/3d-crypto-network-visualization-with-golden-nodes-.jpg"
                  alt="Crypto Network Visualization"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features */}
      <section id="features" className="features">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">Everything you need for Web3</h2>
            <p className="features-description">
              Built for the modern crypto user with powerful features and
              seamless experience
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>

                <h3 className="feature-title">{feature.title}</h3>

                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Product</h4>
              <ul className="footer-links">
                <li>
                  <Link to="#" className="footer-link">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li>
                  <Link to="#" className="footer-link">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    API
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul className="footer-links">
                <li>
                  <Link to="#" className="footer-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Community</h4>
              <div className="footer-social">
                <Link to="#" className="social-link">
                  <svg
                    className="social-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link to="#" className="social-link">
                  <svg
                    className="social-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Web3 Pay Wallet. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
