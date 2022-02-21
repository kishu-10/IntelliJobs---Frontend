import React, { useState } from "react";
import logo from "./logo.svg";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  return (
    <div class="auth--wrapper">
      <div class="auth--logo">
        <a href="#/">
          <img src={logo} alt="logo" height="50" />
        </a>
      </div>
      <div class="auth--head">
        <h3 class="mb-1">Register</h3>
        <div class="d-flex align-items-center justify-content-between font-14">
          <span class="text-gray-500">Welcome to IntelliJobs!</span>
          <a class="text-info text-underline-hover" href="#/">
            Login
          </a>
        </div>
      </div>
      <div class="auth--form">
        <form method="post" enctype="multipart/form-data">
          <div class="form-group">
            <label for="firstname">First Name</label>
            <input
              id="username"
              type="text"
              class="form-control"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="lastname">Last Name</label>
            <input
              id="username"
              type="text"
              class="form-control"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              value={[username]}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="phonenumber">Phone No.</label>
            <input
              class="form-control"
              type="text"
              value={phonenumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              class="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              <button class="btn btn-icon-only" type="button">
                <i class="ic-view-off"></i>
              </button>
            </div>
          </div>
          <div class="form-group">
            <label for="password2">Confirm Password</label>
            <div class="input-with-icon icon-right">
              <input
                type="password"
                class="form-control"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
              <button class="btn btn-icon-only" type="button">
                <i class="ic-view-off"></i>
              </button>
            </div>
          </div>
          <button class="btn btn-block btn-primary" type="submit">
            Register
          </button>
        </form>
        <p class="mt-3 mb-0 font-12">
          By continuing you agree to our{" "}
          <a class="text-info text-underline-hover" href="#/">
            Terms and Conditions
          </a>
          ,our{" "}
          <a class="text-info text-underline-hover" href="#/">
            Privacy Policy
          </a>
          , and the Job Portal® Program Terms.
        </p>
      </div>
    </div>
  );
};

export default Register;
