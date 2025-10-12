import React from 'react';
import '../assets/css/Nav.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar container">
        <nav className="bottom-nav container">
            {/* <Link to={'/tax'}><i className="fas fa-file-invoice-dollar fa-fade fa-beat"></i> Tax</Link> */}
            <Link to={'/widthraw'}><i className="fa fa-arrow-down"></i> <span>Widthraw</span></Link>
            {/* <Link to={'/referral'}><i className="fa-solid fa-handshake fa-fade fa-beat"></i> Ref</Link> */}
            {/* <Link to={'/dashboard'}><i className="fa fa-wallet"></i> <span>Wallet</span></Link> */}
            <Link to={'/dashboard'}><i className="fa-solid fa-house-chimney-window"></i> <span>Home</span></Link>
            <Link to={'/profile'}><i className="fa-solid fa-user"></i> <span>Profile</span></Link>
        </nav>
    </div>
  )
}

export default Navbar
