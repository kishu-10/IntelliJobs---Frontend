import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { showError, showSuccess } from "../../utils/toast";

const UserCV = () => {
  const userId = useMemo(() => localStorage.getItem("userId"), []);
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const result = await axios.get(
          `http://127.0.0.1:8000/api/users/candidate-cv/${userId}/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setState(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJob();
  }, [userId]);

  const handleSubmit = (file) => {
    const formData = new FormData();
    formData.append("cv", file);
    axios({
      method: "post",
      url: `http://127.0.0.1:8000/api/users/candidate-cv/${userId}/`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        showSuccess("New Cv added successfully.");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        showError("Please upload a valid file.");
      });
  };

  return (
    <div className="section--profile">
      <h3 className="text-primary">Curriculum Vitae</h3>
      <p className="title-desc">Upload your CVs to apply for the jobs easily</p>

      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            {state.map((state) => (
              <a
                key={state.id}
                className="btn btn-outline-primary col-md-3 ml-3 mb-3"
                href={state.cv}
                target="_blank"
                rel="noreferrer"
              >
                <div className="align-vertical justify-content-center pt-2 pb-2">
                  <p className="font-14">
                    <Icon
                      icon="icomoon-free:files-empty"
                      className="mr-2"
                      fontSize={20}
                    />
                    {state.file_name}
                  </p>
                </div>
              </a>
            ))}
            <label
              className="btn btn-outline-gray col-md-3 ml-3 mb-3"
              htmlFor="img-upload1"
            >
              <div className="align-vertical justify-content-center pt-2">
                <form>
                  <input
                    className="d-none imgUpload"
                    type="file"
                    name="cv"
                    id="img-upload1"
                    onChange={(e) => {
                      handleSubmit(e.target.files[0]);
                    }}
                  />
                  <label className="font-14">
                    <Icon
                      icon="icomoon-free:files-empty"
                      className="mr-2"
                      fontSize={20}
                    />
                    Add CV
                  </label>
                </form>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCV;
