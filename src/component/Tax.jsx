import React from 'react'
import RefLink from './RefLink';
import Mine from './Mine';

const Tax = () => {
        const taxRef = 20; 
    const mine = 15;
    const main = taxRef + mine;


  return (
    <div className="all-home">
        <div className="reward-bal-points container">
            <div className="main-rbp">
                <div className="reward text-center">
                    <p><i className="fa-solid fa-dollar-sign"></i> {taxRef}</p>
                    <p>Gifts</p>
                </div>

                <div className="bal text-center">
                    <p><i className="fa-solid fa-dollar-sign"></i> {main}</p>
                    <p>Main</p>
                </div>
                    
                <div className="points text-center">
                    <p><i className="fa-solid fa-dollar-sign"></i> {mine}</p>
                    <p>Point</p>
                </div>
            </div>
        </div>
        <div className='container text-light fs-3'>
            <p>Activities</p>
        </div>
        <div className="ref-content">
            <RefLink />
        </div>
        <div>
            <Mine />
        </div>
    </div>
  )
}

export default Tax
