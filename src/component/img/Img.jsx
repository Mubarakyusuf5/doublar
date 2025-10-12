import React from 'react';

const Img = (props) => {

  return (
    <div className='main-mine-icon'>
      <img src={props.imageName} className='fa fa-beat' />
    </div>
  )
}

export default Img
