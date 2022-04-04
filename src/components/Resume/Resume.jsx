import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";

const Resume = () => {
  const [element, setElement] = useState(null);

  useEffect(() => {
    setElement("profileInfo");
  }, []);

  let renderElement;
  if (element === "profileInfo") {
    renderElement = <PersonalInfo />;
  } else if (element === "resumeEducation") {
    renderElement = <Education />;
  } else if (element === "resumeSkills") {
    renderElement = <Skills />;
  }

  return (
    <>
      <Navbar />
      <div className="container resume-container">
        <div className="row">
          <div className="col-lg-2">
            <div className="sidebar-list">
              <ul className="list">
                <li>
                  <Link
                    className={`sidebar-link ${
                      element === "profileInfo" ? "active" : ""
                    }`}
                    onClick={() => setElement("profileInfo")}
                    to=""
                  >
                    Personal Info
                  </Link>
                </li>
                <li>
                  <Link
                    className={`sidebar-link ${
                      element === "resumeEducation" ? "active" : ""
                    }`}
                    onClick={() => setElement("resumeEducation")}
                    to=""
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    className={`sidebar-link ${
                      element === "resumeSkills" ? "active" : ""
                    }`}
                    onClick={() => setElement("resumeSkills")}
                    to=""
                  >
                    Skills
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-10">
          {renderElement}
          </div>
        </div>
      </div>

      {/* <div className="row row--grey text-center">
      <div className="container row--grey col-lg-3 col-6">
            <div className='resume-sidebar col-lg-8'>
                <p>Personal Details</p>
            </div>
            <div className='resume-sidebar col-lg-8'>
                <p>Education</p>
            </div>
            <div className='resume-sidebar col-lg-8'>
                <p>Skills</p>
            </div>
      </div>
      <div className="container col-lg-9 col-9">
      </div>
    </div> */}
      <Footer />
    </>
  );
};

export default Resume;
