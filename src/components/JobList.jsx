import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import image from "../assets/job-list.jpg";
import axios from "axios";
import Job from "./Job";
import { useForm } from "react-hook-form";
import { Pagination } from "@mantine/core";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activePage, setPage] = useState(1);
  const fetchJobs = async () => {
    try {
      const result = await axios.get(`http://127.0.0.1:8000/api/jobs/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const categories = await axios.get(
        `http://127.0.0.1:8000/api/jobs/categories/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setJobs(result.data.data.results);
      setCategories(categories.data.data);
      console.log(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobsPagination = async () => {
    try {
      const result = await axios.get(
        `http://127.0.0.1:8000/api/jobs/?page=${activePage}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(activePage);
      console.log(result.data.data.results, "sd");
      setJobs(result.data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobsPagination();
  }, [activePage]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const jsonData = {
      category: data.category,
      title: data.title,
      address: data.address,
    };
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/jobs/job-search/",
      data: jsonData,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setJobs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row job-filter-row">
                <div className="col-md-3 job-filter-col">
                  <input
                    type="text"
                    {...register("title")}
                    placeholder="Job Title"
                  />
                  {/* <input type="text" placeholder="Job Title" /> */}
                </div>
                <div className="col-md-3 job-filter-col">
                  <input
                    type="text"
                    {...register("address")}
                    placeholder="Job Address"
                  />
                  {/* <input type="text" placeholder="Job Address" /> */}
                </div>
                <div className="col-md-3 job-filter-col">
                  <select defaultValue="" {...register("category")}>
                    <option value="" selected disabled>
                      Job Category
                    </option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-3 job-filter-col">
                  <button className="btn btn-primary" type="submit">
                    Find Job
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row--grey">
        <div className="container container--grey col-lg-8">
          <div className="grid grid-list">
            {jobs.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </div>
          <div className="job-pagination">
            <Pagination page={activePage} onChange={setPage} total={5} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobList;
