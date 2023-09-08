import React from "react";
import "./Home.css";
import solar from "../../image/solar.png";
import solar1 from "../../image/solar1.png";
import solar2 from "../../image/solar2.png";
import plates from "../../image/plates.png";
// import Section from "../../image/Section.png";

export default function Home() {
  const handleButtonClick = () => {
    window.location.href = '/Qoute1'; // Navigate to the new page
  };
  return (
    <div>
      <section className="home_section_one">
        <div className="home-sec-one-text">
          <h1>Powering Your Home with Solar Brilliance</h1>
          <p>
            Adipiscing elit, sed do eiazusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Dicta
            sunt explicabo.
          </p>
        </div>
        {/* <div className="home-sec-one-img">Lorem ipsum dolor sit amet.</div> */}
        <div className="home-sec-one-img">
          <img src={solar} alt="" />
        </div>
      </section>

      <section className="about_section_two">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="about_sec2_text_body">
                  <p>WHAT WE OFFER</p>
                  <h1>Our Installation Services</h1>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <p>
                  Adipiscing elit, sed do euismod tempor incidunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco. Adipiscing elit, sed do euismod tempor
                  incidunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam.
                </p>
              </div>
            </div>
            <div className="about_sec2_cards_main">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12">
                  <div className="about_sec2_card_body">
                    <h4>Pavers, Turf</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12">
                  <div className="about_sec2_card_body">
                    <h4>Retaining Walls and Irrigation</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12">
                  <div className="about_sec2_card_body">
                    <h4>Outdoor Tiles and French Drain</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12">
                  <div
                    className="about_sec2_card_body"
                    style={{ border: "none" }}
                  >
                    <h4>Pergola, BBQ and Sunroom</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home_section_three">
        <div className="container-fluid">
          <div className="home_sec_three_body">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <div className="home_sec_three_body_text">
                    <h5>Save Electricity</h5>
                    <p>
                      Adipiscing elait, sed do euismod tempor incidunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco.
                    </p>
                  </div>
                  <div className="home_sec_three_body_text">
                    <h5>Robust and Long Lasting Design</h5>
                    <p>
                      Adipiscing elait, sed do euismod tempor incidunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco.
                    </p>
                  </div>
                  <div className="home_sec_three_body_text">
                    <h5>Refined and immaculate appearance.</h5>
                    <p>
                      Adipiscing elait, sed do euismod tempor incidunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco.
                    </p>
                  </div>
                  <div className="home_sec_three_body_text">
                    <h5>Save Electricity</h5>
                    <p>
                      Adipiscing elait, sed do euismod tempor incidunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="sec-three-imgs">
                    <div className="home-sec-three-body-bg-img">
                      <img src={solar1} alt="" />
                    </div>
                    <div className="home-sec-three-body-img">
                      <img src={solar2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home_section_four">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="sec_four_body">
                <h1>Maximum Durability</h1>
                <p>
                  Adipiscing elit, sed do euismod tempor incidunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco.
                  <br />
                  Adipiscing elit, sed do euismod tempor incidunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="sec_four_body_img">
                <img src={plates} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="sec_four_body_img">
                <img src={plates} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="sec_four_body">
                <h1>Less Impact</h1>
                <p>
                  Adipiscing elit, sed do euismod tempor incidunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco. <br />
                  Adipiscing elit, sed do euismod tempor incidunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="sec_four_body">
                <h1>No Leaks</h1>
                <p>
                  Adipiscing elit, sed do euismod tempor incidunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco. <br />
                  Adipiscing elit, sed do euismod tempor incidunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="sec_four_body_img">
                <img src={plates} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home_section_five">
        <div className="container-fluid">
          {/* <button >Play</button> */}
        </div>
      </section>
      <section className="about_section_three">
        <div className="about_sec_three_text">
          <p className="about-sec-three-text-p">CONTACT OUR EXPERT</p>
          <h1>Get Your Instant Free Quote Now</h1>
          <p className="about-sec-three-text-p">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
          <button className="about_button" onClick={handleButtonClick}>Request Qoute</button>
        </div>
      </section>
    </div>
    //     <div className="maincolr">
    //         <div className="heroMain">
    //         <div className='hero'>
    //             <div >

    //                 <h1>Powering Your Home with <br />Solar Brilliance</h1></div>

    //         <div><p>Adipiscing elit, sed do eiazusmod tempor incididunt ut labore et dolore
    //             magna aliqua. Ut <br />enim ad minim veniam, quis nostrud. Dicta sunt explicabo.</p></div>
    //           <div className='solarpic'>
    //             <img src={solar} alt="solar" />
    //             </div>
    //     </div>
    //     </div>
    //     <div className='offerbg'>
    //         <div className='container container-fluid containerr'>
    //             <div className='row'>

    //             <div className='instalation col-lg-6 col-12'>
    //             <p>WHAT WE OFFER</p>
    //             <h1>Our Installation <br />Services</h1>
    //                 </div>
    //             <div className='col-lg-6 col-12 paragraph'>
    //             <p>
    //                 Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
    //                     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.<br /><br />
    //                     Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
    //                     magna aliqua. Ut enim ad minim veniam.</p>
    //             </div>

    //             </div>

    //         </div>
    //         <div className='iconclass container-fluid'>
    //             <div className='iconc1 col-lg-3'><h4>Pavers,
    // Turf</h4></div>
    //             <div className='iconc2 col-lg-3'><h4>Retaining Walls
    // and Irrigation</h4></div>
    //             <div className='iconc3 col-lg-3 '><h4>Outdoor Tiles
    // and French Drain</h4></div>
    //             <div className='iconc4 col-lg-3'><h4>Pergola,
    // BBQ and Sunroom</h4></div>
    //         </div>
    //     </div>

    //     <div className='container bgwhite'>
    //         <div className='row'>
    //         <div className='col-lg-6'>
    //             <div className='saveelc'>
    //                 <h5>Save Electricity</h5>
    //                 <p>Adipiscing elait, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    //                 </div>
    //             <div className='saveelc1'>
    //                 <h5>Robust and Long Lasting Design</h5>
    //                 <p>Adipiscing elait, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    //             </div>
    //             <div className='saveelc1'>
    //                 <h5>Refined and immaculate appearance.</h5>
    //                 <p>Adipiscing elait, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    //             </div>
    //             <div className='saveelc1'>
    //                 <h5>Save Electricity</h5>
    //                 <p>Adipiscing elait, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    //             </div>

    //         </div>
    //         <div className='solar1pic col-lg-6 overlay'>
    //             {/* <img src={solar1} alt="Solar company img" /> */}

    //             <img src={solar2} alt="solar company person"/>
    //             </div>

    //         </div>

    //     </div>

    //     <div className='container quiltycontainer'>
    //         <div className='row'>
    //             <div className='col-lg-5 durability'>
    //                 <div className='impact'>
    //                 <h3>Maximum Durability</h3><br />
    //                 <p>Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
    //                     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    //                     ullamco.<br /> <br />
    //                     Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
    //                     magna aliqua. Ut enim ad minim veniam.</p>
    //                 </div>
    //             </div>
    //             <div className='col-lg-7 platesss'>
    //                 <img src={plates} alt="Solar plates" />
    //             </div>
    //         </div>
    //     </div>

    //     <div className='container quiltycontainer'>
    //         <div className='row'>
    //         <div className='col-lg-7 platess1'>
    //                 <img src={plates} alt="Solar plates" />
    //             </div>
    //             <div className='col-lg-5 durability'>
    //                 <div className='impact'>
    //                 <h3>Less Impact</h3><br />
    //                 <p>Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
    //                     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    //                     ullamco.<br /> <br />
    //                     Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
    //                     magna aliqua. Ut enim ad minim veniam.</p>
    //                 </div>

    //             </div>
    //         </div>
    //     </div>

    //     <div className='container quiltycontainer'>
    //         <div className='row'>
    //             <div className='col-lg-5 durability'>
    //                 <h3>No Leaks</h3><br />
    //                 <p>Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
    //                     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    //                     ullamco.<br /> <br />
    //                     Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
    //                     magna aliqua. Ut enim ad minim veniam.</p>
    //             </div>
    //             <div className='col-lg-7 platesss'>
    //                 <img src={plates} alt="Solar plates" />
    //             </div>
    //         </div>
    //     </div>

    //     <div className='bgwhite'>
    //         <div className='exp'>
    //         <div className='container'>
    //         <div className='row'>
    //             <div className='col-lg-12  expertt'>
    //             <p>CONTACT OUR EXPERT</p><br />
    //         <h1>Get Your Instant<br />Free Quote Now</h1>
    //       <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    //             magna <br />aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/>
    //             ullamco .</p>
    //             <button>Request Qoute</button>
    //             </div>
    //         </div>
    //     </div>
    //         </div>

    //     </div>

    //     </div>
  );
}
