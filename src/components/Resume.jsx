import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Resume = () => {
  return (
    <>
      <Navbar />
      <div className="container resume-container">
        <div className="row">
          <div className="col-lg-2">
            <div className="sidebar-list">
              <ul className="list">
                <li>
                  <a className="sidebar-link" href="#/">
                    Personal Details
                  </a>
                </li>
                <li>
                  <a className="sidebar-link" href="#/">
                    Education
                  </a>
                </li>
                <li>
                  <a className="sidebar-link" href="#/">
                    Skills
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="section--profile">
              <h2 className="mb-4 text-primary">Resume</h2>
              <div className="accordion accordion-sm" id="faq">
                <div className="card">
                  <div
                    className="card-header"
                    data-toggle="collapse"
                    data-target="#collapse1"
                    aria-expanded="false"
                    aria-controls="collapse1"
                  >
                    <span>Personal Details</span>
                    <i className="ic-chevron-down"></i>
                  </div>
                  <div
                    className="collapse"
                    id="collapse1"
                    aria-labelledby="faq1"
                    data-parent="#faq"
                  >
                    <div className="card-body">
                      <ul className="list list-separator">
                        <li>
                          <p>Answers</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
