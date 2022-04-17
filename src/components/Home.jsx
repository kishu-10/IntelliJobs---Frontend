import { React, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import avatar from "../assets/avatar.png";
import HomePost from "./HomePost";
import HomeJobs from "./HomeJobs";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/users";
import { Icon } from "@iconify/react";
import { Modal } from "@mantine/core";
import { useForm } from "react-hook-form";
import { showSuccess, showError } from "../utils/toast";
const Home = () => {
  const userStore = useSelector((state) => state.user.value);
  const [opened, setOpened] = useState(false);
  const [image, setImage] = useState(null);
  const userId = localStorage.getItem("userId");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("caption", data.caption);
    console.log(formData);
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/feeds/posts/",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        showSuccess("Post added successfully.");
        setOpened(false);
      })
      .catch((error) => {
        showError("Error");
      });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0].name);
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, [userId, navigate]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(
          `http://127.0.0.1:8000/api/users/detail-${userId}/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        dispatch(login(result.data.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [userId, dispatch]);

  const handleNavigate = (evt) => {
    evt.preventDefault();
    if (userStore.user_type === "Candidate") {
      navigate("/profile");
    } else {
      window.location.replace("http://127.0.0.1:8000/dashboard/");
    }
  };

  return (
    <>
      <Modal
        size="50%"
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add New Post?"
      >
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg">
              <div className="form-group">
                <label className="font-weight-bold" htmlFor="picture">
                  Image
                </label>
                <div className="custom-file mt-2">
                  <input
                    className="custom-file-input"
                    type="file"
                    accept="image"
                    {...register("image", { required: true })}
                    onChange={(e) => handleFileChange(e)}
                  />
                  <label className="custom-file-label">{image}</label>
                  {errors.image && (
                    <p className="error">This field is required</p>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label className="font-weight-bold" htmlFor="caption">
                  Caption
                </label>
                <textarea
                  rows={5}
                  className="form-control mt-2"
                  {...register("caption", { required: true })}
                />
                {errors.caption && (
                  <p className="error">This field is required</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-9 offset-md-10 pl-5">
            <button className="btn btn-primary" type="submit">
              Post
            </button>
          </div>
        </form>
      </Modal>
      <Navbar />
      <div className="row row--grey text-center">
        <div className="container col-lg-3 col-6">
          <div className="container col-lg align-items-center">
            <Link
              className="feeds-profile-pic"
              to=""
              onClick={handleNavigate.bind(this)}
            >
              <img
                src={userStore.picture ? userStore.picture : avatar}
                height="100"
                alt=""
              />
              <ul className="list footer--links mt-3 mb-3">
                <li className="font-weight-bold">{userStore.name}</li>
                <li>{userStore.email}</li>
              </ul>
            </Link>
            <hr />
            <div className="text-right">
              <ul className="list footer--links mb-3">
                <li className="font-weight-bold">
                  <Link
                    className="text-primary"
                    to={""}
                    onClick={() => setOpened(true)}
                  >
                    <Icon
                      icon="fluent:add-12-filled"
                      fontSize={14}
                      style={{ paddingBottom: "1.5px" }}
                    />{" "}
                    Status
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <HomePost />
        <HomeJobs />
      </div>
      <Footer />
    </>
  );
};

export default Home;
