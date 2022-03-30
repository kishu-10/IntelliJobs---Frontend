import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { showError, showSuccess } from "../../utils/toast";

const EditAddress = () => {
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const result = await axios.get(
          `http://127.0.0.1:8000/api/users/profile/address/update-${userId}/`,
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
    const fetchProvincesAndDistricts = async () => {
      try {
        const provinceList = await axios.get(
          `http://127.0.0.1:8000/api/users/provinces/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const districtList = await axios.get(
          `http://127.0.0.1:8000/api/users/districts/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setProvinces(provinceList.data.data);
        setDistricts(districtList.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserProfile();
    fetchProvincesAndDistricts();
  }, [userId]);

  function handleChange(event) {
    let value = event.target.value;
    if (event.target.name === "province") {
      value = parseInt(event.target.value);
    } else if (event.target.name === "district") {
      value = parseInt(event.target.value);
    }
    setUser({
      ...user,
      [event.target.name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: `http://127.0.0.1:8000/api/users/profile/address/update-${userId}/`,
      data: user,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        showSuccess("Address has been updated.");
        setUser(response.data.data);
      })
      .catch((error) => {
        showError(error.response.data.data.message[0]);
      });
  }

  if (user && provinces) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="section--profile address-form">
          <h3 className="text-primary">Address</h3>
          <p className="title-desc">
            Edit your address, like your district, city and area
          </p>

          <div className="form-row form-group">
            <div className="col-md-3">
              <label>Province</label>
            </div>
            <div className="col-md-4">
              <select
                name="province"
                className="form-control"
                value={user.province}
                onChange={handleChange}
              >
                {provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row form-group">
            <div className="col-md-3">
              <label>District</label>
            </div>
            <div className="col-md-4">
              <select
                name="district"
                className="form-control"
                value={user.district}
                onChange={handleChange}
              >
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row form-group">
            <div className="col-md-3">
              <label>City</label>
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                type="text"
                name="city"
                value={user.city}
                onChange={handleChange}
              />
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
                name="area"
                value={user.area}
                onChange={handleChange}
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
                name="description"
                value={user.description}
                onChange={handleChange}
              />
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

export default EditAddress;
