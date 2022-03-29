import { React, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import avatar from "../assets/avatar.png";
import HomePost from "./HomePost";
import HomeJobs from "./HomeJobs";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/users";

const Home = () => {
  const userStore = useSelector((state) => state.user.value);

  const userId = localStorage.getItem("userId");

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
        dispatch(
          login(result.data.data)
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [userId, dispatch]);

  return (
    <>
      <Navbar />
      <div className="row row--grey text-center">
        <div className="container col-lg-3 col-6">
          <div className="container col-lg align-items-center">
            <a className="feeds-profile-pic" href="#/">
              <img
                src={userStore.picture ? userStore.picture : avatar}
                height="80"
                alt=""
              />
            </a>
            <ul className="list footer--links mt-3 mb-3">
              <li className="font-weight-bold">{userStore.name}</li>
              <li>{userStore.email}</li>
            </ul>
            {/* <div className="text-left p-3">
              <hr></hr>
              <ul className="list footer--links ">
                <li className="font-weight-bold">Education</li>
                <li>Lorem: Lorem Ipsum</li>
                <li>Lorem: Lorem Ipsum</li>
              </ul>
              <hr></hr>
              <ul className="list footer--links text-left">
                <li className="font-weight-bold">Skills</li>
                <li>Lorem: Lorem Ipsum</li>
                <li>Lorem: Lorem Ipsum</li>
              </ul>
            </div> */}
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
