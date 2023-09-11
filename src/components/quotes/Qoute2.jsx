import React from 'react'
import './Qoute2.css'
import image9 from '../../image/image9.png'

function Qoute2() {
  const handleButtonClick = () => {
    window.location.href = '/Qoute3';
  };
  return (
    <div className='container qoute2-main'>
                <div className='qoute2-h1'>
                    <h1>Mark Your House</h1>
                    <div className='qoute2-imgset'>
                    <img src={image9} alt="" />
                </div>
                </div>
                <div className='qoute2-btn'>
                    <button onClick={handleButtonClick}>Next</button>
                </div>
            </div>
       
  )
}

export default Qoute2