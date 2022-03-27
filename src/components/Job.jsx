import React from "react";
import avatar from "../assets/avatar.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  return (
    <Link className="d-flex jobs-list-row" to={`/job/${job.id}`}>
      <div className="col-lg-1">
        <div className="navbar-brand org-pic">
          <img src={job.organization_picture?job.organization_picture:avatar} height="90" alt="" />
        </div>
      </div>
      <div className="col-md-8 jobs-desc-col">
        <p className="font-weight-bold text-info font-16">{job.title}</p>
        <small className="text-muted font-12">
          {job.date_created} <Icon icon="carbon:dot-mark" /> 6 Applied
        </small>
        <div className="row jobs-desc-row">
          <div className="col-lg-5">
            <p>Location</p>
            <p className="text-primary">{job.job_address}</p>
          </div>
          <div className="col-lg">
            <p>Experience</p>
            <p className="text-primary">{job.experienced_required} Years</p>
          </div>
          <div className="col-lg">
            <p>Job Level</p>
            <p className="text-primary">{job.job_level}</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 font-16">
        <div className="job-action-button">
          <Link className="btn btn-primary" to={`/job/${job.id}`}>
            Details
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Job;
