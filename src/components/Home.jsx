import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import avatar from "../assets/avatar.png";
import image from "../assets/post-image.png";
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="section--hero">
        <div className="row row--grey text-center">
          <div className="container col-lg-3 col-6">
            <div className="container col-md-6 mt-3">
              <a className="navbar-brand" href="#/">
                <img src={avatar} height="80" alt="" />
              </a>
              <ul className="list footer--links mt-3">
                <li className="font-weight-bold">Kishu Maharjan</li>
                <li>mhrznkishu.10@gmail.com</li>
                <li>9861233954</li>
              </ul>
              <hr></hr>
              <ul className="list footer--links">
                <li className="font-weight-bold">Kishu Maharjan</li>
                <li>mhrznkishu.10@gmail.com</li>
                <li>9861233954</li>
              </ul>
              <hr></hr>
              <ul className="list footer--links">
                <li className="font-weight-bold">Kishu Maharjan</li>
                <li>mhrznkishu.10@gmail.com</li>
                <li>9861233954</li>
              </ul>
              <hr></hr>
            </div>
          </div>
          <div className="container container--mid col-lg-5 col-md-6 col-6">
            <div className="feeds-add-status-container">
              <div className="row add-status-row">
                <div className="container col-lg-2">
                  <img src={avatar} height="90" alt="" />
                </div>
                <div className="container col-lg-9 col-md-9 col-6 mb-4">
                  <ul className="list footer--links">
                    <li>
                      <div className="input-group">
                        <textarea
                          className="form-control"
                          placeholder="Enter your status"
                          rows="6"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row add-picture-row">
                <div className="col-lg-4 col-6">
                  <Icon
                    className="add-status-icon"
                    icon="flat-color-icons:picture"
                  />
                  <small>Picture</small>
                </div>
                <div className="col-lg-4 col-6">
                  <Icon
                    className="add-status-icon"
                    icon="fluent:video-clip-20-filled"
                    style={{ color: "red" }}
                  />
                  <small>Videos</small>
                </div>
                <div className="col-lg-4 col-6">
                  <Icon
                    className="add-status-icon"
                    icon="ri:article-fill"
                    style={{ color: "green", height: "28px" }}
                  />
                  <small>Article</small>
                </div>
              </div>
            </div>
            <div className="feeds-posts-container">
            <div className="row post-author-row">
                <div className="col-lg-2">
                  <img src={avatar} height="70" alt="" />
                </div>
                <div className="col-lg-10 col-md-9 col-6">
                  <p className="font-weight-bold">Kishu Maharjan</p>
                  <small className="text-muted">Feb 28, 2022</small>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
              <img
                className="feeds-post-image"
                src={image}
                height="90"
                alt=""
              />
              <div className="float-sm-left">
              <small className="text-muted">5.4k Likes</small>
              </div>
              <div className="row post-actions-row">
                <div className="col-lg-4 col-6">
                  <Icon
                    className="posts-action-icons"
                    icon="ant-design:like-outlined"
                  />
                  <small>Like</small>
                </div>
                <div className="col-lg-4 col-6">
                  <Icon
                    className="posts-action-icons"
                    icon="fluent:comment-20-regular"
                  />
                  <small>Comment</small>
                </div>
                <div className="col-lg-4 col-6">
                  <Icon
                    className="posts-action-icons"
                    icon="typcn:arrow-forward-outline"
                  />
                  <small>Share</small>
                </div>
              </div>
            </div>
            <div className="feeds-posts-container">
            <div className="row post-author-row">
                <div className="col-lg-2">
                  <img src={avatar} height="70" alt="" />
                </div>
                <div className="col-lg-10 col-md-9 col-6">
                  <p className="font-weight-bold">Kishu Maharjan</p>
                  <small className="text-muted">Feb 28, 2022</small>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
              <img
                className="feeds-post-image"
                src={image}
                height="90"
                alt=""
              />
              <div className="float-sm-left">
              <small className="text-muted">5.4k Likes</small>
              </div>
              <div className="row post-actions-row">
                <div className="col-lg-4 col-6">
                  <Icon
                    className="posts-action-icons"
                    icon="ant-design:like-outlined"
                  />
                  <small>Like</small>
                </div>
                <div className="col-lg-4 col-6">
                  <Icon
                    className="posts-action-icons"
                    icon="fluent:comment-20-regular"
                  />
                  <small>Comment</small>
                </div>
                <div className="col-lg-4 col-6">
                  <Icon
                    className="posts-action-icons"
                    icon="typcn:arrow-forward-outline"
                  />
                  <small>Share</small>
                </div>
              </div>
            </div>
          </div>
          <div className="container container--content col-lg-3 col-md-6 col-6">
            <div className="font-weight-bold mt-3">
              <span>Job Vacancies</span>
            </div>
            <ul className="list">
              <li className="feeds-job-list">
                <div className="row feeds-job-row">
                  <div className="col-lg-3">
                    <a className="navbar-brand" href="#/">
                      <img src={avatar} height="80" alt="" />
                    </a>
                  </div>
                  <div className="col-lg-8 feeds-job-desc">
                    <p className="font-weight-bold">Python Django Intern</p>
                    <p>Google Inc</p>
                    <p>Jan 5th, 2022</p>
                  </div>
                </div>
              </li>
              <li className="feeds-job-list">
                <div className="row feeds-job-row">
                  <div className="col-lg-3">
                    <a className="navbar-brand" href="#/">
                      <img src={avatar} height="80" alt="" />
                    </a>
                  </div>
                  <div className="col-lg-8 feeds-job-desc">
                    <p className="font-weight-bold">Python Django Intern</p>
                    <p>Google Inc</p>
                    <p>Jan 5th, 2022</p>
                  </div>
                </div>
              </li>
              <li className="feeds-job-list">
                <div className="row feeds-job-row">
                  <div className="col-lg-3">
                    <a className="navbar-brand" href="#/">
                      <img src={avatar} height="80" alt="" />
                    </a>
                  </div>
                  <div className="col-lg-8 feeds-job-desc">
                    <p className="font-weight-bold">Python Django Intern</p>
                    <p>Google Inc</p>
                    <p>Jan 5th, 2022</p>
                  </div>
                </div>
              </li>
              <li className="feeds-job-list">
                <div className="row feeds-job-row">
                  <div className="col-lg-3">
                    <a className="navbar-brand" href="#/">
                      <img src={avatar} height="80" alt="" />
                    </a>
                  </div>
                  <div className="col-lg-8 feeds-job-desc">
                    <p className="font-weight-bold">Python Django Intern</p>
                    <p>Google Inc</p>
                    <p>Jan 5th, 2022</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
