import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import avatar from "../assets/avatar.png";

const Network = () => {
  return (
    <>
      <Navbar />
      <div className="row--grey">
        <div className="container container--grey col-lg-8">
          <div className="grid grid-list">
            <div className="row jobs-list-row">
              <div className="col-lg-1">
                <a className="navbar-brand" href="#/">
                  <img src={avatar} height="90" alt="" />
                </a>
              </div>
              <div className="col-md-7 ml-4">
                <p className="font-weight-bold text-info">Kishu Maharjan</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  magnam dolorum adipisci iure rerum. Ad fugiat soluta, quia,
                  facere quasi ullam consectetur cupiditate ut id optio dicta
                  eius et eum?
                </p>
              </div>
              <div className="col-lg-2 mr-3">
                <div className="job-action-button">
                  <button className="btn btn-danger">Reject</button>
                </div>
              </div>
              <div className="col-lg-1">
                <div className="job-action-button">
                  <button className="btn btn-primary">Accept</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row network-people-row">
            <div className="card network-people-card col-sm">
              <div>
                <img src={avatar} height="80" alt="" />
              </div>
              <div>
                <ul className="list font-14 mt-2">
                  <li>
                    <p className="font-weight-bold mb-1">Lorem Ipsum</p>
                  </li>
                  <li>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      
                    </p>
                  </li>
                </ul>
                <button className="btn btn-primary connect-people-btn">
                  Connect
                </button>
              </div>
            </div>
            <div className="card network-people-card col-sm">
              <div>
                <img src={avatar} height="80" alt="" />
              </div>
              <div>
                <ul className="list font-14 mt-2">
                  <li>
                    <p className="font-weight-bold mb-1">Lorem Ipsum</p>
                  </li>
                  <li>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      
                    </p>
                  </li>
                </ul>
                <button className="btn btn-primary connect-people-btn">
                  Connect
                </button>
              </div>
            </div>
            <div className="card network-people-card col-sm">
              <div>
                <img src={avatar} height="80" alt="" />
              </div>
              <div>
                <ul className="list font-14 mt-2">
                  <li>
                    <p className="font-weight-bold mb-1">Lorem Ipsum</p>
                  </li>
                  <li>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      
                    </p>
                  </li>
                </ul>
                <button className="btn btn-primary connect-people-btn">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Network;
