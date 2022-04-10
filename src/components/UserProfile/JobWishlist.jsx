import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Job from "../Job";

const JobWishlist = () => {
  const userId = useMemo(() => localStorage.getItem("userId"), []);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const result = await axios.get(
          `http://127.0.0.1:8000/api/jobs/wishlist/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setJobs(result.data.data.jobs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
  }, [userId]);

  return (
    <div className="section--profile">
      <h3 className="text-primary">Saved Jobs</h3>

      <div className="row">
        <div className="col-lg-12">
          <div className="grid grid-list">
            {jobs?jobs.map((job) => (
              <Job key={job.id} job={job} />
            )):""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobWishlist;
