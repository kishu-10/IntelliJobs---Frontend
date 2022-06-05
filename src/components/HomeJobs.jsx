import React, { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeJobs = () => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      const result = await axios.get(`http://127.0.0.1:8000/api/jobs/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setJobs(result.data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (jobs) {
    return (
      <div className="container container--content col-lg-3 col-md-6 col-6">
        <div className="font-weight-bold mt-3">
          <span>Recommended Jobs</span>
        </div>
        <ul className="list">
          {jobs.map((job) => (
            <li key={job.id} className="feeds-job-list">
              <Link to={`/job/${job.id}`}>
                <div className="row feeds-job-row">
                  <div className="col-lg-3">
                      <img
                        src={
                          job.organization_picture
                            ? job.organization_picture
                            : avatar
                        }
                        height="90"
                        alt=""
                      />
                  </div>
                  <div className="col-lg-8 feeds-job-desc">
                    <p className="font-weight-bold text-truncate">{job.title}</p>
                    <p>{job.organization}</p>
                    <p>{job.date_created}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <>Loading...</>;
};

export default HomeJobs;
