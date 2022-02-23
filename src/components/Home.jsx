import React from "react";
import logo from "../logo.svg";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="section--hero">
        <div className="row row--grey ml-2 mr-2">
          <div className="container container--content col-lg-3 col-md-4 col-3 mt-4">
            <div className="container col-md-6">
              <ul className="list footer--links">
                <li>
                  <a className="navbar-brand mt-3" href="#/">
                    <img src={logo} height="80" alt="" />
                  </a>
                </li>
                <li>Kishu Maharjan</li>
                <li>mhrznkishu.10@gmail.com</li>
                <li>9861233954</li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="container container--content col-lg-5 col-md-6 col-5 ml-2 mr-2 mt-4">
            <div className="row ml-3 mr-3 mt-4">
              <div className="container col-lg-3 col-md-4 col-3">
                <img src={logo} height="70" alt="" />
              </div>
              <div className="container col-lg-8 col-md-9 col-8">
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
            <div className="row ml-3 mr-3 mt-2">
              <div className="container col-lg-3 col-md-4 col-3">
                <div className="row">
                  <img src={logo} height="50" alt="" />
                  <small className="mt-3">Photo</small>
                </div>
              </div>
              <div className="container col-lg-3 col-md-4 col-3">
                <div className="row">
                  <img src={logo} height="50" alt="" />
                  <small className="mt-3">Videos</small>
                </div>
              </div>
              <div className="container col-lg-3 col-md-4 col-3">
                <div className="row">
                  <img src={logo} height="50" alt="" />
                  <small className="mt-3">Article</small>
                </div>
              </div>
            </div>
          </div>
          <div className="container container--content col-lg-3 col-md-4 col-3 mt-4">
            <div className="container col-md-6">
              <ul className="list footer--links">
                <li>
                  <a className="navbar-brand mt-3" href="#/">
                    <img src={logo} height="80" alt="" />
                  </a>
                </li>
                <li>Kishu Maharjan</li>
                <li>mhrznkishu.10@gmail.com</li>
                <li>9861233954</li>
              </ul>
              <hr />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
