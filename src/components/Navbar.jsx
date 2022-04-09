import { React, useEffect } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../features/users";

const Navbar = () => {
  const user = useSelector((state) => state.user.value);

  const logoutUser = () => {
    localStorage.clear();
    window.location.replace("http://127.0.0.1:8000/dashboard/logout/");
  };

  const redirectToDashboard = () => {
    window.location.replace("http://127.0.0.1:8000/dashboard/");
  };
  const userId = localStorage.getItem("userId");

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(
          `http://127.0.0.1:8000/api/users/detail-${userId}/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        dispatch(login(result.data.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [userId, dispatch]);

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
                {user.user_type === "Candidate" ? (
                  <Link to="/resume">Resume</Link>
                ) : (
                  <Link to="/document">Document</Link>
                )}
              </li>
            </ul>
            <ul className="list list-inline">
              <li>
                <div className="dropdown dropdown-profile">
                  <Icon
                    icon="carbon:user-avatar"
                    className="navbar-icon ml-2"
                  />
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-profile">
                    <Link className="dropdown-item" to="/profile">
                      <p className="mb-1">{user.name}</p>
                      <p>{user.email}</p>
                    </Link>
                    {user.user_type === "Organization" ? (
                      <Link
                        className="dropdown-item"
                        to=""
                        onClick={redirectToDashboard}
                      >
                        Dashboard
                      </Link>
                    ) : (
                      <Link className="dropdown-item" to="/profile">
                        Account Settings
                      </Link>
                    )}
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
