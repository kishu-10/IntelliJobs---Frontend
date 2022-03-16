import React from "react";
import avatar from "../assets/avatar.png";
import { Icon } from "@iconify/react";

const Job = ( {jobs} ) => {
  return (
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
  );
};

export default Job;
