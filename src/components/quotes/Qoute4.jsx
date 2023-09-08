import React from 'react'
import './Qoute4.css'
import Vector from '../../image/Vector.png';

function Qoute4() {
    const handleButtonClick = () => {
        window.location.href = '/Qoute5'; // Navigate to the new page
      };
  return (

    <div className="qoute4-main-div">
        <div className="qoute4-body">
            <h4 className='title-qoute4'>Your Home</h4>
            <div className="qoute4-inner-text">
            <h5>Your Address, street no, house no</h5>
            <p>Size of your house is 123940 ft</p>
            <img src={Vector} alt="" />
            </div>
            <div className="qoute4-bottom">
                <h5>Solar Size</h5>
                <p>System sizing is an estimation based on your house size</p>
            </div>
            <div className='solarkw'>
                <p>6.885KW Solar</p>
                <p>$16,552</p>
            </div>
            <div className="qoute4-btn">
                <button type='button' onClick={handleButtonClick}>Continue to Order</button>
            </div>
        </div>
    </div>

  )
}

export default Qoute4