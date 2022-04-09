import React from "react";
import avatar from "../assets/avatar.png";
import image from "../assets/post-image.png";

const HomePost = () => {
  return (
    <div className="container container--mid col-lg-5 col-md-6 col-6">
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
      </div>
    </div>
  );
};

export default HomePost;
