import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user.value);

  const logoutUser = () => {
    localStorage.clear()
  }

  return (
    <nav className="navbar navbar-sticky">
      <div className="container">
        <div className="navbar-wrapper">
          <Link className="navbar-brand mr-lg-5 mr-0" to="/feeds">
            <img src={logo} height="50" alt="" />
          </Link>
          <div className="d-flex align-items-center ml-auto">
            <ul className="list list-inline mr-5 nav-left">
              <li>
                <Link to="/feeds">Home</Link>
              </li>
              <li>
                <Link to="/my-network">My Network</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
              <li>
                {user.user_type==="Candidate"?<Link to="/resume">Resume</Link>:<Link to="/document">Document</Link>}
              </li>
            </ul>
            <ul className="list list-inline">
              <li>
                <Icon
                  icon="clarity:notification-line"
                  className="navbar-icon"
                />
              </li>
              <li>
                <div className="dropdown dropdown-profile">
                  <Icon
                    icon="carbon:user-avatar"
                    className="navbar-icon ml-2"
                  />
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-profile">
                    <a className="dropdown-item" href="#/">
                      <p className="mb-1">Kishu Maharjan</p>
                      <p>{user.email}</p>
                    </a>  
                    <Link className="dropdown-item" to="/register">
                      Register
                    </Link>
                    <Link className="dropdown-item" to="/" onClick={logoutUser}>
                      Logout
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
