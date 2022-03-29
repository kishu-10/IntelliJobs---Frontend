import React from "react";
import { Link } from "react-router-dom";

const EditAddress = () => {
  console.log("OK");
  return (
    <div className="section--profile">
      <h3 className="text-primary">Address</h3>
      <p className="title-desc">
        Edit your address, like your district, city and area
      </p>

      <div className="form-row form-group">
        <div className="col-md-3">
          <label>Province</label>
        </div>
        <div className="col-md-4">
          <select className="form-control">
            <option value="">Bagmati</option>
          </select>
        </div>
      </div>
      <div className="form-row form-group">
        <div className="col-md-3">
          <label>District</label>
        </div>
        <div className="col-md-4">
          <select className="form-control">
            <option value="">Kathmandu</option>
          </select>
        </div>
      </div>
      <div className="form-row form-group">
        <div className="col-md-3">
          <label>City</label>
        </div>
        <div className="col-md-4">
          <input className="form-control" type="text" name="last_name" />
        </div>
      </div>
      <div className="form-row form-group">
        <div className="col-md-3">
          <label>Area</label>
        </div>
        <div className="col-md-4">
          <input
            className="form-control"
            type="text"
            name="email"
          />
        </div>
      </div>
      <div className="form-row form-group">
        <div className="col-md-3">
          <label>Other Description</label>
        </div>
        <div className="col-md-4">
          <textarea
            className="form-control"
            type="text"
            rows={4}
            name="mobile_number"
          />
          <p className="error text-danger"></p>
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

export default EditAddress;
