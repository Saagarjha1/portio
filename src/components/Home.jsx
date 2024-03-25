import React, { useEffect, useRef } from "react";
import pdf from '../pdf/TowerResearch.pdf'
import hero from './data/hero.json'
import Typed from "typed.js";
const Home = () => {

  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to Portio",
        "My Name is Sagar kumar Indra Jha",
        "I'm Fullstack Developer",
        "AIML Developer",
        "Passionate Explorer",
        "Rentless Learner",
        "Innovator",
        "Technologist",
        "Engineer",

      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
    
    </div>
    <div className="right">
       <div className="img">
       <img src={`/assets/${hero.imgSrc}`} alt="hero" />
       </div>
    </div>
   </div>
   </>
  )
}

export default Home