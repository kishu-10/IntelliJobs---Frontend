import React, { useState, useEffect } from "react";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Status = ({ props }) => {
  if (props === "Pending") {
    return <p className="text-secondary">{props}</p>;
  } else if (props === "Rejected") {
    return <p className="text-danger">{props}</p>;
  } else if (props === "Approved") {
    return <p className="text-success">{props}</p>;
  }
  return <></>;
};

const Jobs = (job) => {
  return (
    <Link className="d-flex jobs-list-row" to={`/job/${job.job.job.id}`}>
      <div className="col-lg-1">
          <img
            src={
              job.job.job.organization_picture
                ? job.job.job.organization_picture
                : avatar
            }
            height="100"
            alt=""
          />
      </div>
      <div className="col-md-8 jobs-desc-col">
        <p className="font-weight-bold text-info font-16">
          {job.job.job.title}
        </p>
        <small className="text-muted font-12">
          Applied Date:&nbsp;&nbsp;&nbsp;{job.job.date_created}
        </small>
        <div className="row jobs-desc-row">
          <div className="col-lg-5">
            <p>Location</p>
            <p className="text-primary">{job.job.job.job_address}</p>
          </div>
          <div className="col-lg">
            <p>Experience</p>
            <p className="text-primary">
              {job.job.job.experienced_required} Years
            </p>
          </div>
          <div className="col-lg">
            <p>Job Level</p>
            <p className="text-primary">{job.job.job.job_level}</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 font-16">
        <div className="job-action-button font-weight-bold text-uppercase">
          <Status props={job.job.status} />
        </div>
      </div>
    </Link>
  );
};

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      const result = await axios.get(
        `http://127.0.0.1:8000/api/jobs/applied-jobs/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setJobs(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="section--profile">
      <h3 className="text-primary">Applied Jobs</h3>

      <div className="row">
        <div className="col-lg-12">
          <div className="grid grid-list">
            {jobs
              ? jobs.map((job, index) => <Jobs key={index} job={job} />)
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
