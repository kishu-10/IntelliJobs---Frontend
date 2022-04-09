import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import ProfileOverview from "./ProfileOverview";
import EditUserProfile from "./EditUserProfile";
import EditAddress from "./EditAddress";
import UserCV from "./UserCV";
import JobWishlist from "./JobWishlist";

const UserProfile = () => {
  const [element, setElement] = useState(null);

  useEffect(() => {
    setElement("profileOverview");
  }, []);

  let renderElement;
  if (element === "profileOverview") {
    renderElement = <ProfileOverview />;
  } else if (element === "editProfile") {
    renderElement = <EditUserProfile />;
  } else if (element === "editAddress") {
    renderElement = <EditAddress />;
  } else if (element === "userCv") {
    renderElement = <UserCV />;
  } else if (element === "jobWishlist") {
    renderElement = <JobWishlist />;
  }

  return (
    <>
      <Navbar />
      <div className="resume-container">
        <div className="row">
          <div className="col-lg-3">
            <div className="sidebar-list">
              <ul className="list">
                <li>
                  <Link
                    className={`sidebar-link ${
                      element === "profileOverview" ? "active" : ""
                    }`}
                    onClick={() => setElement("profileOverview")}
                    to=""
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    className={`sidebar-link ${
                      element === "editProfile" ? "active" : ""
                    }`}
                    onClick={() => setElement("editProfile")}
                    to=""
                  >
                    Personal Info
                  </Link>
                </li>
                <li>
                  <Link
                    className={`sidebar-link ${
                      element === "editAddress" ? "active" : ""
                    }`}
                    onClick={() => setElement("editAddress")}
                    to=""
                  >
                    Address
                  </Link>
                </li>
                <li>
                  <Link
                    className={`sidebar-link ${
                      element === "userCv" ? "active" : ""
                    }`}
                    onClick={() => setElement("userCv")}
                    to=""
                  >
                    Curriculum Vitae
                  </Link>
                </li>
                <li>
                  <Link
                    className={`sidebar-link ${
                      element === "jobWishlist" ? "active" : ""
                    }`}
                    onClick={() => setElement("jobWishlist")}
                    to=""
                  >
                    Saved Jobs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9" id="profileDetails">
            {renderElement}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
