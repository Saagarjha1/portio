import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; 
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievement from "./components/Achievement";
import Certificate from "./components/Certificate";
import Contact from './components/Contact'
import Aos from "aos";
import "aos/dist/aos.css"
import Achievements from "./components/Achievement";

const App = () => {
  useEffect(() => {
    Aos.init();
    
   }, [])
 
  return (
    <>
      <Navbar />
     <div className="container">
      < Home />
      <About/>
      <Experience />
      <Skills />
      
      <Projects />
      <Achievement/>
      <Certificate/>
      <Contact />
     </div>
    </>
  );
};

export default App;