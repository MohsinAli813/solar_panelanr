import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
             <div className='bg-dark text-white'>   
              <div className="container ">
                <div className="row pt-4 pb-2">
                  <div className="col-lg-4 col-md-6">
                  <h4>Tesla Landspacing</h4>
                  </div>
                  <div className="col-lg-3 col-md-6">
                  <ul className="list-unstyled footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Gallery">Gallery</a></li>
                    <li><a href="/Qoute1">Qoute</a></li>
                  </ul>
                  </div>
                </div>
                <div className="row center-line"></div>
                <div className="row pt-3 pb-5">
                  <div className="col-lg-4 col-md-6">
                  <p>Country— 123 street ,28499 City, 47589</p>
                  </div>
                  <div className="col-lg-3 col-md-6">
                  <p>henrylanchestercan@gmail.com</p>
                  </div>
                  <div className="col-lg-2">
                  <a href="phone.num" className="dial_number">+1 510-557-2996 </a>
                  </div>
                </div>
              </div>
              </div>
  );
};

export default Footer;
