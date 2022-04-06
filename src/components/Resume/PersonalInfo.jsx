import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PersonalInfo = () => {
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const result = await axios.get(
          `http://127.0.0.1:8000/api/users/profile/update-${userId}/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setUser(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserProfile();
  }, [userId]);

  function handleChange(event) {
    const value = event.target.value;
    setUser({
      ...user,
      [event.target.name]: value,
    });
  }
  if (user) {
    return (
      <div className="section--profile">
        <h3 className="text-primary">Overview</h3>
        <p className="title-desc">
          Basic info, like your name, email and phone no.
        </p>

        <div className="row">
          <div className="col-lg-9">
            <div className="card card--profile">
              <div className="card-body">
                <div className="card-title">
                  <h4 className="text-primary">Personal Info</h4>
                </div>
                <div className="grid grid-list">
                  <div className="row card-info">
                    <div className="col-lg-4">
                      <h6 className="label">Name</h6>
                    </div>
                    <div className="col-lg-4">
                      {user.first_name}{" "}
                      {user.middle_name ? user.middle_name : ""}{" "}
                      {user.last_name}
                    </div>
                  </div>
                  <div className="row card-info">
                    <div className="col-lg-4">
                      <h6 className="label">Email</h6>
                    </div>
                    <div className="col-lg-4">{user.email}</div>
                  </div>
                  <div className="row card-info">
                    <div className="col-lg-4">
                      <h6 className="label">Gender</h6>
                    </div>
                    <div className="col-lg-4">
                      <div>{user.gender}</div>
                    </div>
                  </div>
                  <div className="row card-info">
                    <div className="col-lg-4">
                      <h6 className="label">Mobile</h6>
                    </div>
                    <div className="col-lg-4">{user.mobile_number}</div>
                  </div>
                  <div className="row card-info">
                    <div className="col-lg-4">
                      <h6 className="label">Birthday</h6>
                    </div>
                    <div className="col-lg-4">
                      <div>{user.dob}</div>
                    </div>
                  </div>
                </div>
                <div className="card-title mt-5">
                  <h4 className="text-primary">Additional Info's</h4>
                </div>
                <div className="form-row form-group">
                  <div className="col-md-4">
                    <label>Profession</label>
                    <input
                      className="form-control"
                      type="text"
                      name="profession"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label>LinkedIn</label>
                    <input
                      className="form-control"
                      type="text"
                      name="linkedin"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Portfolio Website</label>
                    <input
                      type="text"
                      className="form-control"
                      name="website"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row mt-4">
                  <div className="col-md-9 font-14 offset-md-10">
                    <Link type="submit" className="text-primary ml-3" to="">
                      Save Changes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>Loading ...</>;
};

export default PersonalInfo;
