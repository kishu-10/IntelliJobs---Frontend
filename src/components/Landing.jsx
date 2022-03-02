import React from "react";
import logo from "../logo-lg.png";
import avatar from "../assets/avatar.png";
const Landing = () => {
  return (
    <>
      <div className="row landing-page-row">
        <div className="col-lg-5 landing-page-container"></div>
        <div className="col-lg-7">
          <div className="landing-page-nav">
            <span className="mr-4">Login</span>
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <div className="landing-page-info">
            <img src={logo} alt="logo" height="150" />
            <h1 className="landing-page-title">IntelliJobs</h1>
            <h2>Let us "build" a job for you !</h2>
          </div>
          <div className="row text-center ml-1">
            <div className="container landing-page-col col-lg-3 col-6">
              <div>
                  <img src={avatar} height="80" alt="" />
              </div>
              <div>
                <ul className="list font-14 mt-2">
                  <li><p className="font-weight-bold">Lorem Ipsum</p></li>
                  <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus doloribus, corporis expedita provident accusamus.</p></li>
                </ul>
              </div>
            </div>
            <div className="container landing-page-col col-lg-3 col-6">
              <div>
                  <img src={avatar} height="80" alt="" />
              </div>
              <div>
                <ul className="list font-14 mt-2">
                  <li><p className="font-weight-bold">Lorem Ipsum</p></li>
                  <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus doloribus, corporis expedita provident accusamus.</p></li>
                </ul>
              </div>
            </div>
            <div className="container landing-page-col col-lg-3 col-6">
              <div>
                  <img src={avatar} height="80" alt="" />
              </div>
              <div>
                <ul className="list font-14 mt-2">
                  <li><p className="font-weight-bold">Lorem Ipsum</p></li>
                  <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus doloribus, corporis expedita provident accusamus.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
