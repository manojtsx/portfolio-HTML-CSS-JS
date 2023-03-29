import React from "react";

const Services = () => {
  return (
    <>
      {/* <!-- My Services Section--> */}
      <section className="services" id="services">
        <div className="content">
          <div className="title">
            <span>My Services</span>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="icon">
                <i className="fas fa-desktop"></i>
              </div>
              <div className="topic">Web Development</div>
              <p>
                I am a fully fledged web developer about to start my real
                career.
              </p>
            </div>

            <div className="box">
              <div className="icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <div className="topic">UI Designing</div>
              <p>I can handle the user interface through the website.</p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fas fa-book"></i>
              </div>
              <div className="topic">IT Teaching</div>
              <p>I am good at interaction with pupils.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
