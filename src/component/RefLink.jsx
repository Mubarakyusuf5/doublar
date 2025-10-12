import React from 'react';
import { useRef } from 'react';

const RefLink = () => {
  const inputRef = useRef(null);
  const inputValue = 'https://web3pay.com/me.ref/XYZ321';

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
    <div className='refer'>
      <section className="referral-link container">
        <p>Share your referral link to earn:</p>
        <input
          type="text"
          value={inputValue}
          readOnly
          ref={inputRef}
        />
        <button type="button" onClick={handleCopy}><i className='fa-solid fa-copy'></i></button>
      </section>
    </div>
  );
}

export default RefLink;
