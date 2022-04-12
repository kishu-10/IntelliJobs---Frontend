import Footer from "./Footer";
import Navbar from "./Navbar";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { showError, showSuccess } from "../utils/toast";
import { Modal } from "@mantine/core";

const JobDetail = () => {
  const userId = useMemo(() => localStorage.getItem("userId"), []);
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [opened, setOpened] = useState(false);
  const [cvs, setCvs] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchJob = useCallback(async () => {
    try {
      const result = await axios.get(
        `http://127.0.0.1:8000/api/jobs/detail/${jobId}/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setJob(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [jobId]);

  useEffect(() => {
    fetchJob();
  }, [fetchJob]);

  const fetchCV = async () => {
    try {
      const result = await axios.get(
        `http://127.0.0.1:8000/api/users/candidate-cv/${userId}/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setCvs(result.data.data);
    } catch (error) {
      console.log(error);
    }
    console.log(cvs);
  };

  const removeClass = () => {
    var elements = document.querySelectorAll(".btn-cv");
    [].forEach.call(elements, function (el) {
      el.classList.add("btn-outline-primary");
      el.classList.remove("btn-primary");
    });
  };
  const selectCv = (index) => {
    setSelected(index);
    const element = document.getElementById(index);
    removeClass();
    element.classList.add("btn-primary");
    element.classList.remove("btn-outline-primary");
  };

  const addToWishlist = () => {
    const formData = new FormData();
    formData.append("job", jobId);
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/jobs/wishlist/add/",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        fetchJob();
        showSuccess(response.data.data.message);
      })
      .catch((error) => {
        showError("Error");
      });
  };

  const applyForJob = () => {
    const jsonData = {
      cv: selected,
      job: jobId,
    };
    if (!selected) {
      showError("CV must be selected.");
    } else {
      console.log(jsonData);
      axios({
        method: "post",
        url: `http://127.0.0.1:8000/api/jobs/apply/`,
        data: jsonData,
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          showSuccess("Applicaiton sent successfully.");
          fetchJob();
          setOpened(false);
        })
        .catch((error) => {
          console.log(error.response);
          showError(
            error.response.data.data.message
              ? error.response.data.data.message[0]
              : "Error"
          );
        });
    }
  };

  if (job) {
    return (
      <>
        <Modal
          size="60%"
          centered
          opened={opened}
          onClose={() => setOpened(false)}
          title={`Apply For ${job.title}?`}
        >
          <hr />
          <p className="text-primary font-weight-bold mb-2 ml-2">
            Select your CV
          </p>
          <div className="row">
            {cvs.map((cv) => (
              <button
                key={cv.id}
                id={cv.id}
                className="btn btn-cv btn-outline-primary col-md-3 ml-3 mb-3"
                onClick={() => selectCv(cv.id)}
              >
                <div className="align-vertical justify-content-center pt-2 pb-2">
                  <p className="font-14">
                    <Icon
                      icon="icomoon-free:files-empty"
                      className="mr-2"
                      fontSize={20}
                    />
                    {cv.file_name}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <div className="col-md-9 offset-md-10 pl-5">
            <button
              className="btn btn-primary ml-4"
              onClick={() => applyForJob()}
            >
              Apply
            </button>
          </div>
        </Modal>
        <Navbar />
        <div className="row">
          <div className="job-detail-head">
            <img className="img-fluid" src={job.category.image} alt="" />
            <div className="col-lg-8">
              <div className="job-title-div">
                <div className="job-title-desc">
                  <h1>{job.title}</h1>
                  <h3 className="mt-3">{job.organization}</h3>
                  <p className="text-justify">{job.org_description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="job-detail-section">
          <div className="container job-detail-container pl-5">
            <div className="row">
              <div className="col-lg-9 ml-3">
                <h2 className="txt-primary pt-3">About Job</h2>
                <div className="row">
                  <div className="col-md-4 col-sm-6 mb-3">
                    <div className="card-job-detail">
                      <p>Job Category</p>
                      <p className="txt-primary">{job.category.name}</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-3">
                    <div className="card-job-detail">
                      <p>No. of Vacancy</p>
                      <p className="txt-primary">{job.no_of_vacancy}</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-3">
                    <div className="card-job-detail">
                      <p>Employment Type</p>
                      <p className="txt-primary">{job.employment_type}</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-3">
                    <div className="card-job-detail">
                      <p>Job Location</p>
                      <p className="txt-primary">{job.job_address}</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-3">
                    <div className="card-job-detail">
                      <p>Offered Salary</p>
                      <p className="txt-primary">{job.offered_salary}</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-3">
                    <div className="card-job-detail">
                      <p>Level</p>
                      <p className="txt-primary">{job.job_level}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 ml-5">
                <div className="job-detail-actions">
                  <Icon
                    icon={`${
                      job.is_wishlist
                        ? "fa-solid:bookmark"
                        : "fa-regular:bookmark"
                    }`}
                    className="ml-3 mr-2"
                    style={{ cursor: "pointer", color: "var(--primary)" }}
                    onClick={() => addToWishlist()}
                  />
                  {job.has_applied ? (
                    <button className="btn btn-primary ml-4" disabled>
                      Applied
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary ml-4"
                      onClick={() => {
                        setOpened(true);
                        fetchCV();
                      }}
                    >
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="job-detail-desc">
                <h2>Qualification & Experience</h2>
                <h4>Education Level</h4>
                <ul>
                  <li>{job.education_level}</li>
                </ul>
                <h4>Experience Required</h4>
                <ul>
                  <li>{job.experienced_required} years</li>
                </ul>
              </div>
              <div className="job-detail-desc">
                <h2>Job Description</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: job.description }}
                ></div>
              </div>
              <div className="job-detail-desc">
                <h2>Required Skills</h2>
                <div dangerouslySetInnerHTML={{ __html: job.skills }}></div>
              </div>
              <div className="job-detail-desc">
                <h2>Other Specifications</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: job.other_specification }}
                ></div>
              </div>
              <div className="job-detail-desc">
                <h2>Career Benefits</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: job.career_benefits }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return <></>;
};

export default JobDetail;
