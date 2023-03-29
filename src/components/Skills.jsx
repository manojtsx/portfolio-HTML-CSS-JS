import React from "react";

const Skills = () => {
  return (
    <>
      {/* <!-- My Skill Section Start --> */}
      {/* <!-- Section Tag and Other Div will same where we need to put same CSS --> */}
      <section className="skills" id="skills">
        <div className="content">
          <div className="title">
            <span>My Skills</span>
          </div>
          <div className="skills-details">
            <div className="text">
              <div className="topic">Skills Reflects Our Knowledge</div>
              <p>
                HTML, CSS, JavaScript, ReactJS, PHP, SQL, C, C++ and Java with
                Data Structure and Algorithms.
              </p>
              <div className="experience">
                <div className="num">03</div>
                <div className="exp">
                  Years Of <br />
                  Experience
                </div>
              </div>
            </div>
            <div className="boxes">
              <div className="box">
                <div className="topic">HTML</div>
                <div className="per">90%</div>
              </div>
              <div className="box">
                <div className="topic">CSS</div>
                <div className="per">80%</div>
              </div>
              <div className="box">
                <div className="topic">JavScript</div>
                <div className="per">70%</div>
              </div>
              <div className="box">
                <div className="topic">PHP</div>
                <div className="per">60%</div>
              </div>
              <div className="box">
                <div className="topic">SQL</div>
                <div className="per">60%</div>
              </div>
              <div className="box">
                <div className="topic">C/C++</div>
                <div className="per">60%</div>
              </div>
              <div className="box">
                <div className="topic">Java</div>
                <div className="per">50%</div>
              </div>
              <div className="box">
                <div className="topic">React</div>
                <div className="per">60%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
