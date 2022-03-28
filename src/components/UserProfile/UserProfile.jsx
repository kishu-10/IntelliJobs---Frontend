import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import ProfileOverview from "./ProfileOverview";
import EditUserProfile from "./EditUserProfile";

const UserProfile = () => {
  const [element, setElement] = useState(null);
  
  useEffect(() => {
    setElement("profileOverview");
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-3">
            <div className="sidebar-list">
              <ul className="list">
                <li>
                  <Link
                    className={`sidebar-link ${element==="profileOverview" ? "active" : ""}`}
                    onClick={() => setElement("profileOverview")}
                    to=""
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    className={`sidebar-link ${element==="editProfile" ? "active" : ""}`}
                    onClick={() => setElement("editProfile")}
                    to=""
                  >
                    Personal Info
                  </Link>
                </li>
                <li>
                  <Link className="sidebar-link " to="/user/shipping-address/">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9" id="profileDetails">
            {element === "profileOverview" ? (
              <ProfileOverview />
            ) : (
              <EditUserProfile />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
