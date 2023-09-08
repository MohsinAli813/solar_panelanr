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
                  <a href="#" className="dial_number">+1 510-557-2996 </a>
                  </div>
                </div>
              </div>
              </div>
//     <footer>
//     <div className="section_8">
//         <div className="container">
//             <div className="footer_top_item">
//                 <div className="footer_top_item_1">
//                     <div className="footer_header">
//                        <a href="{% url 'index' %}">
//                         <h6>Tesla Landscaping</h6>
//                        </a>
//                     </div>
//                     <div className="footer_item">
//                         <a href="{% url 'index' %}">Home</a>
//                         <a href="{% url 'about' %}">About</a>
//                         <a href="{% url 'gallery' %}">Gallery</a>
//                         <a href="{% url 'quote1' %}">Quote</a>

//                     </div>
//                 </div>
//             </div>
//             <div className="footer_bottom_item">
//                 <div className="row">
//                     <div className="col-lg-5 col-md-5 col-sm-7 ">
//                         <p>Country— 123 street ,28499 City, 47589</p>
//                     </div>
//                     <div className="col-lg-4 col-md-4 col-sm-5">
//                         <a href="#" >
//                             <p>henrylanchestercan@gmail.com</p>
//                         </a>
//                     </div>
//                     <div className="col-lg-3 col-md-3 col-sm-12 dial_number_colum">
//                         <a href="#" className="dial_number">+1 510-557-2996 </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </footer>

    // <div className='footer-main bg-dark'>
    //   <div className='container'>
    //     <div className='footer-top'>
    //     <h4>Tesla Landspacing</h4>
    //     <div className='footer-links'>
    //       <a href="Home">Home</a>
    //       <a href="About">About</a>
    //       <a href="Contact">Gallery</a>
    //       <a href="Qoute">Qoute</a>
    //     </div>
    //     </div>
    //     <div className='footer-line'></div>
    //     <div className='footer-bottom'>
    //     <p>Country— 123 street ,28499    City, 47589</p>
    //     <a href="#">henrylanchestercan@gmail.com</a>
    //     <a href="#">+1 510-557-2996 </a>
    //     </div>

    //   </div>

    // </div>
    //  <footer className="bg-dark text-white text-center py-4">
    //   <div className="container footer">
    //     <div className="row">
    //       <div className="col-md-6 mb-4">
    //         <h4>Tesla Landspacing</h4>
    //       </div>
    //       <div className="col-md-3 mb-4 abc">
    //         <ul className="list-unstyled ">
    //           <li><a href="/Home">Home</a></li>
    //           <li><a href="#">About</a></li>
    //           <li><a href="#">Gallery</a></li>
    //           <li><a href="#">Qoute</a></li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="row">
    //     <hr className="my-4" />  {/* Horizontal line separator */}
    //       <div className="col-md-12 x">
            
    //         <p>Country— 123 street ,28499    City, 47589</p>
    //         <div className='col-lg-4'><a href="#">henrylanchestercan@gmail.com</a></div>
    //         <div className='col-lg-4 z'><a href="#">+1 510-557-2996 </a></div>
    //       </div>    
    //     </div>
    //   </div>
    // </footer>
  

//     <div>
//         <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container bgcolr d-flex justify-content-around container1">
//           <a className="navbar-brand brand-name fw-bold" href="#">Tesla Landscape</a>
//           <div className='navitems container1'>
//             <ul className="navbar-nav  ml-auto fw-bold my-4">
//               <li className="nav-item nav-item:hover">
//                 <a className="nav-link" href="#">Contact</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">About</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Gallery</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Qoute</a>
//               </li>
//             </ul>
//             </div>
//             </div>
//             </nav>
//         </div>
//         <div className='container'>
//         <hr className="my-4" />
//             <div className='container abc'>
//                 <div className='b'>hello</div>

//             </div>
//         </div>
//  </div>
    // <footer className="bg-dark text-white text-center py-4">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-6">
    //         <h4>Tesla </h4>
    //         <p>About Us</p>
    //       </div>
    //       <div className="col-md-3">
    //         <h4>Quick Links</h4>
    //         <ul className="list-unstyled">
    //           <li><a href="#">Home</a></li>
    //           <li><a href="#">About</a></li>
    //           <li><a href="#">Services</a></li>
    //           <li><a href="#">Contact</a></li>
    //         </ul>
    //       </div>
    //       <div className="col-md-3">
    //         <h4>Contact Us</h4>
    //         <p>123 Main St, City</p>
    //         <p>Email: info@example.com</p>
    //         <p>Phone: (123) 456-7890</p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
