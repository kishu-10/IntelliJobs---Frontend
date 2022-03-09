import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
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
                <a href="/my-network">My Network</a>
              </li>
              <li>
                <a href="/jobs">Jobs</a>
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
                <div class="dropdown dropdown-profile">
                <Icon icon="carbon:user-avatar" className="navbar-icon ml-2" />
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-profile">
                    <a class="dropdown-item" href="#/">
                      <p class="mb-1">Kishu Maharjan</p>
                      <p>mhrznkishu.10@gmail.com</p>
                    </a>
                    <Link class="dropdown-item" to="/login">
                      Login
                    </Link>
                    <Link class="dropdown-item" to="/register">
                      Register
                    </Link>
                    <Link class="dropdown-item" to="/">
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
