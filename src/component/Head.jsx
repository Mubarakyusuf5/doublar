import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <div>
      {/* ==== Header section started ==== */}
      <header>
        <div className="user">
            <span><i className="fa fa-bars fs-2"></i></span>
        </div>
        
        <div className="user">
          <span><i className="fa-regular fa-bell fs-2"></i></span>
          {/* <p>Ishaq</p> */}
        </div>
      </header>
      {/* ==== Header section ends ==== */}
      {/* <br /> */}
    </div>
  );
};

export default Head;
