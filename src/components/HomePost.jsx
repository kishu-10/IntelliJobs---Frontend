import React, { useState } from "react";
import avatar from "../assets/avatar.png";
import { useEffect } from "react";
import axios from "axios";
import { Skeleton } from "@mantine/core";

const HomePost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(
          `http://127.0.0.1:8000/api/feeds/posts/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setPosts(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  if (posts) {
    return (
      <div className="container container--mid col-lg-5 col-md-6 col-6">
        {posts.map((post, index) => (
          <div className="feeds-posts-container" key={index}>
            <div className="row post-author-row">
              <div className="col-lg-2">
                <img
                  src={post.display_picture ? post.display_picture : avatar}
                  height="70"
                  alt=""
                />
              </div>
              <div className="col-lg-10 col-md-9 col-6">
                <p className="font-weight-bold">{post.author_name}</p>
                <small className="text-muted font-12">{post.date_updated}</small>
                <p>{post.caption}</p>
              </div>
            </div>
            <img
              className="feeds-post-image"
              src={post.image}
              height="90"
              alt=""
            />
          </div>
        ))}
      </div>
    );
  }
  return <Skeleton height={8} radius="xl" />
};

export default HomePost;
