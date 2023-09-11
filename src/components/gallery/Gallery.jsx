import React from 'react'
import './Gallery.css'
import image1 from '../../image/image1.png'
import image4 from '../../image/image4.png'
import image8 from '../../image/image8.png'

function Gallery() {
    const handleButtonClick = () => {
        window.location.href = '/Qoute1';
      };
  return (
    <div className='gallery-main-div'>
            <div className="container">
                <div className="gallery-body">
                    <div className='row'>
                        <div className='col-lg-12 text-center pt-4 pb-4 gallery-head'>
                            <h1>Gallery</h1>
                         </div>
                    </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="img12">
                        <img src={image1} alt="" />
                        <img src={image8} alt="" />
                     </div>
                    </div>
               <div className="col-lg-8">
                       <div className="img3">
                         <img src={image4} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="container-fluid bg-light text-dark gallery-container-fluid">
                <div className='container Request-qoute'>
                    <div className='Request-qoute-body'>
                    <div className='row'>
                        <div className='col-12'>
                        <p>CONTACT OUR EXPERT</p>
                        </div>
                        <div className='col-12'>
                        <h1>Get Your Instant Free Quote Now</h1>
                        </div>
                        <div className='col-12'>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco .
                        </p>
                        </div>
                        <div className='col-12 gallery-button'>
                        <button onClick={handleButtonClick}>Request Qoute</button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
          </div>                  
  )
  }   
  export default Gallery

  

