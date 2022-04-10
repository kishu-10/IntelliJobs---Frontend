import React, { useEffect, useState } from "react";
import logo from "../logo.png";

const Footer = () => {
  const [checked, setChecked] = useState("");

  const changeTheme = (checked) => {
    if (checked) {
      document.documentElement.setAttribute("theme", "dark");
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      setChecked("");
      document.documentElement.removeAttribute("theme");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const current = localStorage.getItem("theme");
    if (current === "dark") {
      setChecked(true);
    } else {
      setChecked("");
    }
  }, [setChecked]);

  return (
    <footer>
      <div className="container">
        <div className="footer--middle">
          <div className="row">
            <div className="col-lg-2 mr-5">
              <img src={logo} height="80" alt="" />
              <ul className="list list-inline list--socials">
                <li>
                  <a
                    className="social--link"
                    href="https://www.facebook.com/texo.com.np"
                    title="Like us on facebook"
                  >
                    <i className="ic-fb-circle"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="social--link"
                    href="https://www.instagram.com/texo.com.np"
                    title="Follow us on instagram"
                  >
                    <i className="ic-logo-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <ul className="list footer--links">
                <li className="list-head">Information</li>
                <li>
                  <a href="#/">About Us</a>
                </li>
                <li>
                  <a href="#/">Privacy Policy</a>
                </li>
                <li>
                  <a href="#/">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <ul className="list footer--links">
                <li className="list-head">Other Services</li>
                <li>
                  <a href="#/">Contact Us</a>
                </li>
                <li>
                  <a href="#/">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <ul className="list footer--links">
                <li className="list-head">Contact Numbers</li>
                <li>
                  <a href="#/">mhrznkishu.10@gmail.com</a>
                </li>
                <li>
                  <a href="#/">9861233954</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4">
              <ul className="list footer--links">
                <li className="list-head">Switch Theme</li>
                <li>
                  <ul className="list list-inline">
                    <span className="mr-2">Light</span>
                    <li>
                      <div className="custom-control custom custom-switch">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          onChange={(e) => {
                            setChecked(e.currentTarget.checked);
                            changeTheme(e.currentTarget.checked);
                          }}
                          checked={checked}
                          id="customSwitch3"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch3"
                        ></label>
                        <span className="mr-2">Dark</span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer--copyright">
          <span>
            © <span className="date--year"></span> IntelliJobs. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
