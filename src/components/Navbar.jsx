import React, { useEffect, useState } from "react";

const Navbar = ({ isSticky }) => {
  const [sideMenuisActive, setSideMenuisActive] = useState(false);
  const [showMove, setShowMove] = useState(false);
  useEffect(() => {
    setShowMove(isSticky);
  }, [isSticky]);

  const openSideMenu = () => {
    setSideMenuisActive(true);
    document.body.style.overflow = "hidden";
  };
  const closeSideMenu = () => {
    setSideMenuisActive(false);
    document.body.style.overflow = "auto";
  };
  return (
    <>
      {/* navgaition menu */}
      <nav className={showMove ? "sticky" : ""}>
        <div className={sideMenuisActive ? "active navbar" : "navbar"}>
          <div className="logo">
            <a href="#">
              M<span className="flip">A</span>NOZ
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="#home" onClick={closeSideMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeSideMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeSideMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeSideMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeSideMenu}>
                Contact
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeSideMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="blog.html" target="_blank" onClick={closeSideMenu}>
                Blog
              </a>
            </li>
            <div className="cancel-btn">
              <i className="fas fa-times" onClick={closeSideMenu}></i>
            </div>
          </ul>
          <div className="media-icons">
            <a
              href="https://www.linkedin.com/in/manoj-shrestha-1637ba219/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/remon343" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div
          className="menu-btn"
          style={{
            opacity: sideMenuisActive ? "0" : "1",
            pointerEvents: sideMenuisActive ? "none" : "auto",
          }}
        >
          <i className="fas fa-bars" onClick={openSideMenu}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
