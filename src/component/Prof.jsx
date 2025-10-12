import React from 'react'
import WidthrawBtn from './WidthrawBtn'
import Head from './Head'

const Prof = () => {
  return (
    <div>
      <div>
        <Head />
      </div>
      <div className='main-mine user-profile container'>
        <div className="user-icon">
          <span><i className='fa-regular fa-user userIcon'></i></span>
        </div>
        
        <div className="userDetails">
          <div className="label">
            <p>GIFTS:</p>
            <p>POINTS:</p>
            <p>MAIN BALANCE:</p>
          </div>
          <div className="labelValue">
            <p>$0.000000005</p>
            <p>$0.0000000010</p>
            <p>$0.0000000015</p>
          </div>
        </div>
      </div>
      <br /><br />
      <div className="widthrawBtn">
       <WidthrawBtn />
      </div>
    </div>
  )
}

export default Prof
