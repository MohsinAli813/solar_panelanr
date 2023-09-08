import React from 'react'
import './Navbar.css'
// import {useHistory} from 'react-router-dom'
// import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  
  const handleButtonClick = () => {
    window.location.href = '/Qoute1'; // Navigate to the new page
  };
  return (

            <nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
              <div className="container">
              <div className='navbar-brand fw-bold fs-2'>Tesla Landscaping</div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
               aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className='collapse navbar-collapse navbar-links' id='navbarTogglerDemo03'>
              <ul className='navbar-nav ms-auto fs-5'>
                <li className='nav-item'>
                <a className="nav-link" href="/">Home</a>
                </li>
                <li className='nav-item'>
                <a className='nav-link' href="/about">About</a>
                </li>
                <li className='nav-item'>
                <a  className="nav-link" href="/Gallery">Gallery</a>
                </li>
              </ul>
              <button className='btn btn-light' onClick={handleButtonClick}>Request a Qoute</button>
              </div>
              </div>

            </nav>
  )}
  export default Navbar
    // <div>

    //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-nav" >
    //     <div className="container bgcolr d-flex justify-content-between">
    //       <a className="navbar-brand brand-name fs-1 fw-bold" href="#">Tesla Landscape</a>
    //       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    //           <ul className="navbar-nav  m-auto fw-bold">
    //           <li className="nav-item ">
    //             <a className="nav-link" href="/Contact" exact>Contact</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/About">About</a>
    //             {/* <NavLink to='/about'>About</NavLink> */}
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/Gallery">Gallery</a>
    //           </li>
    //           <button type="button" class="btn  btn-light "
    //           onClick={handleButtonClick}
    //          >Request a Quote</button>
    //         </ul>
            
    //       </div>
    //     </div>
        
    //   </nav>
    //   </div>
//   )
// }

       
   

// export default Navbar