import React, { useState } from 'react'

const WidthrawBtn = () => {
    const [btn, setBtn]  = useState('Transfer')
  return (
    <div>
      <button className='btn btn-success' onClick={() => setBtn('Loading...')}>{ btn }</button>
    </div>
  )
}

export default WidthrawBtn
