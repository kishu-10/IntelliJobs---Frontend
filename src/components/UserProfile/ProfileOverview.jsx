import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const ProfileOverview = () => {
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const result = await axios.get(
          `http://127.0.0.1:8000/api/users/profile-${userId}/`,
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
                  <h4 className="text-muted">Personal Info</h4>
                </div>
                <div className="grid grid-list">
                  <div className="row card-info">
                    <div className="col-lg-4">
                      <h6 className="label">Photo</h6>
                    </div>
                    <div className="col-lg-4">
                      <ul className="list list-inline list--image">
                        {user.display_picture ? (
                          <li className="image">
                            <img alt="" src={user.display_picture} />
                          </li>
                        ) : (
                          <li className="image">
                            <span
                              className="ic-user-avatar"
                              id="default-avatar"
                            ></span>
                          </li>
                        )}
                        <li className="btn-upload">
                          <form method="post" encType="multipart/form-data">
                            <input
                              className="d-none imgUpload"
                              type="file"
                              accept="image/*"
                              id="img-upload1"
                              placeholder=""
                              name="display_name"
                            />
                            <label
                              className="btn btn-sm btn-outline-gray"
                              htmlFor="img-upload1"
                            >
                              Change Image
                            </label>
                          </form>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row card-info">
                    <div className="col-lg-4">
                      <h6 className="label">Name</h6>
                    </div>
                    <div className="col-lg-4">{user.name}</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>Loading ...</>;
};

export default ProfileOverview;
