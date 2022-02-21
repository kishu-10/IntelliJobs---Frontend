import React, { useState } from "react";
import logo from "./logo.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div class="auth--wrapper">
      <div class="auth--logo">
        <a href="{% url 'store:home' %}">
          <img src={logo} alt="Ecommerce logo" height="50" />
        </a>
      </div>
      <div class="auth--head">
        <h3 class="mb-1">Login</h3>
        <div class="d-flex align-items-center justify-content-between font-14">
          <span class="text-gray-500">Welcome Back!</span>
          <a class="text-info text-underline-hover" href="#/">
            Register
          </a>
        </div>
      </div>
      <div class="auth--form">
        <form method="post">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              id="username"
              type="text"
              class="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <div class="input-with-icon icon-right">
              <input
                type="password"
                class="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button class="btn btn-icon-only" type="button" id="passToggle">
                <i class="ic-view-off"></i>
              </button>
            </div>
            <div class="text-right">
              <a class="font-14 text-info text-underline-hover" href="#/">
                Forgot Password?
              </a>
            </div>
          </div>
          <button class="btn btn-block btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
