import { React, useState } from "react";
import logo from "../logo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    password2: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const registerSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required."),
    lastName: Yup.string().required("Last name is required."),
    username: Yup.string().required("Username is required."),
    phoneNumber: Yup.string().required("Phone number is required."),
    email: Yup.string().email().required("Email is required."),
    password: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum")
      .required("Password is required."),
    password2: Yup.string()
      .matches(formValues.password, "Password does not match.")
      .required("Confirmation password is required."),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("", { formValues }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={onSubmit}
    >
      <div class="auth--wrapper">
        <div class="auth--logo">
          <a href="#/">
            <img src={logo} alt="logo" height="100" />
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
          <form method="post" enctype="multipart/form-data" onSubmit={onSubmit}>
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                class="form-control"
                name="firstName"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                class="form-control"
                name="lastName"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="username">username</label>
              <input
                type="text"
                class="form-control"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="phoneNumber">Phone No.</label>
              <input
                class="form-control"
                type="text"
                name="phoneNumber"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                class="form-control"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <div class="input-with-icon icon-right">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  onChange={handleChange}
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
                  name="password2"
                  onChange={handleChange}
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
    </Formik>
  );
};

export default Register;
