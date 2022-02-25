import React from "react";
import logo from "../logo.png";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const registerSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required."),
    lastName: Yup.string().required("Last name is required."),
    username: Yup.string().required("Username is required."),
    phoneNumber: Yup.string().required("Phone number is required."),
    email: Yup.string().email().required("Email is required."),
    password: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum")
      .required("Password is required."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password does not match.")
      .required("Confirmation password is required."),
  });

  const onSubmit = (values) => {
    axios.post("", { values }).then((res) => {
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
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          touched,
          isValid,
          dirty,
        } = formik;
        return (
          <div className="auth--wrapper">
            <div className="auth--logo">
              <a href="#/">
                <img src={logo} alt="logo" height="100" />
              </a>
            </div>
            <div className="auth--head">
              <h3 className="mb-1">Register</h3>
              <div className="d-flex align-items-center justify-content-between font-14">
                <span className="text-gray-500">Welcome to IntelliJobs!</span>
                <Link className="text-info text-underline-hover" to="/login">
                  Login
                </Link>
              </div>
            </div>
            <div className="auth--form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    className="form-control"
                    value={values.firstName}
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstName && touched.firstName && (
                    <span className="error">{errors.firstName}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastName && touched.lastName && (
                    <span className="error">{errors.lastName}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={values.username}
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.username && touched.username && (
                    <span className="error">{errors.username}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone No.</label>
                  <input
                    className="form-control"
                    type="text"
                    value={values.phoneNumber}
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <span className="error">{errors.phoneNumber}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-with-icon icon-right">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <span className="error">{errors.password}</span>
                    )}
                    <button className="btn btn-icon-only" type="button">
                      <i className="ic-view-off"></i>
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-with-icon icon-right">
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <span className="error">{errors.confirmPassword}</span>
                    )}
                    <button className="btn btn-icon-only" type="button">
                      <i className="ic-view-off"></i>
                    </button>
                  </div>
                </div>
                <button
                  className="btn btn-block btn-primary"
                  type="submit"
                  disabled={!(dirty && isValid)}
                >
                  Register
                </button>
              </form>
              <p className="mt-3 mb-0 font-12">
                By continuing you agree to our{" "}
                <a className="text-info text-underline-hover" href="#/">
                  Terms and Conditions
                </a>
                ,our{" "}
                <a className="text-info text-underline-hover" href="#/">
                  Privacy Policy
                </a>
                , and the Job Portal® Program Terms.
              </p>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Register;
