import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import avatar from "../assets/avatar.png";
import { Icon } from "@iconify/react";
import image from "../assets/post-image.png";

const Jobs = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="job-detail-head">
          <img className="img-fluid" src={image} alt="" />
          <div class="col-lg-8">
            <div className="job-title-div">
              <div className="job-title-desc">
                <h1>Your Dream Job is Waiting ...</h1>
                <p>Search Between More Than 50,000 Open Jobs</p>
              </div>
            </div>
            <div className="row job-filter-row">
              <div className="col-md-3 job-filter-col">
                <input type="text" placeholder="Job Title" />
              </div>
              <div className="col-md-3 job-filter-col">
                <input type="text" placeholder="Job Address" />
              </div>
              <div className="col-md-3 job-filter-col">
                <select name="job-category">
                <option value="" disabled selected>Select Job Category</option>
                    <option value="it">Information Technology</option>
                    <option value="it">Information Technology</option>
                    <option value="it">Information Technology</option>
                </select>
              </div>
              <div className="col-md-3 job-filter-col">
                <button className="btn btn-primary" type="submit">
                  Find Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row--grey">
        <div className="container container--grey col-lg-8">
          <div className="grid grid-list">
            <div className="d-flex jobs-list-row">
              <div className="col-lg-1">
                <a className="navbar-brand" href="#/">
                  <img src={avatar} height="90" alt="" />
                </a>
              </div>
              <div className="col-md-8 jobs-desc-col">
                <p className="font-weight-bold text-info font-16">
                  Python Django Intern
                </p>
                <small className="text-muted font-12">
                  Feb 28, 2022 <Icon icon="carbon:dot-mark" /> 6 Applied
                </small>
                <div className="row jobs-desc-row">
                  <div className="col-lg-4">
                    <p>Location</p>
                    <p className="text-primary">Jawalakhel, Lalitpur</p>
                  </div>
                  <div className="col-lg-4">
                    <p>Experience</p>
                    <p className="text-primary">4-5 Years</p>
                  </div>
                  <div className="col-lg-4">
                    <p>Job Type</p>
                    <p className="text-primary">Full-Time</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 font-16">
                <div className="job-action-button">
                  <button className="btn btn-primary">Details</button>
                </div>
              </div>
            </div>
            <div className="d-flex jobs-list-row">
              <div className="col-lg-1">
                <a className="navbar-brand" href="#/">
                  <img src={avatar} height="90" alt="" />
                </a>
              </div>
              <div className="col-md-8 jobs-desc-col">
                <p className="font-weight-bold text-info font-16">
                  Python Django Intern
                </p>
                <small className="text-muted font-12">
                  Feb 28, 2022 <Icon icon="carbon:dot-mark" /> 6 Applied
                </small>
                <div className="row jobs-desc-row">
                  <div className="col-lg-4">
                    <p>Location</p>
                    <p className="text-primary">Jawalakhel, Lalitpur</p>
                  </div>
                  <div className="col-lg-4">
                    <p>Experience</p>
                    <p className="text-primary">4-5 Years</p>
                  </div>
                  <div className="col-lg-4">
                    <p>Job Type</p>
                    <p className="text-primary">Full-Time</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 font-16">
                <div className="job-action-button">
                  <button className="btn btn-primary">Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;
