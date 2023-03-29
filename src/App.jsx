import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./css/style.css";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Quotes from "./components/Quotes";
import { useEffect, useState } from "react";
import MoveToUp from "./components/MoveToUp";
import WaterBubble from "./components/WaterBubble";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [isSticky]);

  return (
    <>
      <WaterBubble />
      <Navbar isSticky={isSticky} />
      <HeroSection />
      <About />
      <Quotes />
      <Skills />
      <Services />
      <Contact />
      <Project />
      <Footer />
      <MoveToUp isSticky={isSticky} />
    </>
  );
}

export default App;
