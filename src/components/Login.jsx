import axios from "axios";
import logo from "../logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const logInSchema = Yup.object().shape({
    username: Yup.string().required("Username is required."),
    password: Yup.string().required("Password is required."),
  });

  const setToken = (token) => {
    localStorage.setItem("access_token", token);
  };

  let navigate = useNavigate();
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
        navigate("/");
        setToken(response.data.data.access);
      })
      .catch((error) => {
        toast.error("Invalid Username or Password", {
          position: "top-right",
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          className: "toastify-text",
        });
        console.log(error)
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
            <ToastContainer />
            <div className="auth--logo">
              <Link to="/feeds">
                <img src={logo} alt="Ecommerce logo" height="100" />
              </Link>
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
