import React, { useState } from "react";
import logo from "../logo.svg";

const Footer = () => {
  const [checked, setChecked] = useState("");
  return (
    <footer>
      <div className="container">
        <div className="footer--middle">
          <div className="row">
            <div className="col-lg-2">
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
                <li>
                  <a href="#/">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <ul className="list footer--links">
                <li className="list-head">Our Services</li>
                <li>
                  <a href="#/">Shipping Policy</a>
                </li>
                <li>
                  <a href="#/">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <ul className="list footer--links">
                <li className="list-head">Contact Us</li>
                <li>
                  <a href="#/">9861233954</a>
                </li>
                <li>
                  <a href="#/">mhrznkishu.10@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4">
              <ul className="list footer--links">
                <li className="list-head">Switch Theme</li>
                <li>
                  <ul className="list list-inline">
                    <span class="mr-2">Light</span>
                    <li>
                      <div class="custom-control custom custom-switch">
                        <input
                          class="custom-control-input"
                          type="checkbox"
                          onChange={(e) => setChecked(e.currentTarget.checked)}
                          checked={checked}
                          id="customSwitch3"
                        />
                        <label
                          class="custom-control-label"
                          for="customSwitch3"
                        ></label>
                        <span class="mr-2">Dark</span>
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
