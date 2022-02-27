import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-sticky">
      <div className="container">
        <div className="navbar-wrapper">
          <a className="navbar-brand mr-lg-5 mr-0" href="#/">
            <img src={logo} height="50" alt="" />
          </a>
          <div className="d-flex align-items-center ml-auto">
            <ul className="list list-inline mr-5 nav-left">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#/">My Network</a>
              </li>
              <li>
                <a href="#/">Jobs</a>
              </li>
              <li>
                <Link to="/login">Login </Link>
              </li>
              <li>
                <Link to="/register">Register </Link>
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
                <Icon icon="carbon:user-avatar" className="navbar-icon ml-2" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
