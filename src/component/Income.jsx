import React from 'react';
import Mine from './Mine';
import Activities from './Activities';
import Head from './Head';
import { useRef } from 'react';

const Income = () => {

    const taxRef = 20; 
    const USDT = 1500;
    const NGN = taxRef + USDT;

    const inputRef = useRef(null);
      const inputValue = '0xc31fd6edffbb6ecf93b959b886cfc83c41aaa908';
      const placeholder = '0xd*****ff86jff';
    
      const handleCopy = () => {
        // Copy the text to the clipboard
        navigator.clipboard.writeText(inputRef.current.value)
          .then(() => {
            alert("Referral link copied!");
          })
          .catch(err => {
            alert("Failed to copy text: ", err);
          });
      };

  return (
    <div className="all-home">
        <div className="wallet-fixed-header">
            <div className="reward-bal-points container">
                <div>
                    <Head />
                </div>
                <div className="text-center">
                    <br />
                    <br />
                    <p style={{
                        lineHeight: 0,
                    }}>Wallet Address</p>
                    <section className="wallet-address container">
                    <input
                    type="text"
                    value={inputValue}
                    readOnly
                    ref={inputRef}
                    placeholder={placeholder}
                    /> &nbsp;
                    <button type="button" onClick={handleCopy}><i className='fa-solid fa-copy'></i></button>
                </section>
                </div>
                <div className="main-rbp container">
                    <div className="bal text-center">
                        <p><span className='fs-4'>{USDT}</span> <sup>USDT</sup></p>
                    </div>
                        
                    <div className="bal text-center">
                        <p className='fa-solid fa-exchange fs-2 text-light'> </p>
                    </div>
                    
                    <div className="bal text-center">
                        <p> <span className='fs-4'>{NGN}</span> <sup>NGN</sup></p>
                    </div>
                </div>
                <div className="fs-3 text-secondary p-3">
                    <p>W3P Balance:</p>
                </div>
            </div>
            <div className="activities-content container">
                <Activities />
            </div>
        </div>
        <div className='history text-light'>
            <div className='container'>
                <p>ashaohdiodhohdoashaohdiodhohdo</p>
                <p>ashaohdiodhohdoashaohdiodhohdo</p>
                <p>ashaohdiodhohdoashaohdiodhohdo</p>
                <p>ashaohdiodhohdoashaohdiodhohdo</p>
                <p>ashaohdiodhohdoashaohdiodhohdo</p>
                <p>ashaohdiodhohdoashaohdiodhohdo</p>
                <p>ashaohdiodhohdoashaohdiodhohdo</p>
                <p>ashaohdiodhohdoashaohdiodhohdo</p>
                <p>ashaohdiodhohdoashaohdiodhohdo</p>
                <p>ashaohdiodhohdoashaohdiodhohdo</p>
                <p>1234567890</p>
            </div>
        </div>
    </div>
  )
}

export default Income