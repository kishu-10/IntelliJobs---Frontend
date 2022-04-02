import axios from "axios";
import logo from "../logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { showError } from "../utils/toast";
import { useDispatch } from "react-redux";
import { login } from "../features/users";
import { useEffect } from "react";

const Login = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const logInSchema = Yup.object().shape({
    username: Yup.string().required("Username is required."),
    password: Yup.string().required("Password is required."),
  });

  const setToken = (token, userId) => {
    localStorage.setItem("access_token", token);
    localStorage.setItem("is_logged_in", true);
    localStorage.setItem("userId", userId);
  };

  const dispatch = useDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/feeds");
    }
  }, [navigate]);

  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("password", values.password);
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/token/",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        setToken(response.data.data.access, response.data.data.user.id);
        if (
          response.data.data.user.verified_email &&
          response.data.data.user.user_type === "Candidate"
        ) {
          navigate("/feeds");
        } else if (
          response.data.data.user.verified_email &&
          (response.data.data.user.user_type === "Organization" ||
            response.data.data.user.user_type === "Staff")
        ) {
          window.location.replace(
            `http://127.0.0.1:8000/dashboard/login/${response.data.data.user.uuid}/`
          );
        } else {
          navigate("/");
        }
        dispatch(
          login({
            id: response.data.data.user.id,
            name: response.data.data.user.name,
            username: response.data.data.user.username,
            email: response.data.data.user.email,
            user_type: response.data.data.user.user_type,
            verified_email: response.data.data.user.verified_email,
            picture: response.data.data.user.picture,
          })
        );
      })
      .catch((error) => {
        showError(error.response.data.data.message?error.response.data.data.message[0]:"Invalid Username or Password");
        console.log(error);
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
              {localStorage.getItem("userId") ? (
                <Link to="/feeds">
                  <img src={logo} alt="Ecommerce logo" height="100" />
                </Link>
              ) : (
                <Link to="">
                  <img src={logo} alt="Ecommerce logo" height="100" />
                </Link>
              )}
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
                  </div>
                  {errors.password && touched.password && (
                    <span className="error">{errors.password}</span>
                  )}
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
