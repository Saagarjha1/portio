import React from "react";

const Achievements = () => {
  return (
    <div>
      <h1 id="Achievement">Achievements</h1>
      <section className="achievements">
        <ul className="achievementItems">
          <li className="achievementItem">
            <img src="assets/project/achievement/Hm.png" alt="Hm" />
            <div className="achievementItemText">
              <h3>Honorary mention in Bengaluru Open Mobility Challenge 2023</h3>
              <p>Received an honorary mention in the Bengaluru Open Mobility Challenge in 2023 for outstanding contribution.</p>
            </div>
          </li>
          <li className="achievementItem">
            <img src="assets/project/achievement/Designer (4).jpeg" alt="..." />
            <div className="achievementItemText">
              <h3>Actively participated in GNEC Hackathon July 2023</h3>
              <p>Actively participated and contributed in the GNEC Hackathon held in July 2023.</p>
            </div>
          </li>
          <li className="achievementItem">
            <img src="assets/project/achievement/Designer (5).jpeg" alt="..." />
            <div className="achievementItemText">
              <h3>Prize winner at Eduhack Hackathon July 2023</h3>
              <p>Won a prize at the Eduhack Hackathon held in July 2023 for innovative solutions.</p>
            </div>
          </li>
          <li className="achievementItem">
            <img src="assets/project/achievement/Designer (6).jpeg" alt="..." />
            <div className="achievementItemText">
              <h3>Awarded Dr. Ashok K. Chauhan 100 percent Merit Scholarship</h3>
              <p>Awarded the Dr. Ashok K. Chauhan 100 percent Merit Scholarship for academic excellence.</p>
            </div>
          </li>
          <li className="achievementItem">
            <img src="assets/project/achievement/Designer (7).jpeg" alt="..." />
            <div className="achievementItemText">
              <h3>Ranked 5th in GFG Institute Rank for exceptional performance and dedication, March 2024</h3>
              <p>Ranked 5th in the GFG Institute Rank for exceptional performance and dedication in March 2024.</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Achievements;
