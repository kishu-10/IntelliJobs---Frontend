import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import picture from "../assets/picture.png";
import video from "../assets/video.png";
import article from "../assets/article.png";
import avatar from "../assets/avatar.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="section--hero">
        <div className="row row--grey ml-2 mr-2 text-center">
          <div className="container container--content col-lg-3 col-6">
            <div className="container col-md-6 mt-3">
              <a className="navbar-brand" href="#/">
                <img src={avatar} height="80" alt="" />
              </a>
              <ul className="list footer--links mt-3">
                <li className="font-weight-bold">Kishu Maharjan</li>
                <li>mhrznkishu.10@gmail.com</li>
                <li>9861233954</li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="container container--content feeds-posts-container col-lg-5 col-md-6 col-6">
            <div className="row add-status-row">
              <div className="container col-lg-2">
                <img src={avatar} height="90" alt="" />
              </div>
              <div className="container col-lg-9 col-md-9 col-6 mb-4">
                <ul className="list footer--links">
                  <li>
                    <div className="input-group">
                      <textarea
                        className="form-control"
                        placeholder="Enter your status"
                        rows="6"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row add-picture-row">
              <div className="col-lg-4 col-6">
                <img className="mr-1" src={picture} height="50" alt="" />
                <small>Picture</small>
              </div>
              <div className="col-lg-4 col-6">
                <img src={video} height="50" alt="" />
                <small>Videos</small>
              </div>
              <div className="col-lg-4 col-6">
                <img src={article} height="50" alt="" />
                <small>Article</small>
              </div>
            </div>
          </div>
          <div className="container container--content col-lg-3 col-md-6 col-6">
            <div className="font-weight-bold mt-3">
            <span>Job Vacancies</span>
            </div>
            <ul className="list">
              <li>
                <div className="row feeds-job-row">
                  <div className="col-lg-3">
                    <a className="navbar-brand" href="#/">
                      <img src={avatar} height="80" alt="" />
                    </a>
                  </div>
                  <div className="col-lg-8 feeds-job-desc">
                    <p className="font-weight-bold">Python Django Intern</p>
                    <p>Google Inc</p>
                    <p>Jan 5th, 2022</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="row feeds-job-row">
                  <div className="col-lg-3">
                    <a className="navbar-brand" href="#/">
                      <img src={avatar} height="80" alt="" />
                    </a>
                  </div>
                  <div className="col-lg-8 feeds-job-desc">
                    <p className="font-weight-bold">Python Django Intern</p>
                    <p>Google Inc</p>
                    <p>Jan 5th, 2022</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
