import React from "react";

const Certifications = () => {
  return (
    <div>
      <h1 id="Certificate">Certifications</h1>
      <section id="certifications">
        <div className="container1">
          <div className="content">
            <img
              src="assets/project/Designer (9).jpeg"
              alt="Me sitting with a laptop"
              className="aboutImage"
            />
            <ul className="certificationItems">
              <li className="certificationItem">
                <div className="certificationItemText">
                  <p>
                    HTML Course Certification - Open Weaver
                    <br />
                    Certified by Open Weaver for completion of HTML course.
                  </p>
                </div>
              </li>
              <li className="certificationItem">
                <div className="certificationItemText">
                  <p>
                    EducateHacks 2023 - United Latino Students Association
                    <br />
                    Successfully participated in ‘EducateHacks 2023’ organized by United Latino Students Association and contributed significantly to the enhancement of global learning experiences.
                  </p>
                </div>
              </li>
              <li className="certificationItem">
                <div className="certificationItemText">
                  <p>
                    JavaScript Course Certification - Open Weaver
                    <br />
                    Certified by Open Weaver for completion of JavaScript Course.
                  </p>
                </div>
              </li>
              <li className="certificationItem">
                <div className="certificationItemText">
                  <p>
                    Fullstack Developer Course Certification - Udemy
                    <br />
                    Certified by Udemy for completion of Fullstack Developer course.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
