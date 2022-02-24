import axios from "axios";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const logInSchema = Yup.object().shape({
    username: Yup.string().required("Username is required."),
    password: Yup.string().required("Password is required."),
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
      validationSchema={logInSchema}
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
                <img src={logo} alt="Ecommerce logo" height="100" />
              </a>
            </div>
            <div className="auth--head">
              <h3 className="mb-1">Login</h3>
              <div className="d-flex align-items-center justify-content-between font-14">
                <span className="text-gray-500">Welcome Back!</span>
                <Link className="text-info text-underline-hover" to="/register">
                  Register
                </Link>
              </div>
            </div>
            <div className="auth--form">
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    className="form-control"
                    name="username"
                    value={values.username}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.username && touched.username && (
                    <span className="error">{errors.username}</span>
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
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-icon-only"
                      type="button"
                      id="passToggle"
                    >
                      <i className="ic-view-off"></i>
                    </button>
                    {errors.password && touched.password && (
                      <span className="error">{errors.password}</span>
                    )}
                  </div>
                  <div className="text-right">
                    <a
                      className="font-14 text-info text-underline-hover"
                      href="#/"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button
                  className="btn btn-block btn-primary"
                  type="submit"
                  disabled={!(dirty && isValid)}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
