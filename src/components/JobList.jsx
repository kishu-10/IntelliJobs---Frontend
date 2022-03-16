import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import image from "../assets/post-image.png";
import axios from "axios";
import Job from "./Job";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      const result = await axios.get(`http://127.0.0.1:8000/jobs/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setJobs(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />
      <div className="row">
        <div className="job-detail-head">
          <img className="img-fluid" src={image} alt="" />
          <div className="col-lg-8">
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
                  <option value="" disabled selected>
                    Select Job Category
                  </option>
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
            {jobs.map((job) => {
              <Job jobs={job} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobList;
