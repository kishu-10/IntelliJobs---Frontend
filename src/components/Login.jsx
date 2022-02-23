import axios from "axios";
import React, { useState } from "react";
import logo from "../logo.svg";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    username: username,
    password: password,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("", { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <div className="auth--wrapper">
      <div className="auth--logo">
        <a href="#/">
          <img src={logo} alt="Ecommerce logo" height="100" />
        </a>
      </div>
      <div className="auth--head">
        <h3 className="mb-1">Login</h3>
        <div className="d-flex align-items-center justify-content-between font-14">
          <span className="text-gray-500">Welcome Back!</span>
          <a className="text-info text-underline-hover" href="#/">
            Register
          </a>
        </div>
      </div>
      <div className="auth--form">
        <form method="post" onSubmit={onSubmit}>
          <div className="form-group">
            <label for="username">Username</label>
            <input
              id="username"
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <div className="input-with-icon icon-right">
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="btn btn-icon-only"
                type="button"
                id="passToggle"
              >
                <i className="ic-view-off"></i>
              </button>
            </div>
            <div className="text-right">
              <a className="font-14 text-info text-underline-hover" href="#/">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="btn btn-block btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
