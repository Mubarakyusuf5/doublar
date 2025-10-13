import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Head from './component/Head'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Ref from './component/Ref';
import Prof from './component/Prof';
import Earning from './component/Earning';
import Tax from './component/Tax';
import Widthraw from './component/Widthraw';
import History from './component/History';
import Income from './component/Income';
import Outcome from './component/Outcome';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { FrgtPass } from './pages/auth/FrgtPass';
import { ResetPass } from './pages/auth/ResetPass';
import { OTP } from './pages/auth/OTP';
import { LandingPage } from './pages/LandingPage';

const App = () => {
  const location = useLocation();

  const hideNavbarPaths = [
    '/', 
    '/signin', 
    '/signup', 
    '/forgot-password', 
    '/reset-password', 
    '/verify-otp'
  ];

  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div>
      <>
        <div className="header-doublaar">
          {/* <div className='container' style={{
            backgroundColor: 'transparent'
          }}>
            <Head />
          </div> */}
          <div className="content">
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/signin' element={<Login />} />
              <Route path='/dashboard' element={<Home />} />
              <Route path='/tax' element={<Tax />} />
              <Route path='/nft' element={<Earning />} />
              <Route path='/referral' element={<Ref />} />
              <Route path='profile' element={<Prof />} />
              <Route path='/signout' element={<Login />} />
              <Route path='/signup' element={<Register />} />
              <Route path='/forgot-password' element={<FrgtPass />} />
              <Route path='/reset-password' element={<ResetPass />} />
              <Route path='/verify-otp' element={<OTP />} />
              <Route path='/widthraw' element={<Widthraw />} />
              <Route path='/history' element={<History/>} />
              <Route path='/income' element={<Income />} />
              <Route path='/outcome' element={<Outcome />} />
            </Routes>
          </div>
          {!hideNavbar && <Navbar />}
        </div>
      </>
    </div>
  )
}

export default App
