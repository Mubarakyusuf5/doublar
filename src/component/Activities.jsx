import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Activities = () => {
  return (
    <div className='main-activity '>
      <section className="activity">
        <ul className='d-flex justify-content-between container text-light'>
            {/* <Link to={'/history'}>History</Link> */}
            <Link to={'/income'}>Income</Link>
            <Link to={'/outcome'}>Outcome</Link>
        </ul>
      </section>
    </div>
  );
}

export default Activities;
