
import React, { useRef,useState,useEffect } from "react";

const HeroSection = () => {

  const myRef = useRef(null);
  const [content,setContent] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const textArray = [
    "Web Developer",
    "Frontend Developer",
    "HTML",
    "CSS",
    "ReactJS",
  ];
  useEffect(() => {
    function type() {
      if (charIndex < textArray[textIndex].length) {
        setContent(myRef.textContent += textArray[textIndex].charAt(charIndex));
        setCharIndex(charIndex + 1);
        setTimeout(type, 50);
      } else {
        setTimeout(erase, 3000);
      }
      
    }

    function erase() {
      if (charIndex > 0) {
        setContent(myRef.textContent = textArray[textIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        setTimeout(erase, 30);
      } else {
        setTextIndex((textIndex + 1) % textArray.length);
        if (textIndex >= textArray.length) {
          setTextIndex(0);
        }
        
      }
    }
    setTimeout(type, 3000);
  }, [charIndex, textIndex, textArray]);
  return (
    <>
      {/* <!-- Home Section Start --> */}
      <section className="home" id="home">
        <div className="home-content">
          <div className="text">
            <div className="text-one">Hello,</div>
            <div className="text-two">
              I'm <span className="front">M</span>anoj
              <span className="front">S</span>hrestha
            </div>
            <div className="text-three" ref={myRef}>Web Developer</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
