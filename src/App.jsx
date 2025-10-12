import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from './component/Head'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Ref from './component/Ref';
import Prof from './component/Prof';
import Earning from './component/Earning';
import Tax from './component/Tax';
import Login from './Login';
import Widthraw from './component/Widthraw';
import History from './component/History';
import Income from './component/Income';
import Outcome from './component/Outcome';
import LandingPage from './LandingPage';

const App = () => {
  return (
    <div>
      <Router>
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
              <Route path='/widthraw' element={<Widthraw />} />
              <Route path='/history' element={<History/>} />
              <Route path='/income' element={<Income />} />
              <Route path='/outcome' element={<Outcome />} />
            </Routes>
          </div>
          <Navbar />
        </div>
      </Router>
    </div>
  )
}

export default App
