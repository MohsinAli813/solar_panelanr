import React from 'react'
import './Qoute3.css'
import plates from '../../image/plates.png'

function Qoute3() {
    const handleButtonClick = () => {
        window.location.href = '/Qoute4'; // Navigate to the new page
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



        {/* <div className='material'><h3>Choose Material</h3></div>
        <div className='container contain'>
            <div className='row platess'>
                <div className='col-lg-4 powerwall'>
                    <img src={plates} alt="" />
                        <h2>Solar Panels</h2>
                        <p>Powerwall Options</p>
                        <p>Retrofil Panels for your Existing Roof</p>
                    </div>
                <div className='col-lg-4'>
                    <img src={plates} alt="" />
                    </div>
               <div className='col-lg-4'>
                    <img src={plates} alt="" />
                    </div>
            </div>
        </div> */}
    </div>
//     <div className="card-group">
//   <div className="card">
//     <img src={plates} className="card-img-top" alt="..." />
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     </div>
    
//   </div>
//   <div className="card">
//     <img src={plates} className="card-img-top" alt="..." />
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//     </div>

//   </div>
//   <div className="card">
//     <img src={plates} className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//     </div>
   
//   </div>
// </div>
  )
}

export default Qoute3