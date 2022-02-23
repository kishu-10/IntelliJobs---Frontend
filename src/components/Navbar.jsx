import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-sticky">
      <div className="container">
        <div className="navbar-wrapper">
          <a className="navbar-brand mr-lg-5 mr-0" href="#/">
            <img src={logo} height="60" alt="" />
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
            <ul class="list list-inline">
              <li>
                <a class="nav-link" href="#/">
                  <i class="ic-shopping-cart"></i>
                  <span
                    id="order-badge-count"
                    class="badge-pill badge-primary badge-count"
                  >
                    ?
                  </span>
                </a>
              </li>
              <li>
                <a class="nav-link" href="#/">
                  <i class="ic-user-avatar"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
