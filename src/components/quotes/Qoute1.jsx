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
        {/* <div className='container'>
            <div className='row row1'>
            <div className='qoute1'>
                <h3>House Details</h3>
            </div>
        <div >
        <input type="text" id="location" placeholder="Enter Your location" />
        </div>
        <div>
            <button className='btn btn-dark text-white button'>Next</button>
        </div>

        </div>
        </div> */}
    </div>
  )
}

export default Qoute1