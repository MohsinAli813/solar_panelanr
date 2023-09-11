import React from 'react'
import './Qoute1.css'

function Qoute1() {
  const handleButtonClick = () => {
    window.location.href = '/Qoute2'; // Navigate to the new page
  };
  return (
    <div>
      <div className='qoute1-main-div'>
        <div className='qoute1-body'>
        <h1>House Details</h1>
          <input type="text" id="location" placeholder=" Enter Your Address" />
          <div className='qoute1-btn'>
            <button  onClick={handleButtonClick}>Next</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Qoute1