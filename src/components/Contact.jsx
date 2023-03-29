import React from "react";

const Contact = () => {
  return (
    <>
      {/* <!-- Contact Me section Start --> */}
      <section className="contact" id="contact">
        <div className="content">
          <div className="title">
            <span>Contact Me</span>
          </div>
          <div className="text">
            <div className="topic">Have Any Project?</div>
            <p>
              Hey guys, If you have any projects feel free to contact me. I will
              make sure we both will learn from each other. You can chat with me
              on Messenger, Call me or Email from below buttons. Note: After
              clicking Let's Chat Click on Messenger icon it will redirect you
              to my messenger account.
            </p>
            <div className="button">
              <a
                href="https://msng.link/o/?remon.343=fm"
                target="_blank"
                title="Chat on Messenger"
              >
                Let's Chat
              </a>
              <a href="tel:+9779816683613">
                <i className="fa fa-phone" title="Call me Personally"></i>
              </a>
              <a
                href="mailto:manojbicte@gmail.com?subject=Forwarded from website"
                title="Email me on Gmail"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
