import React from "react";

const ProfileOverview = () => {
  return (
    <div className="section--profile">
      <h3 className="text-primary">Overview</h3>
      <p className="title-desc">
        Basic info, like your name, email, also recent orders and shipping
        adresses.
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
                      <li className="image">
                        <img className="d-none" alt="" />
                        <button className="close d-none" id="file-btn">
                          <span className="ic-close"></span>
                        </button>
                        <span
                          className="ic-user-avatar"
                          id="default-avatar"
                        ></span>
                      </li>
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
                  <div className="col-lg-4">Kishu Maharjan</div>
                </div>
                <div className="row card-info">
                  <div className="col-lg-4">
                    <h6 className="label">Email</h6>
                  </div>
                  <div className="col-lg-4">mhrznkishu.10@gmail.com</div>
                </div>
                <div className="row card-info">
                  <div className="col-lg-4">
                    <h6 className="label">Gender</h6>
                  </div>
                  <div className="col-lg-4">
                    <div>Male</div>
                  </div>
                </div>
                <div className="row card-info">
                  <div className="col-lg-4">
                    <h6 className="label">Mobile</h6>
                  </div>
                  <div className="col-lg-4">9851219269</div>
                </div>
                <div className="row card-info">
                  <div className="col-lg-4">
                    <h6 className="label">Birthday</h6>
                  </div>
                  <div className="col-lg-4">
                    <div>Dec. 24, 1998</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
