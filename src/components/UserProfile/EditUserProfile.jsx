import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { showError, showSuccess } from "../../utils/toast";

const EditUserProfile = () => {
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

  function handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: `http://127.0.0.1:8000/api/users/profile/update-${userId}/`,
      data: user,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        showSuccess("Profile has been updated.");
        setUser(response.data.data);
      })
      .catch((error) => {
        showError(error.response.data.data.message[0]);
      });
  }

  function handleChange(event) {
    const value = event.target.value;
    setUser({
      ...user,
      [event.target.name]: value,
    });
  }

  const radioInput = (value) => {
    if (user) {
      if (user.gender === value) {
        return (
          <input
            className="form-check-input"
            name="gender"
            type="radio"
            value={value}
            onChange={handleChange}
            checked
          />
        );
      } else {
        return (
          <input
            className="form-check-input"
            name="gender"
            type="radio"
            value={value}
            onChange={handleChange}
          />
        );
      }
    }
  };

  if (user) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="section--profile">
          <h3 className="text-primary">Personal Info</h3>
          <p className="title-desc">
            Edit your info, like your name, email, and phone no.
          </p>

          <div className="form-row form-group">
            <div className="col-md-3">
              <label>First Name</label>
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                type="text"
                name="first_name"
                value={user.first_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row form-group">
            <div className="col-md-3">
              <label>Middle Name</label>
            </div>
            <div className="col-md-4">
              {user.middle_name ? (
                <input
                  className="form-control"
                  type="text"
                  name="middle_name"
                  value={user.middle_name}
                  onChange={handleChange}
                />
              ) : (
                <input
                  className="form-control"
                  type="text"
                  name="middle_name"
                  onChange={handleChange}
                />
              )}
            </div>
          </div>
          <div className="form-row form-group">
            <div className="col-md-3">
              <label>Last Name</label>
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                type="text"
                name="last_name"
                value={user.last_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row form-group">
            <div className="col-md-3">
              <label>Email Address</label>
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row form-group">
            <div className="col-md-3">
              <label>Mobile Number</label>
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                type="number"
                name="mobile_number"
                value={user.mobile_number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row form-group">
            <div className="col-md-3">
              <label>Date of Birth</label>
            </div>
            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                name="dob"
                value={user.dob}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row form-group">
            <div className="col-md-3">
              <label>Gender</label>
            </div>

            <div className="col-md-2 text-gray-600">
              <div className="form-check">
                {radioInput("Male")}
                <label className="form-check-label">Male</label>
              </div>

              <div className="form-check">
                {radioInput("Female")}
                <label className="form-check-label">Female</label>
              </div>

              <div className="form-check">
                {radioInput("Other")}
                <label className="form-check-label">Other</label>
              </div>
            </div>
          </div>
          <div className="form-row form-group">
            <div className="col-md-3">
              <label>Password</label>
            </div>
            <div className="col-md-9">
              <p className="font-14">
                {" "}
                <a className="text-info" href="/user/change-password/">
                  Change Password.
                </a>{" "}
                Improve your security with a strong password.
              </p>
            </div>
          </div>
          <div className="form-row mt-4">
            <div className="col-md-9 offset-md-6">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
              <Link className="btn btn-outline-gray ml-3" to="/feeds">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </form>
    );
  }

  return <>Loading...</>;
};

export default EditUserProfile;
