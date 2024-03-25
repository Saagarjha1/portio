import React from "react";

const About = () => {
  return (
    <section id="about">
      <h1>About</h1>
      <div className="container1">
        <div className="content">
          <img
            src="assets/AI_Generated_Image_2024-01-21_443567060035201.png"
            alt="Me sitting with a laptop"
            className="aboutImage"
          />
          <ul className="aboutItems">
            <li className="aboutItem">
              <div className="aboutItemText">
                <h3>Introduction</h3>
                <p>
                Greetings!I am Sagar Kumar Indra Jha, a name synonymous with passion and dedication in the realm of technology. Currently pursuing a Bachelor of Technology in Computer Science Engineering at Amity University, Mumbai, I have nurtured a profound understanding of computer science fundamentals and sharpened my problem-solving acumen through immersive learning experiences.
                </p>
              </div>
            </li>
            <li className="aboutItem">
              <div className="aboutItemText">
                <h3>Unveiling the Power of AI, ML, and Data Science</h3>
                <p>
                Driven by an insatiable curiosity for innovation, I am drawn to the captivating world of artificial intelligence, machine learning, and data science. This fascination fuels my relentless pursuit to unravel the mysteries of AI algorithms and harness the transformative potential of data-driven insights. With each endeavor, I strive to push the boundaries of what's possible and chart new frontiers in technological advancement.


                </p>
              </div>
            </li>
            <li className="aboutItem">
              <div className="aboutItemText">
                <h3>Mastering the Art of Fullstack Development</h3>
                <p>
                In the realm of full-stack web development, I am a virtuoso where creativity meets technical prowess. From crafting mesmerizing user interfaces to engineering robust backend systems, I excel in orchestrating digital symphonies that resonate with users on a profound level. Join me on this journey of passion, expertise, and innovation as we navigate the dynamic landscape of technology together. Explore my portfolio and witness firsthand the culmination of my endeavors.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
