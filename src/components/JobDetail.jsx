import image from "../assets/post-image.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const result = await axios.get(`http://127.0.0.1:8000/api/jobs/detail/${jobId}/`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setJob(result.data.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchJob();
  }, [jobId]);
  console.log(job)
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="job-detail-head">
          <img className="img-fluid" src={job?job.category.image:image} alt="" />
          <div className="col-lg-6">
            <div className="job-title-div">
              <div className="job-title-desc">
                <h1>{job?job.title:null}</h1>
                <h3>{job?job.organization:null}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  fuga inventore vitae, ab aliquam voluptate veritatis
                  aspernatur voluptas ex praesentium, ducimus consequatur
                  provident quaerat quibusdam repudiandae ea harum nostrum
                  atque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="job-detail-section">
        <div className="container pl-5">
          <div className="row">
            <div className="col-lg-9">
              <h2 className="txt-primary pt-3">About Job</h2>
              <div className="row">
                <div className="col-md-4 col-sm-6 mb-3">
                  <div className="card-job-detail">
                    <p>Job Category</p>
                    <p className="txt-primary">Software Development</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="job-detail-actions">
                <Icon icon="bi:bookmark-check" />
                <button className="btn btn-primary ml-3" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          <div className="job-detail-desc">
            <h2>Qualification & Experience</h2>
            <h4>Education Level</h4>
            <ul>
              <li>Bachelors Degree</li>
            </ul>
            <h4>Education Level</h4>
            <ul>
              <li>Bachelors Degree</li>
            </ul>
          </div>
          <div className="job-detail-desc">
            <h2>Job Description</h2>
            <ul>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JobDetail;
