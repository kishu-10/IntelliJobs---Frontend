import React from "react";
import { Link } from "react-router-dom";

const EditUserProfile = () => {
  return (
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
          />
        </div>
      </div>
      <div className="form-row form-group">
        <div className="col-md-3">
          <label>Middle Name</label>
        </div>
        <div className="col-md-4">
          <input
            className="form-control"
            type="text"
            name="middle_name"
          />
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
            value=""
            required=""
          />
          <p className="error text-danger"></p>
        </div>
      </div>
      <div className="form-row form-group">
        <div className="col-md-3">
          <label>Mobile No.</label>
        </div>
        <div className="col-md-4">
          <input
            className="form-control"
            type="text"
            name="mobile_number"
            value=""
          />
          <p className="error text-danger"></p>
        </div>
      </div>
      <div className="form-row form-group">
        <div className="col-md-3">
          <label>Date of Birth</label>
        </div>
        <div className="col-md-4">
          <input type="date" className="form-control" />
        </div>
      </div>
      <div className="form-row form-group">
        <div className="col-md-3">
          <label>Gender</label>
        </div>

        <div className="col-md-2 text-gray-600">
          <div className="form-check">
            <input
              className="form-check-input"
              name="gender"
              type="radio"
              value="M"
              checked="checked"
            />
            <label className="form-check-label">Male</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              name="gender"
              type="radio"
              value="F"
            />
            <label className="form-check-label">Female</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              name="gender"
              type="radio"
              value="O"
            />
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
  );
};

export default EditUserProfile;
