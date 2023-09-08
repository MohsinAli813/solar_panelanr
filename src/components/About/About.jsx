import React from "react";
import "./About.css";

function About() {
  const handleButtonClick = () => {
    window.location.href = '/Qoute1'; // Navigate to the new page
  };
  return (
    <div>
      <section className="about_section_one">
        <div className="container-fluid">
          <div className="about_sec1_text_div">
            <h1>About Us</h1>
            <p className=" About-p">
              Tesla Landscaping is a licensed landscaping contractor, Lic #
              1084935, with high tech and best resources from all across the
              world. We serve San Francisco Bay Area majorly with dedication and
              professionalism. We do both landscaping design and installation
              for our clients. Our installation crews have long time landscaping
              experience, and are ones of the best landscaping installer in Bay
              Area of San Francisco. Our landscaping installation selections
              includes pavers, turf, retaining wall, irrigation, outdoor tiles,
              french drain, pergola, BBQ and sunroom that is made up of Low e
              glass and the best aluminum. Our contact email address is
              teslalandscapinginfo@gmail.com. you are welcome anytime to consult
              us about your landscaping projects.
            </p>
          </div>
        </div>
      </section>
      <section className="about_section_two">
        <div className="container-fluid">
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
              <div className="about_sec2_card_body" style={{border:"none"}}>
                <h4>Pergola, BBQ and Sunroom</h4>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_section_three">
        <div className="container-fluid">
            <div className="about_sec_three_text">
                <p className="about-sec-three-text-p">CONTACT OUR EXPERT</p>
                <h1>Get Your Instant Free Quote Now</h1>
                <p className="about-sec-three-text-p">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco.</p>
                <button className="about_button" onClick={handleButtonClick}>Request Qoute</button>
            </div>
        </div>
      </section>
    </div>
  );
}

export default About;
