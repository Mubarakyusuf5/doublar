import React from 'react';
// import '../assets/css/Mine.css';
import Img from './img/Img';
import image from '../assets/img/coin.png';

const Mine = () => {
  return (
    <div className='parent-mine'>
        <div className='main-mine fa-fade container'>
          <Img imageName={image} />
        </div>
    </div>
  )
}

export default Mine;
