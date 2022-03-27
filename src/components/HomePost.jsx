import React from "react";
import avatar from "../assets/avatar.png";
import image from "../assets/post-image.png";
import { Icon } from "@iconify/react";

const HomePost = () => {
  return (
    <div className="container container--mid col-lg-5 col-md-6 col-6">
      <div className="feeds-add-status-container">
        <div className="row add-status-row">
          <div className="container col-lg-2">
            <img src={avatar} height="90" alt="" />
          </div>
          <div className="container col-lg-9 col-md-9 col-6">
            <ul className="list footer--links">
              <li>
                <div className="input-group">
                  <textarea
                    className="form-control"
                    placeholder="Enter your status"
                    rows="3"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row add-picture-row">
          <div className="col-lg">
            <Icon className="add-status-icon" icon="flat-color-icons:picture" />
            <small>Picture</small>
          </div>
          <div className="col-lg">
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
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <img className="feeds-post-image" src={image} height="90" alt="" />
        <div className="float-sm-left">
          <small className="text-muted">5.4k Likes</small>
        </div>
        <div className="row post-actions-row">
          <div className="col-lg">
            <Icon
              className="posts-action-icons"
              icon="ant-design:like-outlined"
            />
            <small>Like</small>
          </div>
          <div className="col-lg">
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
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <img className="feeds-post-image" src={image} height="90" alt="" />
        <div className="float-sm-left">
          <small className="text-muted">5.4k Likes</small>
        </div>
        <div className="row post-actions-row">
          <div className="col-lg">
            <Icon
              className="posts-action-icons"
              icon="ant-design:like-outlined"
            />
            <small>Like</small>
          </div>
          <div className="col-lg">
            <Icon
              className="posts-action-icons"
              icon="typcn:arrow-forward-outline"
            />
            <small>Share</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePost;
