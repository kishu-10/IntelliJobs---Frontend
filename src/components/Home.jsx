import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import avatar from "../assets/avatar.png";
import HomePost from "./HomePost";
import HomeJobs from "./HomeJobs";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="row row--grey text-center">
        <div className="container col-lg-3 col-6">
          <div className="container col-lg align-items-center">
            <a className="navbar-brand" href="#/">
              <img src={avatar} height="80" alt="" />
            </a>
            <ul className="list footer--links mt-3">
              <li className="font-weight-bold">Kishu Maharjan</li>
              <li>mhrznkishu.10@gmail.com</li>
            </ul>
            <div className="text-left p-3">
              <hr></hr>
              <ul className="list footer--links ">
                <li className="font-weight-bold">Education</li>
                <li>Lorem: Lorem Ipsum</li>
                <li>Lorem: Lorem Ipsum</li>
              </ul>
              <hr></hr>
              <ul className="list footer--links text-left">
                <li className="font-weight-bold">Skills</li>
                <li>Lorem: Lorem Ipsum</li>
                <li>Lorem: Lorem Ipsum</li>
              </ul>
            </div>
          </div>
        </div>
        <HomePost />
        <HomeJobs />
      </div>
      <Footer />
    </>
  );
};

export default Home;
