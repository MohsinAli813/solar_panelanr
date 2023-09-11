import React from 'react'
import './Qoute3.css'
import plates from '../../image/plates.png'

function Qoute3() {
    const handleButtonClick = () => {
        window.location.href = '/Qoute4'; 
      };
  return (
    <div className='qoute3-main-div'>
        <div className='qoute3-main-h1'>
            <h1>Choose Material</h1>
        <div className='qoute3-body'>
            <div className="three-img-div">
                <img src={plates} alt="" />
                <div className="three-img-body">
                <h2>Solar Panels</h2>
                    <h5>Powerwall Options</h5>
                    <p>Retrofil Panels for your Existing Roof</p>
                </div>
            </div>
            <div className="three-img-div">
            <img src={plates} alt="" />
            <div className="three-img-body">
                <h2>Solar Panels</h2>
                    <h5>Powerwall Options</h5>
                    <p>Retrofil Panels for your Existing Roof</p>
                </div>
            </div>
            <div className="three-img-div">
            <img src={plates} alt="" />
            <div className="three-img-body">
                <h2>Solar Panels</h2>
                    <h5>Powerwall Options</h5>
                    <p>Retrofil Panels for your Existing Roof</p>
                </div>
            </div>
            </div>
            <div className='qoute3-btn'>
                <button onClick={handleButtonClick}>Get Qoute</button></div>
            
          

            
        </div>
        </div>
  )
}

export default Qoute3