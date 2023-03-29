import React from "react";

const About = () => {
  return (
    <>
      {/* <!-- About Section Start --> */}
      <section className="about" id="about">
        <div className="content">
          <div className="title">
            <span>About Me</span>
          </div>
          <div className="about-details">
            <div className="left">
              <img src="src/Images/about.png" alt="" />
            </div>

            <div className="right">
              <div className="topic">Web developing is my passion</div>
              <p>
                Hello! It's me Manoj Shrestha. I've completed my school level
                from Indreni Sky Boarding School and +2 Science from Notre Dame
                Science Secondary School. I have been gaining interest in coding
                recently. Till now I have learned HTML, CSS, JavaScript, jQuery,
                PHP, SQL, C, C++ and Python with Data Structure and Algorithms.
                I have built some projects recently.
              </p>
              <div className="button">
                <a
                  href="src/files/cv.pdf"
                  download="manoj_cv.pdf"
                  className="cv"
                  title="You can download my CV here"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
